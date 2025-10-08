import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
    backdrop-filter: blur(4px);
  }
  .show-sidebar {
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-secondary-color);
    width: 90%;
    max-width: 360px;
    height: 95vh;
    border-radius: 24px;
    padding: 2rem 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(229, 231, 235, 0.1);
  }
  .close-btn {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: rgba(239, 68, 68, 0.1);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--red-dark);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 1.25rem;
    
    &:hover {
      background: rgba(239, 68, 68, 0.15);
      color: var(--red-dark);
      transform: rotate(90deg);
    }
  }
  
  header {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    backdrop-filter: blur(5px);
  }
  
  .nav-links {
    width: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 1.25rem;
    text-transform: capitalize;
    transition: all 0.2s ease-in-out;
    border-radius: 12px;
    font-weight: 500;
    font-size: 0.95rem;
    background: transparent;
    
    &:hover {
      background: rgba(99, 102, 241, 0.1);
      color: var(--primary-500);
      transform: translateX(4px);
    }
    
    &.active {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(99, 102, 241, 0.1));
      color: var(--primary-500);
      font-weight: 600;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 20px;
        background: var(--primary-500);
        border-radius: 0 4px 4px 0;
      }
    }
  }
  
  .icon {
    font-size: 1.25rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    color: inherit;
    opacity: 0.8;
  }
  
  /* Dark mode specific styles */
  .dark-theme & {
    .sidebar-container {
      background: rgba(0, 0, 0, 0.8);
    }
    
    .content {
      background: rgba(17, 24, 39, 0.7);
    }
    
    header {
      background: rgba(255, 255, 255, 0.03);
    }
    
    .nav-link {
      color: #94a3b8;
      
      &:hover {
        background: rgba(99, 102, 241, 0.15);
        color: var(--primary-300);
      }
      
      &.active {
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(99, 102, 241, 0.15));
        color: var(--primary-300);
        
        &::before {
          background: var(--primary-300);
        }
      }
    }
    
    .close-btn {
      background: rgba(239, 68, 68, 0.15);
      color: #f87171;
      
      &:hover {
        background: rgba(239, 68, 68, 0.25);
        color: #ef4444;
      }
    }
  }
`;

export default Wrapper;
