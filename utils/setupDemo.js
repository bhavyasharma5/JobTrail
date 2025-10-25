import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Job from '../models/JobModel.js';
import User from '../models/UserModel.js';
import { hashPassword } from '../utils/passwordUtils.js';

async function setupDemoUser() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    
    // Read demo data
    const demoData = JSON.parse(
      await readFile(new URL('./demoData.json', import.meta.url))
    );

    // Create or update demo user
    const { user: demoUser, jobs: demoJobs } = demoData;
    
    // Hash the password
    demoUser.password = await hashPassword(demoUser.password);
    
    // Create or update the demo user
    const user = await User.findOneAndUpdate(
      { email: demoUser.email },
      demoUser,
      { upsert: true, new: true }
    );

    // Delete existing demo jobs
    await Job.deleteMany({ createdBy: user._id });

    // Create new demo jobs
    const jobs = demoJobs.map((job) => ({
      ...job,
      createdBy: user._id
    }));
    
    await Job.create(jobs);
    
    console.log('Demo setup completed successfully!');
    console.log(`Demo user email: ${demoUser.email}`);
    console.log(`Demo user password: ${demoData.user.password}`);
    process.exit(0);
  } catch (error) {
    console.error('Demo setup failed:', error);
    process.exit(1);
  }
}

setupDemoUser();
