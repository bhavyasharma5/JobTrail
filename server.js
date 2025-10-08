import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// CORS configuration
// Enable CORS with more permissive options for development
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Allow localhost and any Vercel deployment URL
    if (
      origin.startsWith('http://localhost:') ||
      origin.includes('vercel.app') ||
      origin === 'https://job-trail-mu.vercel.app'
    ) {
      callback(null, true);
    } else {
      console.log('Blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Set-Cookie'],
  maxAge: 86400, // 24 hours
  preflightContinue: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" }
}));
app.use(mongoSanitize());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
  });
} else {
  app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
  });
}

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 10000;

try {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(process.env.MONGO_URL);
  console.log('MongoDB connected successfully');
  
  app.listen(port, () => {
    console.log(`Server running on PORT ${port}...`);
    console.log('Environment:', process.env.NODE_ENV);
    console.log('CORS enabled for:', ['https://job-trail-mu.vercel.app', 'http://localhost:5173']);
  });
} catch (error) {
  console.error('Server startup error:', error);
  process.exit(1);
}
