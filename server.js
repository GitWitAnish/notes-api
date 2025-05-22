// server.js

const express = require('express');
const app = express();
const PORT = 4000;

const notesRouter = require('./routes/notes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/notes', notesRouter);

// Root test route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple Notes API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
