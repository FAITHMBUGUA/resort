import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import pool from './config/db.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, async () => {
  console.log(`✅ Server running on port ${PORT}`);
  try {
    await pool.connect();
    console.log('🗄️ Connected to PostgreSQL');
  } catch (err) {
    console.error('Database connection failed', err);
  }
});
