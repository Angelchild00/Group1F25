// API service for backend communication (FR9)
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000/api';

// class ApiService {
//   constructor() {
//     // Set up axios instance with base URL
//     // Configure request/response interceptors
//   }

//   // Authentication methods (FR1)
//   async login(username, password) {
//     // POST /api/auth/login
//     // Return user data and token
//   }

//   async register(userData) {
//     // POST /api/auth/register
//     // Return success/error response
//   }

//   // Trip management methods (FR2, FR4, FR6)
//   async startTrip() {
//     // POST /api/trips/start
//     // Return trip ID
//   }

//   async endTrip(tripId, tripData) {
//     // PUT /api/trips/:id/end
//     // Return trip summary and score
//   }

//   async uploadSensorData(tripId, sensorData) {
//     // POST /api/trips/:id/data
//     // Upload GPS, speed, acceleration data
//   }

//   async getTripHistory(page = 1, limit = 10) {
//     // GET /api/trips
//     // Return paginated trip history
//   }

//   async getTripDetails(tripId) {
//     // GET /api/trips/:id
//     // Return detailed trip data
//   }

//   // Dashboard methods (FR10)
//   async getDashboardSummary() {
//     // GET /api/dashboard/summary
//     // Return score summary and statistics
//   }

//   async getAlerts() {
//     // GET /api/dashboard/alerts
//     // Return recent driving alerts
//   }
// }

// export default new ApiService();
