import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 280px;
      margin-left: -280px;
      transition: all 0.3s ease-in-out;
      position: relative;
      backdrop-filter: blur(10px);
      border-right: 1px solid rgba(229, 231, 235, 0.2);
    }
    
    .content {
      position: sticky;
      top: 0;
      padding: 1rem;
    }
    
    .show-sidebar {
      margin-left: 0;
    }
    
    header {
      height: 5rem;
      display: flex;
      align-items: center;
      padding: 1.5rem;
      margin-bottom: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      backdrop-filter: blur(5px);
    }
    
    .nav-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0.5rem;
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
      position: relative;
      background: transparent;
      font-size: 0.95rem;
      
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
    }
  }
`;

export default Wrapper;
