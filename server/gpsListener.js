class GPSListener {
  constructor() {
    this.isListening = false;
    this.callbacks = [];
    this.mockData = {
      latitude: 37.7749,
      longitude: -122.4194,
      timestamp: Date.now()
    };
  }

  startListening(callback) {
    this.isListening = true;
    this.callbacks.push(callback);
    this.updateCount = 0;
    this.lastUpdateTime = Date.now();
    
    // Mock GPS updates every 2 seconds
    this.interval = setInterval(() => {
      this.updateCount++;
      
      // Ensure proper time progression
      this.lastUpdateTime += 2000; // Add exactly 2 seconds
      
      // Simulate realistic driving scenario: normal -> speeding -> reckless -> normal
      let latChange, lngChange;
      if (this.updateCount <= 3) {
        // Starting normal - city driving (20-40 km/h)
        latChange = 0.0002 + (Math.random() * 0.0001); // ~22-33m forward
        lngChange = (Math.random() - 0.5) * 0.00005;
      } else if (this.updateCount <= 7) {
        // Normal highway driving (50-70 km/h)  
        latChange = 0.0003 + (Math.random() * 0.0001); // ~33-44m forward
        lngChange = (Math.random() - 0.5) * 0.00003;
      } else if (this.updateCount <= 12) {
        // Reckless speeding (100-120 km/h)
        latChange = 0.0006 + (Math.random() * 0.0002); // ~66-88m forward
        lngChange = (Math.random() - 0.5) * 0.00008;
      } else {
        // Back to normal (40-60 km/h)
        latChange = 0.00025 + (Math.random() * 0.00008); // ~27-36m forward
        lngChange = (Math.random() - 0.5) * 0.00004;
      }
      
      this.mockData.latitude += latChange;
      this.mockData.longitude += lngChange;
      
      // Create a NEW position object each time to avoid reference issues
      const newPosition = {
        latitude: this.mockData.latitude,
        longitude: this.mockData.longitude,
        timestamp: this.lastUpdateTime
      };
      
      this.callbacks.forEach(cb => cb(newPosition));
    }, 2000);
  }

  stopListening() {
    this.isListening = false;
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  getCurrentPosition() {
    return this.mockData;
  }
}

module.exports = GPSListener;
