# 📝 Simple Notes API

A simple and modular backend API built with **Node.js**, **Express**, and **PostgreSQL** to manage notes via full CRUD operations — Create, Read, Update, and Delete. This API serves as a solid foundation for note-taking applications or any project that requires similar data management.

---

## 🚀 Features

- RESTful API for notes management
- Modular project structure (routes, controllers, DB config)
- PostgreSQL integration via `pg` library
- Environment variable support with `dotenv`
- Input validation and robust error handling
- Easily extendable (e.g., for auth or frontend integration)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- `pg` (Node PostgreSQL client)
- `dotenv` for environment variables
- `cors` for cross-origin support

---

## 📁 Project Structure

```
simple-notes-api/
├── routes/
│   └── notes.js          # Routes for /api/notes
├── db/
│   └── index.js          # PostgreSQL connection setup
├── .env                  # Environment variables
├── server.js             # Main server entry point
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/GitWitAnish/notes-api.git
   cd notes-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   PORT=4000
   DB_USER=your_db_username
   DB_HOST=localhost
   DB_DATABASE=notesdb
   DB_PASSWORD=your_db_password
   DB_PORT=5432
   ```

4. **Create the PostgreSQL database and table**

   ```sql
   CREATE DATABASE notesdb;

   CREATE TABLE notes (
     id SERIAL PRIMARY KEY,
     title TEXT NOT NULL,
     content TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. **Run the server**

   ```bash
   node server.js
   ```

   The server will start at `http://localhost:4000`.

---

## 📡 API Endpoints

All endpoints are prefixed with `/api/notes`

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/notes`     | Get all notes            |
| GET    | `/api/notes/:id` | Get a specific note      |
| POST   | `/api/notes`     | Create a new note        |
| PUT    | `/api/notes/:id` | Update an existing note  |
| DELETE | `/api/notes/:id` | Delete a note by ID      |

---

## 🧪 Testing

You can use tools like **curl**, **Postman**, or **Insomnia** to test the endpoints. Example:

```bash
curl -X POST http://localhost:4000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "Sample", "content": "Hello world"}'
```

---

## 📈 Future Improvements

- Authentication (e.g., JWT)
- Pagination and filtering
- Frontend integration (React/Vue)
- Docker containerization
- Deployment (Render, Vercel, etc.)

---

## 👨‍💻 Authors

- Built by Anish Karki

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).
