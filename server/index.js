const express = require('express');
const GPSListener = require('./gpsListener');
const SpeedCalculator = require('./speedCalculator');
const SpeedMonitor = require('./speedMonitor');
const app = express();
const PORT = 3000;

// Initialize components
const gpsListener = new GPSListener();
const speedCalculator = new SpeedCalculator();
const speedMonitor = new SpeedMonitor(gpsListener, speedCalculator);

app.get('/', (req, res) => {
  res.send('Group 1F25 server is running');
});

// GPS endpoints
app.get('/gps/current', (req, res) => {
  res.json(gpsListener.getCurrentPosition());
});

app.get('/gps/start', (req, res) => {
  gpsListener.startListening((data) => {
    console.log('GPS Update:', data);
  });
  res.json({ message: 'GPS listening started' });
});

app.get('/gps/stop', (req, res) => {
  gpsListener.stopListening();
  res.json({ message: 'GPS listening stopped' });
});

// Speed calculation endpoints
app.get('/speed/calculate', (req, res) => {
  const mockPosition = {
    latitude: 37.7749 + (Math.random() - 0.5) * 0.01,
    longitude: -122.4194 + (Math.random() - 0.5) * 0.01,
    timestamp: Date.now()
  };
  
  const speed = speedCalculator.calculateSpeed(mockPosition);
  
  res.json({
    position: mockPosition,
    speed_kmh: speed
  });
});

app.get('/speed/reset', (req, res) => {
  speedCalculator.reset();
  res.json({ message: 'Speed calculator reset' });
});

// Speed monitoring endpoints
app.get('/monitor/start', (req, res) => {
  speedMonitor.startMonitoring();
  res.json({ message: 'Speed monitoring started - check console for real-time data' });
});

app.get('/monitor/stop', (req, res) => {
  speedMonitor.stopMonitoring();
  res.json({ message: 'Speed monitoring stopped' });
});

app.get('/monitor/history', (req, res) => {
  res.json({
    history: speedMonitor.getSpeedHistory(),
    total_readings: speedMonitor.getSpeedHistory().length
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GPS: /gps/start, /gps/stop, /gps/current');
  console.log('  Speed: /speed/calculate, /speed/reset');
  console.log('  Monitor: /monitor/start, /monitor/stop, /monitor/history');
});
