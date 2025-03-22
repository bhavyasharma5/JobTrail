import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-secondary-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 100;
  
  .nav-center {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
    width: 120px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    
    &:hover {
      color: var(--primary-700);
      transform: scale(1.1);
    }
  }
  
  .btn-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .user-btn {
    position: relative;
    background: var(--primary-100);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-600);
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid transparent;
    
    &:hover {
      background: var(--primary-200);
      border-color: var(--primary-300);
    }
    
    .avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .logout-btn {
    background: var(--red-light);
    color: var(--red-dark);
    padding: 0.5rem 1rem;
    border-radius: var(--borderRadius);
    border: transparent;
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    
    &:hover {
      background: var(--red-dark);
      color: var(--white);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
  
  .dropdown {
    position: absolute;
    top: 45px;
    right: 0;
    width: 200px;
    background: var(--white);
    box-shadow: var(--shadow-4);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    border-radius: var(--borderRadius);
    transform: translateY(-20px);
    transition: all 0.3s ease-in-out;
    z-index: 999;
    
    &::before {
      content: '';
      position: absolute;
      top: -10px;
      right: 16px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid var(--white);
    }
    
    &.show-dropdown {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    
    .nav-center {
      width: 90%;
    }
    
    .logo {
      width: 150px;
    }
    
    .toggle-btn {
      display: none;
    }
  }
`;

export default Wrapper;
