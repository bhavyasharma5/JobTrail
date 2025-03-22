import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  
  @media (min-width: 992px) {
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    background: var(--background-secondary-color);
    min-height: 100vh;
    height: 100%;
    width: 250px;
    margin-left: -250px;
    transition: all 0.4s ease-in-out;
    z-index: 99;
    
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      position: sticky;
      top: 0;
      padding: 1.5rem 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    .content {
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .header {
      padding: 0 1.5rem;
      margin-bottom: 1.5rem;
      
      .logo {
        width: 150px;
        display: block;
        margin: 0 auto 0.75rem;
        transition: all 0.3s ease;
        
        &:hover {
          transform: scale(1.05);
        }
      }
      
      .close-btn {
        display: none;
      }
    }
    
    .nav-links {
      padding: 0 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .nav-link {
      display: flex;
      align-items: center;
      padding: 0.85rem 1rem;
      text-decoration: none;
      text-transform: capitalize;
      color: var(--grey-700);
      border-radius: 0.5rem;
      margin: 0 0.5rem;
      transition: all 0.2s ease-in-out;
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
        letter-spacing: 0.5px;
        transition: all 0.2s ease;
      }
    }
    
    .logout-area {
      padding: 0 1.5rem;
      margin-top: auto;
    }
    
    .logout-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: var(--red-light);
      color: var(--red-dark);
      border: none;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      margin: 1rem auto;
      width: 90%;
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
    
    &.show-sidebar {
      margin-left: 0;
      
      .sidebar-container {
        box-shadow: 1px 0 5px rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

export default Wrapper;
