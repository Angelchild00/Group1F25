const express = require('express');
const GPSListener = require('./gpsListener');
const app = express();
const PORT = 3000;

// Initialize GPS listener
const gpsListener = new GPSListener();

app.get('/', (req, res) => {
  res.send('Group 1F25 server is running');
});

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
