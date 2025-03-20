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
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoMemoryServer } from 'mongodb-memory-server';

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

app.use(cookieParser());
app.use(express.json());
app.use(helmet());
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

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5200;

// Setup MongoDB Memory Server
async function startServer() {
  try {
    // Create an in-memory MongoDB instance
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    
    console.log('🚀 Connecting to in-memory MongoDB:', mongoUri);
    
    // Connect to the in-memory MongoDB instance
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to in-memory MongoDB');
    
    // Start the Express server
    app.listen(port, () => {
      console.log(`🌐 Server running on PORT ${port}...`);
      console.log(`💻 Visit the frontend at: http://localhost:5173`);
      console.log(`🔌 API is available at: http://localhost:${port}/api/v1`);
      console.log(`📝 This is a DEMO with temporary in-memory database.`);
      console.log(`   All data will be lost when the server restarts.`);
    });
  } catch (error) {
    console.log('❌ Error starting server:', error);
    process.exit(1);
  }
}

startServer(); 