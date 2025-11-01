class SpeedCalculator {
  constructor() {
    this.previousPosition = null;
  }

  // Simple distance calculation - found this approach online
  // Not super accurate but good enough for our app
  calculateDistance(lat1, lon1, lat2, lon2) {
    // Basic conversion: roughly 1 degree latitude = 111 km
    // longitude varies but we'll use 85 km as average
    const latDiff = lat2 - lat1;
    const lonDiff = lon2 - lon1;
    
    const latDistance = latDiff * 111; // km
    const lonDistance = lonDiff * 85;  // km (approximate)
    
    // Use pythagorean theorem to get straight line distance
    const distance = Math.sqrt(latDistance * latDistance + lonDistance * lonDistance);
    return Math.abs(distance); // make sure it's positive
  }

  // Calculate speed in km/h
  calculateSpeed(currentPosition) {
    // First time - no previous position to compare
    if (!this.previousPosition) {
      this.previousPosition = currentPosition;
      return 0;
    }

    const distance = this.calculateDistance(
      this.previousPosition.latitude,
      this.previousPosition.longitude,
      currentPosition.latitude,
      currentPosition.longitude
    );

    // Calculate time difference in seconds
    const timeDiff = (currentPosition.timestamp - this.previousPosition.timestamp) / 1000;
    
    // Avoid division by zero
    if (timeDiff <= 0 || timeDiff < 0.1) {
      return 0;
    }
    
    // Speed = distance / time, convert to km/h
    const speed = (distance / timeDiff) * 3600; // multiply by 3600 to convert from km/s to km/h

    // Update previous position for next calculation
    this.previousPosition = currentPosition;
    
    // Handle weird results
    if (isNaN(speed) || speed < 0) {
      return 0;
    }
    
    return Math.round(speed * 100) / 100; // round to 2 decimal places
  }

  reset() {
    this.previousPosition = null;
  }
}

module.exports = SpeedCalculator;
