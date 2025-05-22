
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/notes - get all notes
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM notes ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// POST /api/notes - create a new note
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// UPDATE a note by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
  
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
  
    try {
      const result = await db.query(
        'UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *',
        [title, content, id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    }
  });
  
  // DELETE a note by ID
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await db.query(
        'DELETE FROM notes WHERE id = $1 RETURNING *',
        [id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      res.json({ message: 'Note deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    }
  });
  

module.exports = router;
