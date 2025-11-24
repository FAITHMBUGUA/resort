import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

app.use(cors());
app.use(bodyParser.json());




app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword }
    });

    res.json({ message: "User registered", userId: user.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, name: user.name, email: user.email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/api/rooms", async (req, res) => {
  const rooms = await prisma.room.findMany();
  res.json(rooms);
});


app.get("/api/conference", async (req, res) => {
  const halls = await prisma.conferenceHall.findMany();
  res.json(halls);
});


app.get("/api/services", async (req, res) => {
  const services = await prisma.service.findMany();
  res.json(services);
});

app.post("/api/bookings", async (req, res) => {
  const { userId, hallName, roomName, date, startHour, endHour } = req.body;

  try {
    const booking = await prisma.booking.create({
      data: { userId, hallName, roomName, date: new Date(date), startHour, endHour }
    });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: "Booking failed", details: err.message });
  }
});

app.get("/api/bookings/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const bookings = await prisma.booking.findMany({ where: { userId: parseInt(userId) } });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
