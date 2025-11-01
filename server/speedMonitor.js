class SpeedMonitor {
  constructor(gpsListener, speedCalculator) {
    this.isMonitoring = false;
    this.speedHistory = [];
    this.speedLimit = 60; // km/h default speed limit
    this.alertThreshold = 80; // km/h dangerous speed threshold
    this.gpsListener = gpsListener;
    this.speedCalculator = speedCalculator;
  }

  logSpeedData(position, speed) {
    const timestamp = new Date().toLocaleTimeString();
    const speedStatus = this.getSpeedStatus(speed);
    
    console.log(`[${timestamp}] Speed: ${speed} km/h | Lat: ${position.latitude.toFixed(4)} | Lng: ${position.longitude.toFixed(4)} | Status: ${speedStatus}`);
    
    // Store in history
    this.speedHistory.push({ timestamp: Date.now(), speed, position });
    
    // Keep only last 15 readings for demo
    if (this.speedHistory.length > 15) {
      this.speedHistory.shift();
    }

    // Check for alerts
    this.checkSpeedAlerts(speed);
  }

  getSpeedStatus(speed) {
    if (speed < 5) return "STOPPED";
    if (speed < 30) return "SLOW";
    if (speed < this.speedLimit) return "NORMAL";
    if (speed < this.alertThreshold) return "FAST";
    if (speed < 100) return "SPEEDING";
    return "DANGEROUS";
  }

  checkSpeedAlerts(speed) {
    if (speed >= 100) {
      console.log(`EXTREME DANGER: Speed ${speed} km/h - RECKLESS DRIVING!`);
    } else if (speed > this.alertThreshold) {
      console.log(`DANGER: Speed ${speed} km/h exceeds safe limit!`);
    } else if (speed > this.speedLimit) {
      console.log(`WARNING: Speed ${speed} km/h above speed limit`);
    }
  }

  startMonitoring() {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    // Reset the speed calculator for monitoring
    this.speedCalculator.reset();
    console.log("Speed monitoring started using real GPS data...");
    
    // Start GPS listening and calculate speed from real position changes
    this.gpsListener.startListening((position) => {
      const speed = this.speedCalculator.calculateSpeed(position);
      this.logSpeedData(position, speed);
    });
  }

  stopMonitoring() {
    if (!this.isMonitoring) return;
    
    this.isMonitoring = false;
    this.gpsListener.stopListening();
    console.log("Speed monitoring stopped");
    this.showSpeedSummary();
  }

  showSpeedSummary() {
    if (this.speedHistory.length === 0) return;
    
    const speeds = this.speedHistory.map(h => h.speed);
    const avgSpeed = speeds.reduce((a, b) => a + b, 0) / speeds.length;
    const maxSpeed = Math.max(...speeds);
    const dangerousReadings = speeds.filter(s => s >= 100).length;
    const speedingReadings = speeds.filter(s => s > this.speedLimit).length;
    
    console.log("\nDRIVING BEHAVIOR SUMMARY:");
    console.log(`   Average Speed: ${avgSpeed.toFixed(1)} km/h`);
    console.log(`   Max Speed: ${maxSpeed} km/h`);
    console.log(`   Total Readings: ${this.speedHistory.length}`);
    console.log(`   Speeding Incidents: ${speedingReadings}`);
    console.log(`   Dangerous Driving: ${dangerousReadings}`);
    
    // Safety score calculation
    const safetyScore = Math.max(0, 100 - (dangerousReadings * 20) - (speedingReadings * 5));
    console.log(`   Safety Score: ${safetyScore}/100`);
  }

  getSpeedHistory() {
    return this.speedHistory;
  }
}

module.exports = SpeedMonitor;
