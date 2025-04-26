# AperiosAI

**AperiosAI** is a Node.js-based backend application that provides APIs for managing retailer data. It uses **MongoDB** for database storage and **Express.js** as the web framework.

---

## 🚀 Features

- Add new retailers with details like name, category, phone number, address, latitude, and longitude.
- Search for retailers by name, category, or location.
- Retrieve retailer details by ID.
- Built-in rate limiting to prevent API abuse.
- CORS support for cross-origin requests.

---

## 📁 Project Structure

```
aperiosai/
├── config/
│   └── db.js               # Database connection setup
├── controller/
│   └── data.controller.js  # Controller logic for retailer APIs
├── middleware/
│   └── (empty)             # Placeholder for custom middleware
├── models/
│   └── data.model.js       # Mongoose schema for retailer data
├── routes/
│   └── data.routes.js      # API routes for retailer operations
├── .env                    # Environment variables (not included in repo)
├── .gitignore              # Ignored files and folders
├── index.js                # Main entry point of the application
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

---

## ✅ Prerequisites

- Node.js (v16 or later)
- MongoDB (local or cloud)
- npm (Node Package Manager)

---

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd aperiosai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   MONGODB_URI=<your-mongodb-connection-string>
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

The server will run at: `http://localhost:3000`

---

## 📡 API Endpoints

**Base URL**: `/data`

### 1. Add Retailer

- **POST** `/add`
- **Description**: Add a new retailer.

**Request Body**:

```json
{
  "name": "Retailer Name",
  "category": "grocery",
  "phoneNumber": 1234567890,
  "address": "Retailer Address",
  "latitude": 12.3456,
  "longitude": 78.9012
}
```

**Responses**:
- `201 Created`: Retailer added successfully.
- `400 Bad Request`: Missing required fields or retailer already exists.

---

### 2. Search Retailers

- **GET** `/search`
- **Description**: Search for retailers by query parameters.

**Query Parameters**:
- `name` (optional)
- `category` (optional)
- `lat` (optional)
- `lng` (optional)
- `page` (optional, default: 0)
- `limit` (optional, default: 20)

**Response**:
- `200 OK`: List of matching retailers.

---

### 3. Get Retailer by ID

- **GET** `/:id`
- **Description**: Retrieve retailer details by ID.

**Responses**:
- `200 OK`: Retailer details.
- `400 Bad Request`: Invalid ID.
- `404 Not Found`: Retailer not found.

---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB ODM for Node.js.
- **dotenv**: Loads environment variables from `.env`.
- **express-rate-limit**: Basic rate-limiting middleware.
- **CORS**: Enables Cross-Origin Resource Sharing.

---

## 📄 License

This project is licensed under the **ISC License**.
