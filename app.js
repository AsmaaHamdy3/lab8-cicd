const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// الاتصال بالـ DB عن طريق environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET /tasks - جيب كل التاسكات من الـ DB
app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// POST /tasks - أضف تاسك جديدة
app.post('/tasks', async (req, res) => {
  const { name, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tasks (name, status) VALUES ($1, $2) RETURNING *',
      [name, status || 'pending']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// الاتصال بالـ DB عن طريق environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET /tasks - جيب كل التاسكات من الـ DB
app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// POST /tasks - أضف تاسك جديدة
app.post('/tasks', async (req, res) => {
  const { name, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tasks (name, status) VALUES ($1, $2) RETURNING *',
      [name, status || 'pending']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
