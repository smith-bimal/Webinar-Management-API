# Webinar Management API

A RESTful API backend for managing webinars built with Node.js, Express, and MongoDB.

## Tech Stack

- Node.js & Express.js
- MongoDB with Mongoose
- JWT for Authentication

## Database Schema

### User Model

- name (String, required)
- email (String, required, unique)
- password (String, required)
- phone (String, required)
- timestamps (created_at, updated_at)

### Webinar Model

- title (String, required)
- short_description (String, required)
- long_description (String, required)
- enrollment_date (Date, required)
- pricing (Number, required)
- video_url (String)
- transcript_url (String)
- status (String, enum: ['active', 'inactive'])
- thumbnail_url (String)
- timestamps (created_at, updated_at)

## API Endpoints

### Authentication

```
POST /api/auth/signup    - to register a new account
POST /api/auth/login     - to login the user
GET /api/auth/me         - to get user details
```

### Webinars

```
GET /api/webinars         - Get all webinars (Auth required)
GET /api/webinars/:id     - Get webinar by ID (Auth required)
POST /api/webinars        - Create new webinar (Auth required)
PATCH /api/webinars/:id     - Update webinar (Auth required)
DELETE /api/webinars/:id  - Delete webinar (Auth required)
```

## API Request/Response Formats

### User Registration

```json
POST /api/auth/signup
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "strongpassword123",
  "phone": "+1234567890"
}

Response: {
  "token": "jwt_token_here",
  "userId": "user_id_here"
}
```

### User Login

```json
POST /api/auth/login
Body: {
  "email": "john@example.com",
  "password": "strongpassword123"
}

Response: {
  "token": "jwt_token_here",
  "userId": "user_id_here"
}
```

### Create Webinar

```json
POST /api/webinars
Headers: {
  "Authorization": "Bearer <token>"
}
Body: {
  "title": "Sample Webinar",
  "short_description": "Brief overview",
  "long_description": "Detailed description",
  "enrollment_date": "2024-03-20T10:00:00Z",
  "pricing": 99.99,
  "status": "active"
}
```

### Get Webinar Response

```json
{
  "status": "success",
  "data": {
    "id": "webinar_id",
    "title": "Sample Webinar",
    "short_description": "Brief overview",
    "long_description": "Detailed description",
    "enrollment_date": "2024-03-20T10:00:00Z",
    "pricing": 99.99,
    "video_url": "https://example.com/video",
    "transcript_url": "https://example.com/transcript",
    "status": "active",
    "thumbnail_url": "https://example.com/thumbnail",
    "createdAt": "2024-03-15T10:00:00Z",
    "updatedAt": "2024-03-15T10:00:00Z"
  }
}
```

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file with required environment variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=your_port_number
   ```
4. Run development server: `npm run dev`
5. Run production server: `npm start`

## Project Structure

```
├─ config/
│  └─ db.config.js
├─ controllers/
│  ├─ auth.controller.js
│  └─ webinar.controller.js
├─ middleware/
│  └─ auth.middleware.js
├─ models/
│  ├─ user.model.js
│  └─ webinar.model.js
├─ routes/
│  ├─ auth.routes.js
│  └─ webinar.routes.js
├─ .env
├─ .gitignore
├─ index.js
├─ package-lock.json
├─ package.json
└─ README.md
```
