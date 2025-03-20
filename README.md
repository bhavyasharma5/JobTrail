# JobTrail

JobTrail is a modern job application tracking system that helps job seekers organize their job search process efficiently. With a sleek UI and powerful features, JobTrail makes it easy to manage applications, track progress, and stay on top of interview schedules.

## Features

- **Centralized Tracking**: Keep all your applications in one place with powerful organization tools
- **Visual Analytics**: Gain insights into your job search with customizable reports and metrics
- **Deadline Reminders**: Get timely reminders for follow-ups, interviews, and important dates
- **Progress Tracking**: Monitor your success rates and optimize your application strategy

## Tech Stack

- **Frontend**: React, Styled Components, React Icons, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with in-memory option for demo)
- **Development**: Vite, Nodemon, Concurrently

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/JobTrail.git
cd JobTrail
```

2. Install dependencies
```bash
npm install
cd client && npm install
cd ..
```

3. Set up environment variables
Create a `.env` file in the root directory with the following variables:
```
PORT=5100
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_LIFETIME=1d
```

### Running the Application

#### Development Mode
```bash
npm run dev
```

#### Demo Mode (with in-memory MongoDB)
```bash
npm run demo
```

## Project Structure

```
JobTrail/
├── client/                  # Frontend React application
│   ├── public/              # Static files
│   ├── src/                 # Source files
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
