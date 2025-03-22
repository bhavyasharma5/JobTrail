import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  
  .info-side {
    background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
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
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5%;
      left: -5%;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
    }
  }
  
  .info-content {
    max-width: 450px;
    z-index: 1;
    text-align: center;
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }
    
    p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      line-height: 1.7;
      opacity: 0.9;
    }
    
    .features {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: left;
      margin-top: 2rem;
      
      .feature-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        
        svg {
          font-size: 1.5rem;
          color: var(--primary-200);
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
  }
  
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }
  
  .form {
    width: 100%;
    max-width: 450px;
    padding: 2.5rem;
    background: var(--background-secondary-color);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    border-top: 5px solid var(--primary-500);
    
    &:hover {
      box-shadow: var(--shadow-3);
    }
    
    @media (max-width: 992px) {
      max-width: 500px;
    }
  }
  
  h4 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: var(--grey-900);
  }
  
  p {
    margin-top: 1.5rem;
    text-align: center;
    line-height: 1.5;
  }
  
  .btn {
    margin-top: 1.5rem;
  }
  
  .member-btn {
    color: var(--primary-600);
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
    margin-left: 0.5rem;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-700);
      text-decoration: underline;
    }
  }
  
  .form-title {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  
  .form-subtitle {
    text-align: center;
    color: var(--grey-500);
    margin-bottom: 2rem;
    font-size: 0.925rem;
  }
  
  .input-container {
    position: relative;
    margin-bottom: 1.25rem;
  }
  
  .password-toggle {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--grey-500);
    cursor: pointer;
    z-index: 10;
    
    &:hover {
      color: var(--grey-700);
    }
  }
  
  .divider {
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
    
    &::before,
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background-color: var(--grey-200);
    }
    
    span {
      padding: 0 1rem;
      color: var(--grey-500);
      font-size: 0.9rem;
    }
  }
`;

export default Wrapper;
