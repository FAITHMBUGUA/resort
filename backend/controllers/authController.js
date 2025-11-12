import pool from '../config/db.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
  const { name, gender, age, email, password } = req.body;
  if (!name || !gender || !age || !email || !password)
    return res.status(400).json({ error: 'All fields are required' });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const existing = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
    if (existing.rows.length > 0)
      return res.status(400).json({ error: 'Email already exists' });

    await pool.query(
      'INSERT INTO users (name, gender, age, email, password) VALUES ($1,$2,$3,$4,$5)',
      [name, gender, age, email, hashedPassword]
    );
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: 'Email and password required' });

  try {
    const result = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
    if (result.rows.length === 0)
      return res.status(400).json({ error: 'Invalid credentials' });

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ error: 'Invalid credentials' });

    res.json({
      message: 'Login successful',
      user: { name: user.name, email: user.email, gender: user.gender, age: user.age }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
