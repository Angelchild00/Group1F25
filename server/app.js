// Main Express application setup
// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');

// Import route modules
// const authRoutes = require('./routes/auth');
// const tripRoutes = require('./routes/trips');
// const dashboardRoutes = require('./routes/dashboard');
// const adminRoutes = require('./routes/admin');

// Import middleware
// const { authenticateToken } = require('./middleware/auth');

// const app = express();

// Security and parsing middleware
// app.use(helmet()); // Security headers
// app.use(cors()); // Enable CORS for mobile app
// app.use(express.json()); // Parse JSON bodies
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Public routes (no authentication required)
// app.use('/api/auth', authRoutes);

// Protected routes (authentication required)
// app.use('/api/trips', authenticateToken, tripRoutes);
// app.use('/api/dashboard', authenticateToken, dashboardRoutes);
// app.use('/api/admin', authenticateToken, adminRoutes);

// Health check endpoint
// app.get('/health', (req, res) => {
//   res.json({ status: 'OK', timestamp: new Date().toISOString() });
// });

// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong!' });
// });

// 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// module.exports = app;
