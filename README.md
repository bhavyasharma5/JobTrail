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

For permanent data storage, JobTrail uses MongoDB Atlas, which requires proper configuration in the `.env` file:

```
NODE_ENV=development
PORT=5100
MONGO_URL=your_mongodb_connection_string
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
