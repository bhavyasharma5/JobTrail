import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: var(--primary-100);
    color: var(--primary-600);
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary-200);
    transition: var(--transition);
    cursor: pointer;
  }
  
  .logout-btn:hover {
    background: var(--primary-200);
    color: var(--primary-700);
  }
  
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .dropdown {
    position: absolute;
    top: 45px;
    right: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--background-secondary-color);
    transition: var(--transition);
  }
  
  .show-dropdown {
    visibility: visible;
  }
  
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: var(--red-light);
    border: transparent;
    color: var(--red-dark);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
    transition: var(--transition);
  }
  
  .dropdown-btn:hover {
    background: var(--red-dark);
    color: var(--white);
  }
`;

export default Wrapper;
