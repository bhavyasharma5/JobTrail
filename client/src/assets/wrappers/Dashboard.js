import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100vh;
    background: var(--background-color);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: -10%;
      right: -5%;
      height: 400px;
      width: 400px;
      border-radius: 50%;
      background: var(--primary-100);
      opacity: 0.4;
      filter: blur(60px);
      z-index: 0;
      pointer-events: none;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5%;
      left: 20%;
      height: 300px;
      width: 300px;
      border-radius: 50%;
      background: var(--primary-200);
      opacity: 0.3;
      filter: blur(80px);
      z-index: 0;
      pointer-events: none;
    }
  }
  
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    
    /* Add a subtle card-like appearance */
    background: var(--background-secondary-color);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-2);
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 2rem;
    
    /* Ensure content doesn't touch edges on smaller screens */
    @media (max-width: 768px) {
      padding: 1.5rem;
      width: 95vw;
    }
  }
  
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    
    .dashboard-page {
      width: 90%;
      margin-left: 2rem;
      margin-right: 2rem;
      padding: 2rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      min-height: calc(100vh - 3rem);
      max-height: calc(100vh - 3rem);
      overflow-y: auto;
      
      /* Custom scrollbar for the dashboard content */
      &::-webkit-scrollbar {
        width: 8px;
      }
      
      &::-webkit-scrollbar-track {
        background: var(--grey-100);
        border-radius: 10px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: var(--primary-300);
        border-radius: 10px;
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background: var(--primary-400);
      }
    }
  }
`;

export default Wrapper;
