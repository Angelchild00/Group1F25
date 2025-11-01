class SpeedMonitor {
  constructor() {
    this.isMonitoring = false;
    this.speedHistory = [];
    this.speedLimit = 60; // km/h default speed limit
    this.alertThreshold = 80; // km/h dangerous speed threshold
    this.readingCount = 0;
  }

  generateRealisticSpeed() {
    this.readingCount++;
    
    // Demo scenario: speed over 100 for 5 readings, then back to normal
    if (this.readingCount >= 8 && this.readingCount <= 12) {
      // High speed phase (readings 8-12)
      return 105 + Math.random() * 15; // 105-120 km/h
    } else if (this.readingCount <= 3) {
      // Starting slow
      return 15 + Math.random() * 20; // 15-35 km/h
    } else if (this.readingCount <= 7) {
      // Normal acceleration
      return 40 + Math.random() * 30; // 40-70 km/h
    } else {
      // Back to normal after high speed
      return 45 + Math.random() * 25; // 45-70 km/h
    }
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
    this.readingCount = 0;
    console.log("Speed monitoring started...");
    console.log("Demo scenario: Normal driving -> Dangerous speeding -> Back to normal");
    
    // Realistic GPS updates every 2 seconds
    this.monitorInterval = setInterval(() => {
      // Generate realistic speed
      const speed = Math.round(this.generateRealisticSpeed() * 10) / 10;
      
      // Generate realistic position changes based on speed
      const distanceKm = (speed / 3600) * 2; // distance in 2 seconds
      const latChange = (distanceKm / 111) * (Math.random() - 0.5) * 2;
      const lngChange = (distanceKm / 85) * (Math.random() - 0.5) * 2;
      
      const mockPosition = {
        latitude: 37.7749 + latChange,
        longitude: -122.4194 + lngChange,
        timestamp: Date.now()
      };
      
      this.logSpeedData(mockPosition, speed);
      
    }, 2000);
  }

  stopMonitoring() {
    if (!this.isMonitoring) return;
    
    this.isMonitoring = false;
    clearInterval(this.monitorInterval);
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
