CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending'
);

INSERT INTO tasks (name, status) VALUES
  ('Buy groceries', 'pending'),
  ('Walk the dog', 'done'),
  ('Read a book', 'pending'),
  ('Write report', 'done'),
  ('Clean house', 'pending'),
  ('Call mom', 'pending'),
  ('Tea', 'pending');
