import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-2);
  background: var(--background-secondary-color);
  transition: var(--transition);
  position: relative;
  z-index: 10;
  
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    padding: 0.375rem;
    border-radius: var(--border-radius);
  }
  
  .toggle-btn:hover {
    color: var(--primary-700);
    transform: rotate(90deg);
  }
  
  .logo-text {
    display: none;
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--primary-600);
    letter-spacing: 1px;
  }
  
  .logo {
    display: flex;
    align-items: center;
    width: 120px;
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
      display: none;
    }
    
    .logo-text {
      display: block;
    }
  }
`;

export default Wrapper;
