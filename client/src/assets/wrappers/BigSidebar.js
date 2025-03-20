import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: var(--shadow-1);
    
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
      border-right: 1px solid var(--grey-100);
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
      height: 5rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
      border-bottom: 1px solid var(--grey-100);
    }
    
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-600);
      padding: 0.85rem 1.2rem;
      text-transform: capitalize;
      transition: all 0.2s ease-in-out;
      border-radius: var(--border-radius);
      font-weight: 500;
      position: relative;
      background: transparent;
    }
    
    .nav-link:hover {
      background: var(--primary-50);
      color: var(--primary-700);
      padding-left: 1.5rem;
    }
    
    .icon {
      font-size: 1.2rem;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
    }
    
    .active {
      background: var(--primary-50);
      color: var(--primary-800);
      font-weight: 600;
      padding-left: 1.5rem;
      border-left: 3px solid var(--primary-600);
    }
    
    .active .icon {
      color: var(--primary-600);
    }
  }
`;
export default Wrapper;
