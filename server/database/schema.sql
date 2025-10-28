-- SafeDrive Database Schema Template
-- MySQL Database Structure

-- Users table for authentication (FR1)
-- CREATE TABLE users (
--   id, username, password_hash, email, created_at
-- );

-- Vehicles table for user vehicles
-- CREATE TABLE vehicles (
--   id, user_id, make, model, year, license_plate
-- );

-- Trips table for trip data (FR4, FR6)
-- CREATE TABLE trips (
--   id, user_id, vehicle_id, start_time, end_time, 
--   distance, duration, avg_speed, max_speed, driver_score
-- );

-- Sensor data table for real-time data (FR3)
-- CREATE TABLE sensor_data (
--   id, trip_id, timestamp, latitude, longitude, 
--   speed, acceleration_x, acceleration_y, acceleration_z
-- );

-- Driving events table for alerts (FR7, FR8)
-- CREATE TABLE driving_events (
--   id, trip_id, event_type, timestamp, severity, 
--   latitude, longitude, description
-- );

-- Parent-child relationships for notifications (FR8)
-- CREATE TABLE user_relationships (
--   id, parent_id, child_id, relationship_type, created_at
-- );
