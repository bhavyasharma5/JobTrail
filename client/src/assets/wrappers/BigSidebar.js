import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: var(--shadow-2);
    
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: all 0.3s ease-in-out;
      position: relative;
    }
    
    .content {
      position: sticky;
      top: 0;
    }
    
    .show-sidebar {
      margin-left: 0;
    }
    
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem;
      text-transform: capitalize;
      transition: all 0.3s ease-in-out;
      border-radius: var(--border-radius);
      font-weight: 500;
      position: relative;
      background: transparent;
    }
    
    .nav-link:hover {
      background: var(--primary-50);
      color: var(--primary-600);
      padding-left: 1.5rem;
    }
    
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
    }
    
    .active {
      background: var(--primary-50);
      color: var(--primary-700);
      font-weight: 600;
      padding-left: 1.5rem;
      border-left: 4px solid var(--primary-500);
    }
    
    .active .icon {
      color: var(--primary-500);
    }
    
    /* Dark mode specific styles */
    .dark-theme & {
      .nav-link {
        color: var(--dark-mode-text-color);
        
        &:hover {
          background: rgba(79, 70, 229, 0.15);
          color: var(--primary-300);
        }
      }
      
      .active {
        background: rgba(79, 70, 229, 0.15);
        color: var(--primary-300);
      }
      
      .active .icon {
        color: var(--primary-300);
      }
      
      header {
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }
    }
  }
`;

export default Wrapper;
