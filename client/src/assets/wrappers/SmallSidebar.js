import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
    
    &.show-sidebar {
      opacity: 1;
      pointer-events: auto;
    }
  }
  
  .content {
    background: var(--background-secondary-color);
    width: 90%;
    height: 90vh;
    max-width: 400px;
    border-radius: var(--border-radius-lg);
    padding: 2rem 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    transform: scale(0.95) translateY(-30px);
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    
    .show-sidebar & {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }
  
  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    
    .logo {
      width: 140px;
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.05);
      }
    }
    
    .close-btn {
      background: transparent;
      border: none;
      color: var(--red-dark);
      font-size: 1.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      
      &:hover {
        background: var(--red-light);
        transform: rotate(90deg);
      }
    }
  }
  
  .nav-links {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
    overflow-y: auto;
    flex: 1;
    
    /* Custom scrollbar */
    &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-track {
      background: var(--grey-100);
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: var(--primary-300);
      border-radius: 10px;
    }
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-700);
    padding: 1rem;
    text-transform: capitalize;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 4px;
      background: var(--primary-500);
      transform: scaleY(0);
      transition: transform 0.2s ease;
      border-radius: 0 2px 2px 0;
    }
    
    &:hover {
      background: var(--primary-50);
      color: var(--primary-700);
      
      .icon {
        color: var(--primary-600);
      }
      
      &::before {
        transform: scaleY(1);
      }
    }
    
    &.active {
      background: var(--primary-50);
      color: var(--primary-700);
      font-weight: 600;
      
      .icon {
        color: var(--primary-600);
      }
      
      &::before {
        transform: scaleY(1);
      }
    }
    
    .icon {
      font-size: 1.25rem;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 1.25rem;
      color: var(--grey-600);
      transition: all 0.2s ease;
    }
    
    .text {
      font-size: 1rem;
      letter-spacing: 0.5px;
    }
  }
  
  .logout-area {
    margin-top: 1.5rem;
  }
  
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    background: var(--red-light);
    color: var(--red-dark);
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    
    &:hover {
      background: var(--red-dark);
      color: var(--white);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
    
    .icon {
      font-size: 1.25rem;
    }
  }
`;

export default Wrapper;
