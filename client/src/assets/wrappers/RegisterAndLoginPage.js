import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  
  .info-side {
    background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 2rem;
    color: var(--white);
    position: relative;
    overflow: hidden;
    
    @media (max-width: 992px) {
      display: none;
    }
    
    &::before {
      content: '';
      position: absolute;
      top: -10%;
      right: -10%;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      filter: blur(50px);
      transform: translateZ(0);
      animation: float 15s ease-in-out infinite alternate;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5%;
      left: -5%;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      filter: blur(40px);
      transform: translateZ(0);
      animation: float 18s ease-in-out infinite alternate-reverse;
    }
    
    .decoration-circle {
      position: absolute;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 50%;
      z-index: 0;
      
      &:nth-child(1) {
        width: 120px;
        height: 120px;
        top: 15%;
        left: 10%;
        animation: pulse 8s infinite alternate;
      }
      
      &:nth-child(2) {
        width: 80px;
        height: 80px;
        bottom: 20%;
        right: 15%;
        animation: pulse 6s infinite alternate-reverse;
      }
    }
  }
  
  .info-content {
    max-width: 500px;
    z-index: 1;
    position: relative;
    
    h2 {
      font-size: 3.25rem;
      margin-bottom: 1.75rem;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.5px;
      position: relative;
      display: inline-block;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      background: linear-gradient(to right, #ffffff, #f0e7ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: glow 2s ease-in-out infinite alternate;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 0;
        width: 100px;
        height: 5px;
        background: linear-gradient(to right, var(--primary-300), var(--primary-100));
        border-radius: 4px;
      }
    }
    
    p {
      font-size: 1.125rem;
      margin-bottom: 2.5rem;
      line-height: 1.7;
      opacity: 0.95;
      font-weight: 300;
    }
    
    .features {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      text-align: left;
      margin-top: 2.5rem;
      
      .feature-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        transition: transform 0.3s ease;
        padding: 0.5rem;
        border-radius: 8px;
        
        &:hover {
          transform: translateX(5px);
          background: rgba(255, 255, 255, 0.05);
        }
        
        svg {
          font-size: 1.4rem;
          color: var(--primary-200);
          margin-top: 2px;
          flex-shrink: 0;
        }
        
        span {
          font-size: 1.05rem;
          line-height: 1.5;
        }
      }
    }
  }
  
  .form-side {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: var(--background-secondary-color);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(to right, var(--primary-300), var(--primary-600));
      opacity: 0.7;
    }
  }
  
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  .form {
    width: 100%;
    max-width: 450px;
    padding: 2.5rem;
    background: var(--background-secondary-color);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &:hover {
      box-shadow: var(--shadow-3);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(to right, var(--primary-400), var(--primary-600));
      border-radius: 5px 5px 0 0;
    }
    
    @media (max-width: 992px) {
      max-width: 500px;
    }
    
    .form-row {
      margin-bottom: 1.5rem;
      transition: all 0.2s ease;
      
      &:focus-within label {
        color: var(--primary-600);
        transform: translateY(-2px);
      }
      
      input {
        border: 1px solid var(--grey-200);
        border-radius: 8px;
        padding: 12px 16px;
        transition: all 0.2s ease;
        font-size: 1rem;
        
        &:focus {
          border-color: var(--primary-400);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }
      }
      
      label {
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
        color: var(--grey-700);
        display: block;
        transition: all 0.2s ease;
      }
    }
  }
  
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
    font-size: 1.75rem;
    color: var(--grey-900);
    font-weight: 700;
    display: block;
    width: 100%;
  }
  
  p {
    margin-top: 1.5rem;
    text-align: center;
    line-height: 1.5;
  }
  
  .btn {
    margin-top: 1.5rem;
    border-radius: 8px;
    padding: 12px 24px;
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    
    &:hover {
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 120%;
      height: 0;
      padding-bottom: 120%;
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
      z-index: -1;
      background: rgba(255, 255, 255, 0.1);
      transition: transform 0.5s, opacity 0.3s;
    }
    
    &:hover::after {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
  
  .member-btn {
    color: var(--primary-600);
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
    margin-left: 0.5rem;
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-600);
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: var(--primary-700);
      
      &::after {
        width: 100%;
      }
    }
  }
  
  .form-title {
    text-align: center;
    margin-bottom: 1.25rem;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-700);
    position: relative;
    display: block;
    width: 100%;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: linear-gradient(to right, var(--primary-300), var(--primary-600));
      border-radius: 2px;
    }
  }
  
  .form-subtitle {
    text-align: center;
    color: var(--grey-500);
    margin-bottom: 2rem;
    font-size: 0.95rem;
  }
  
  .input-container {
    position: relative;
    margin-bottom: 1.5rem;
  }
  
  .password-toggle {
    position: absolute;
    right: 1rem;
    top: 60%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--grey-500);
    cursor: pointer;
    z-index: 10;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    
    &:hover {
      color: var(--grey-700);
      background: var(--grey-100);
      border-radius: 4px;
    }
  }
  
  .divider {
    display: flex;
    align-items: center;
    margin: 1.75rem 0;
    
    &::before,
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, transparent, var(--grey-200), transparent);
    }
    
    span {
      padding: 0 1rem;
      color: var(--grey-500);
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(-30px) rotate(10deg);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
  
  @keyframes glow {
    from {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.1), 
                   0 0 20px rgba(255, 255, 255, 0.1);
    }
    to {
      text-shadow: 0 0 15px rgba(255, 255, 255, 0.2), 
                   0 0 30px rgba(255, 255, 255, 0.2);
    }
  }
`;

export default Wrapper;
