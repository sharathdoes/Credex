import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();

// Middleware
app.use(cors({
  origin: process.env.ORIGIN,
  methods: ["GET", "PUT", "POST"],
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());

// Routes


// MongoDB Connection
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Base Route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start Server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
