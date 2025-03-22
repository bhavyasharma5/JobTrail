import styled from 'styled-components';
import { FaRoute } from 'react-icons/fa';

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
    color: var(--grey-900);
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
`;

const Logo = () => {
  return (
    <LogoWrapper className="logo">
      <div className="logo-container">
        <FaRoute className="icon" />
        <span className="job">Job</span>
        <span className="trail">Trail</span>
      </div>
    </LogoWrapper>
  );
};

export default Logo;
