# JobTrail - Job Application Tracking System

A full-stack MERN application for tracking job applications and managing the interview process. Built with MongoDB, Express.js, React.js, and Node.js.

🚀 **Live Demo**: [JobTrail App](https://job-trail-otrfexohn-bhavya-sharmas-projects-f6e9dd46.vercel.app/)

## Features

- **Job Application Tracking**: Track all your job applications in one place
- **Interview Scheduling**: Schedule and manage interviews with built-in calendar
- **Application Status Updates**: Real-time status tracking for each application
- **Analytics Dashboard**: Visual insights into your job search progress
- **Dark Mode Support**: Comfortable viewing experience in both light and dark modes
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Screenshots

### Dashboard Overview
![Dashboard](Screenshots/Screenshot%202025-10-08%20at%2011.10.13.png)
Modern dashboard with quick stats and actions for managing your job search journey.

### All Applications View
![All Applications](Screenshots/Screenshot%202025-10-08%20at%2011.10.35.png)
Comprehensive view of all your applications with powerful filtering and search capabilities.

### Add New Application
![Add Application](Screenshots/Screenshot%202025-10-08%20at%2011.10.55.png)
Intuitive form for adding new job applications with detailed information tracking.

## Tech Stack

### Frontend
- React.js with Vite
- Styled Components for styling
- React Query for state management
- React Router v6 for routing
- Dark mode support

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- Express Async Errors

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Getting Started

You can use the [live demo](https://job-trail-otrfexohn-bhavya-sharmas-projects-f6e9dd46.vercel.app/) to try out the application.

### Running Locally

If you want to run the project locally or contribute:

1. Fork and clone the repository:
```bash
git clone https://github.com/bhavyasharma5/JobTrail.git
cd JobTrail
```

2. Set up environment variables:
Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=5100
NODE_ENV=development

# MongoDB
MONGODB_URI=your_mongodb_uri

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
```

3. Install dependencies:
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
```

4. Start development servers:
```bash
# Start backend (from root directory)
npm run server

# Start frontend (from client directory)
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5100

### Deployment

To deploy your own instance:

1. **Frontend (Vercel)**:
   - Fork this repository
   - Create a new project on Vercel
   - Connect your forked repository
   - Set the root directory to `client`
   - Set the build command to `npm run build`
   - Deploy!

2. **Backend (Render)**:
   - Create a new Web Service on Render
   - Connect your forked repository
   - Set the build command: `npm install`
   - Set the start command: `npm start`
   - Add your environment variables
   - Deploy!

3. **Database**:
   - Create a MongoDB Atlas cluster
   - Get your connection string
   - Add it to your environment variables

## Features in Detail

### Job Application Management
- Add new job applications with company details
- Track application status (Applied, HR Screening, Online Assessment, Technical Interview, HR Interview, Offer Accepted, etc.)
- Add notes and important dates for each application
- View application history and timeline

### Application Analytics
- Visual representation of application status distribution
- Success rate tracking
- Interview performance metrics
- Application timeline view

### User Experience
- Modern, intuitive interface
- Responsive design for all devices
- Dark mode support for comfortable viewing
- Real-time status updates
- Advanced filtering and search capabilities

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by React Icons
- UI/UX inspiration from modern design trends