import styled from 'styled-components';
import { FaRoute } from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardLayout';
import { useLocation } from 'react-router-dom';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .logo-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, var(--primary-300), var(--primary-600), var(--primary-300));
      border-radius: 2px;
      opacity: 0.7;
      transform: scaleX(0.8);
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
  
  .job {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-color);
    margin-right: 2px;
    letter-spacing: -0.5px;
  }
  
  .trail {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--primary-600);
    position: relative;
    letter-spacing: -0.5px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background: var(--primary-100);
      z-index: -1;
      border-radius: 4px;
      transition: height 0.3s ease;
    }
  }
  
  .icon {
    color: var(--primary-500);
    font-size: 1.25rem;
    margin-right: 0.5rem;
    animation: pulse 2s infinite alternate;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1.1);
      opacity: 1;
    }
  }
  
  /* Dark mode specific styles */
  &.dark-mode {
    .job {
      color: var(--dark-mode-text-color);
    }
    
    .trail {
      color: var(--primary-300);
      
      &::after {
        background: rgba(79, 70, 229, 0.2);
      }
    }
    
    .icon {
      color: var(--primary-300);
    }
  }
`;

const Logo = () => {
  const location = useLocation();
  const dashboardContext = useDashboardContext();
  const isDarkTheme = dashboardContext?.isDarkTheme || false;
  const isDashboard = location.pathname.includes('/dashboard');
  
  // Only apply dark mode if we're in the dashboard and dark mode is enabled
  const shouldApplyDarkMode = isDashboard && isDarkTheme;
  
  return (
    <LogoWrapper className={`logo ${shouldApplyDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo-container">
        <FaRoute className="icon" />
        <span className="job">Job</span>
        <span className="trail">Trail</span>
      </div>
    </LogoWrapper>
  );
};

export default Logo;
