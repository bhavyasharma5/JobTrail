# JobTrail - Job Application Tracking System

A full-stack MERN application for tracking job applications and managing the interview process. Built with MongoDB, Express.js, React.js, and Node.js.

## Features

- **Job Application Tracking**: Track all your job applications in one place
- **Interview Scheduling**: Schedule and manage interviews with built-in calendar
- **Application Status Updates**: Real-time status tracking for each application
- **Analytics Dashboard**: Visual insights into your job search progress
- **Dark Mode Support**: Comfortable viewing experience in both light and dark modes
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Screenshots

### Dashboard Overview
![Dashboard Overview](Screenshots/Screenshot%202025-04-05%20at%2010.39.08.png)

### Job Application Form
![Job Application Form](Screenshots/Screenshot%202025-04-05%20at%2010.39.46.png)

### Job Details View
![Job Details](Screenshots/Screenshot%202025-04-05%20at%2010.40.22.png)

### Interview Scheduling
![Interview Scheduling](Screenshots/Screenshot%202025-04-05%20at%2010.40.38.png)

### Analytics Dashboard
![Analytics Dashboard](Screenshots/Screenshot%202025-04-05%20at%2010.41.20.png)

## Tech Stack

- **Frontend**: React.js, Styled Components
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **UI Components**: Custom components with dark mode support

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
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:
Create a `.env` file in the server directory with:
```
PORT=5100
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:
```bash
# Start server (from server directory)
npm run dev

# Start client (from client directory)
npm run dev
```

The application will be available at:
- Client: http://localhost:5173
- Server: http://localhost:5100

## Features in Detail

### Job Application Management
- Add new job applications with company details
- Track application status (Applied, Interviewing, Offered, Rejected, etc.)
- Add notes and important dates for each application
- View application history and timeline

### Interview Scheduling
- Schedule interviews with built-in calendar
- Set reminders for upcoming interviews
- Track interview feedback and outcomes
- Manage multiple interview rounds

### Analytics Dashboard
- Visual representation of application status distribution
- Success rate tracking
- Interview performance metrics
- Application timeline view

### User Experience
- Responsive design for all devices
- Dark mode support for comfortable viewing
- Intuitive navigation and user interface
- Real-time status updates

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern UIs and Dribbble
- Icons provided by React Icons
