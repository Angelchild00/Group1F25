class SpeedCalculator {
  constructor() {
    this.previousPosition = null;
  }

  // Calculate distance between two GPS points using Haversine formula
  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in kilometers
  }

  toRadians(degrees) {
    return degrees * (Math.PI/180);
  }

  // Calculate speed in km/h
  calculateSpeed(currentPosition) {
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

    const timeDiff = (currentPosition.timestamp - this.previousPosition.timestamp) / 1000; // seconds
    const speed = (distance / timeDiff) * 3600; // km/h

    this.previousPosition = currentPosition;
    return Math.round(speed * 100) / 100; // Round to 2 decimal places
  }

  reset() {
    this.previousPosition = null;
  }
}

module.exports = SpeedCalculator;
