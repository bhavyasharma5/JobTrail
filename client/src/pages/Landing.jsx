import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main-alternative.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';
import { FaSearch, FaChartLine, FaRegClock, FaCheckCircle } from 'react-icons/fa';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      
      {/* Hero Section */}
      <div className='container hero-container'>
        <div className='hero-content'>
          <span className='tagline'>Your Personal Job Search Assistant</span>
          <h1>Track Your Career Journey with JobTrail</h1>
          <p>
            Streamline your job search process with JobTrail. Organize applications, 
            schedule interviews, and analyze your progress with our powerful 
            dashboard. Take control of your career path and never miss an opportunity.
          </p>
          <div>
            <Link to='/register' className='btn btn-hero register-link'>
              Get Started
            </Link>
            <Link to='/login' className='btn btn-hipster'>
              Demo Account
            </Link>
          </div>
        </div>
        <div className='image-container'>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className='highlights-container'>
        <div className='section-title'>
          <h2>Why Choose JobTrail?</h2>
          <div className='underline'></div>
        </div>
        
        <div className='benefits-grid'>
          <div className='benefit-card'>
            <div className='benefit-icon'>
              <FaSearch />
            </div>
            <h4>Centralized Tracking</h4>
            <p>Keep all your applications in one place with powerful organization tools</p>
          </div>
          
          <div className='benefit-card'>
            <div className='benefit-icon'>
              <FaChartLine />
            </div>
            <h4>Visual Analytics</h4>
            <p>Gain insights into your job search with customizable reports and metrics</p>
          </div>
          
          <div className='benefit-card'>
            <div className='benefit-icon'>
              <FaRegClock />
            </div>
            <h4>Never Miss Deadlines</h4>
            <p>Get timely reminders for follow-ups, interviews, and important dates</p>
          </div>
          
          <div className='benefit-card'>
            <div className='benefit-icon'>
              <FaCheckCircle />
            </div>
            <h4>Progress Tracking</h4>
            <p>Monitor your success rates and optimize your application strategy</p>
          </div>
        </div>
        
        <div className='cta-container'>
          <p className='cta-text'>Ready to take control of your job search?</p>
          <Link to='/register' className='btn btn-hero'>
            Start Now — It&apos;s Free
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
