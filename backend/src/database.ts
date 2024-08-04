import sqlite3 from 'sqlite3';
sqlite3.verbose();
console.log('Connecting to the SQLite database...');
const db = new sqlite3.Database('./customer_management.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    identification_number TEXT UNIQUE,
    full_name TEXT,
    email TEXT,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    full_name TEXT,
    phone_number TEXT,
    email TEXT,
    birthdate TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )`);
});

export default db;