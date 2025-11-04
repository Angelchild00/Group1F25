# Group1F25 – SafeDrive App  

## Overview  
SafeDrive is a mobile-based driver behavior monitoring system that uses smartphone sensors to assess driving habits and generate safety scores.  

## Current Progress (Phase 2)  
-  Domain Model & Use Case Diagrams Completed  
-  User Stories & Requirements Defined  
-  Initial Express.js Server Set Up  
-  Azure Boards Configured for Sprint Tracking
  
## Setup & Installation
1. Navigate to the server directory (vscode or terminal):
  cd server
2. Install dependencies:
  npm install  /   npm install express
3. Start the server:
  node index.js
5. Server will be running on http://localhost:3000
   
## API Endpoints
1.GPS
- GET /gps/start - Start GPS tracking
- GET /gps/stop - Stop GPS tracking
- GET /gps/current - Get current GPS data
2.Speed
- GET /speed/calculate - Calculate current speed
- GET /speed/reset - Reset speed data
3.Monitor
- GET /monitor/start- Start monitoring
- GET /monitor/stop - Stop monitoring
- GET /monitor/history - Get monitoring history
  

