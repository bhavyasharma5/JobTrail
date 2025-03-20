import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-1);
  background: var(--background-secondary-color);
  border-bottom: 1px solid var(--grey-100);
  transition: var(--transition);
  position: relative;
  z-index: 10;
  
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
  }
  
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.4rem;
    color: var(--primary-600);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    padding: 0.4rem;
    border-radius: var(--border-radius-full);
    width: 40px;
    height: 40px;
  }
  
  .toggle-btn:hover {
    background: var(--primary-50);
    color: var(--primary-700);
    transform: rotate(90deg);
  }
  
  .logo-text {
    display: none;
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--primary-700);
    letter-spacing: 0.5px;
    
    span {
      color: var(--grey-900);
    }
  }
  
  .logo {
    display: flex;
    align-items: center;
    width: 120px;
  }
  
  .btn-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
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
