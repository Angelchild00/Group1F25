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
    
    // Mock GPS updates every 2 seconds
    this.interval = setInterval(() => {
      this.mockData.latitude += (Math.random() - 0.5) * 0.001;
      this.mockData.longitude += (Math.random() - 0.5) * 0.001;
      this.mockData.timestamp = Date.now();
      
      this.callbacks.forEach(cb => cb(this.mockData));
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
