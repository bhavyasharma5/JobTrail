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
![Dashboard](Screenshots/dashboard.png)
Modern dashboard with quick stats and actions for managing your job search journey.

### All Applications View
![All Applications](Screenshots/all-jobs.png)
Comprehensive view of all your applications with powerful filtering and search capabilities.

### Add New Application
![Add Application](Screenshots/add-job.png)
Intuitive form for adding new job applications with detailed information tracking.

## Tech Stack

- **Frontend**: React.js, Styled Components
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **UI Components**: Custom components with dark mode support
- **Deployment**: Vercel (Frontend), Render (Backend)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jobtrail.git
cd jobtrail
```

2. Install dependencies:
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with:
```
PORT=5100
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:
```bash
# Start both frontend and backend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5100

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