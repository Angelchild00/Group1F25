const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Group 1F25 server is running 🚗💨');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
