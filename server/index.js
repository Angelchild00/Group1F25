const express = require('express');
const SpeedCalculator = require('./speedCalculator');
const app = express();
const PORT = 3000;

// Initialize speed calculator
const speedCalculator = new SpeedCalculator();

app.get('/', (req, res) => {
  res.send('Group 1F25 server is running');
});

app.get('/speed/calculate', (req, res) => {
  // Mock GPS position for testing
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
