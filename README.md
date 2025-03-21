# JobTrail

A comprehensive job tracking application designed to help job seekers organize their job search process.

## Features

- Track job applications in one central location
- Visual analytics to gain insights on your job search
- Organize applications by status (pending, interview, declined, etc.)
- Set reminders for important deadlines
- Modern and intuitive user interface

## Database Setup

To set up the MongoDB Atlas database for JobTrail:

1. **Create a MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for a free account

2. **Create a Free Tier Cluster (M0 Sandbox)**
   - After logging in, click "Build a Database"
   - Choose the free tier option (M0 Sandbox)
   - Select your preferred cloud provider (AWS, Google Cloud, or Azure)
   - Choose a region closest to your location
   - Name your cluster (e.g., "JobTrail")
   - Click "Create Cluster"

3. **Configure Database Access**
   - In the left sidebar, go to "Database Access"
   - Click "Add New Database User"
   - Create a username and password (save these securely)
   - Set privileges to "Read and write to any database"
   - Click "Add User"

4. **Configure Network Access**
   - In the left sidebar, go to "Network Access"
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" for development
   - Or add your specific IP address for better security
   - Click "Confirm"

5. **Get Your Connection String**
   - Go back to your cluster and click "Connect"
   - Select "Connect your application"
   - Copy the connection string
   - It will look like: `mongodb+srv://<username>:<password>@<cluster-url>/jobtrail?retryWrites=true&w=majority`
   - Replace `<username>` and `<password>` with your database credentials
   - Replace `<database-name>` with "jobtrail"

6. **Update Environment Variables**
   - Open the `.env` file in the root of the project
   - Replace the placeholders in the `MONGO_URL` with your actual connection string

## Installation

```bash
# Install dependencies for server and client
npm run setup-project

# Run the development server
npm run dev

# Run the demo server (with in-memory database)
npm run demo
```

## Technologies Used

- MongoDB Atlas
- Express.js
- React.js
- Node.js
- Styled Components

## Project Structure

```
JobTrail/
├── client/                  # Frontend React application
│   ├── public/              # Static files
│   │   ├── assets/          # Images and styling
│   │   ├── components/      # Reusable components
│   │   ├── context/         # React context providers
│   │   ├── pages/           # Page components
│   │   └── utils/           # Utility functions
├── controllers/             # Express route controllers
├── middleware/              # Express middleware
├── models/                  # Mongoose models
├── routes/                  # Express routes
└── server.js                # Express server
```

## Screenshots

[Screenshots coming soon]

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern UIs and Dribbble
- Icons provided by React Icons
