import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: transparent;
    color: var(--text-color);
    border-radius: 8px;
    padding: 0.5rem 1rem;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    font-weight: 500;
    
    svg {
      font-size: 1.25rem;
    }
  }
  
  .logout-btn:hover {
    background: rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.2);
    color: var(--primary-600);
  }
  
  .img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary-400);
  }
  
  .dropdown {
    position: absolute;
    top: 50px;
    right: 0;
    width: 140px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    border-radius: 8px;
    background: var(--background-secondary-color);
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
  }
  
  .show-dropdown {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
  
  .dropdown-btn {
    border-radius: 6px;
    padding: 0.65rem 1rem;
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    border: transparent;
    color: white;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.2);
    
    &:hover {
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
      transform: translateY(-2px);
    }
  }
`;

export default Wrapper;
