# JobTrail - Local Setup Guide

This guide will help you set up and run JobTrail on your localhost.

## Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (free tier is sufficient)

## Step 1: MongoDB Atlas Setup

1. Go to the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Create a new project
4. Create a free M0 cluster
   - Choose a cloud provider (AWS, GCP, or Azure)
   - Choose a region closest to you
   - Name your cluster (e.g., "JobTrail")
5. Set up database access:
   - Go to "Database Access" in the left menu
   - Click "Add New Database User"
   - Create a username and password (save these)
   - Set privileges to "Read and write to any database"
6. Set up network access:
   - Go to "Network Access" in the left menu
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development only) or add your specific IP
7. Get your connection string:
   - Go back to your cluster
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string (it will look like: `mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority`)
   - Replace `<username>` and `<password>` with your database user credentials
   - Replace `<database-name>` with "jobtrail"

## Step 2: Set up Environment Variables

1. Update the `.env` file in the root of the project:
```
NODE_ENV=development
PORT=5100
MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/jobtrail?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=1d
```
2. Replace the placeholders in the MONGO_URL with your actual MongoDB Atlas connection details

## Step 3: Install Dependencies

1. Install the project dependencies:
```bash
npm run setup-project
```

## Step 4: Run the Application

1. Start the development server:
```bash
npm run dev
```

2. The application should now be running on:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5100

## Step 5: Using the Application

1. Open http://localhost:5173 in your browser
2. Register an account (the first account will automatically be an admin)
3. Login and start using JobTrail!

## Troubleshooting

- If you encounter connection issues with MongoDB, double-check your connection string and network access settings
- If the application fails to start, check the console for error messages 