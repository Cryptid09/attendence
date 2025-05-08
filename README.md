# Attendance Management System

A web-based attendance management system built with Node.js, Express, and MySQL.

## Features

- User management (CRUD operations)
- Attendance tracking
- Role-based access control
- RESTful API endpoints

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=attendance_system
   PORT=3000
   ```

4. Set up the database:
   - Create a new MySQL database
   - Run the SQL commands from `src/config/schema.sql`

5. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Users
- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get user by ID
- POST `/api/users` - Create new user
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user

## Project Structure

```
attendance-system/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── schema.sql
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── app.js
├── package.json
└── README.md
``` 