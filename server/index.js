const express = require('express');
const SpeedMonitor = require('./speedMonitor');
const app = express();
const PORT = 3000;

// Initialize speed monitor
const speedMonitor = new SpeedMonitor();

app.get('/', (req, res) => {
  res.send('Group 1F25 server is running');
});

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
  console.log('  /monitor/start - Start speed monitoring');
  console.log('  /monitor/stop - Stop monitoring');
  console.log('  /monitor/history - View speed history');
});
