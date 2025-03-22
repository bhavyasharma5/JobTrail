import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
    background: var(--primary-100);
    border-radius: var(--borderRadius);
    border: transparent;
    padding: 0.5rem 1rem;
    box-shadow: var(--shadow-2);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      background: var(--primary-200);
      box-shadow: var(--shadow-3);
      transform: translateY(-2px);
    }
  }
  
  .img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .dropdown {
    position: absolute;
    top: 45px;
    right: 0;
    width: 100%;
    box-shadow: var(--shadow-4);
    background: var(--background-secondary-color);
    text-align: center;
    border-radius: var(--borderRadius);
    visibility: hidden;
    opacity: 0;
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
      border-bottom: 10px solid var(--background-secondary-color);
    }
    
    &.show-dropdown {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .dropdown-btn {
    color: var(--red-dark);
    background: var(--red-light);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 0.5rem 0;
    transition: all 0.3s ease;
    
    &:hover {
      background: var(--red-dark);
      color: var(--white);
    }
  }
`;

export default Wrapper;
