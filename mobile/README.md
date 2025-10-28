# SafeDrive Mobile App (React Native)

## File Structure Template

### Screens
- `src/screens/LoginScreen.js` - User authentication (FR1)
- `src/screens/DashboardScreen.js` - Main dashboard with score summary (FR10)
- `src/screens/TripScreen.js` - Active trip recording (FR2, FR7)
- `src/screens/HistoryScreen.js` - Trip history and details (FR6)
- `src/screens/ProfileScreen.js` - User profile and settings

### Components
- `src/components/TripButton.js` - Start/Stop trip recording
- `src/components/ScoreDisplay.js` - Driver score visualization
- `src/components/AlertModal.js` - Unsafe driving alerts (FR8)
- `src/components/TripCard.js` - Trip history item
- `src/components/MapView.js` - Real-time location display

### Services
- `src/services/api.js` - API calls to backend
- `src/services/sensors.js` - GPS and accelerometer data (FR3)
- `src/services/notifications.js` - Push notifications (FR8)
- `src/services/storage.js` - Local data storage

### Utils
- `src/utils/permissions.js` - Location and sensor permissions
- `src/utils/validation.js` - Form validation helpers
- `src/utils/constants.js` - App constants and config

## Key Dependencies Needed
- expo-location (GPS tracking)
- expo-sensors (accelerometer data)
- expo-notifications (push notifications)
- react-navigation (screen navigation)
- axios (API calls)
