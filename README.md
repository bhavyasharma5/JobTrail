# JobTrail

A comprehensive job tracking application designed to help job seekers organize their job search process.

## Features

- Track job applications in one central location
- Visual analytics to gain insights on your job search
- Organize applications by status (pending, interview, declined, etc.)
- Set reminders for important deadlines
- Modern and intuitive user interface

## Database Options

JobTrail supports two database options:

### 1. In-Memory Database (Demo/Development)

For quick testing and development, JobTrail can run with an in-memory MongoDB database:

```bash
npm run demo
```

**Note:** All data will be lost when the server restarts. This option is only for development/testing.

### 2. MongoDB Atlas (Production/Persistent Storage)

For permanent data storage, JobTrail uses MongoDB Atlas:

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
   - Choose "Authentication Method: Password"
   - Create a username (e.g., "jobtrail_app")
   - Create a simple password (avoid special characters for testing)
   - Select "Built-in Role" as "Atlas admin" (for testing)
   - Click "Add User"

4. **Configure Network Access**
   - In the left sidebar, go to "Network Access"
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" for development
   - Click "Confirm"

5. **Get Your Connection String**
   - Go back to your cluster and click "Connect"
   - Select "Connect your application"
   - Copy the connection string
   - It will look like: `mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority`
   - Replace `<username>` and `<password>` with your database user credentials
   - Replace `<database-name>` with "jobtrail"

6. **Update Environment Variables**
   - Create or modify the `.env` file in the root of the project:
   ```
   NODE_ENV=development
   PORT=5100
   MONGO_URL=mongodb+srv://your_username:your_password@your_cluster_url/jobtrail?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=1d
   ```

## Running the Application

```bash
# Install dependencies for server and client
npm run setup-project

# Run with permanent MongoDB Atlas database
npm run dev

# Run with temporary in-memory database (for testing)
npm run demo
```

## Troubleshooting MongoDB Connection

If you encounter connection issues with MongoDB Atlas:

1. **Verify credentials**: Make sure username and password are correct
2. **Network access**: Ensure your IP is in the allowlist
3. **Simple password**: Use a password without special characters for testing
4. **Create new user**: Try creating a new database user if issues persist

For more detailed troubleshooting, see `mongodb-atlas-troubleshooting.md`

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
