import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  
  &:hover {
    box-shadow: var(--shadow-3);
    transform: translateY(-3px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: var(--primary-500);
    opacity: 0.9;
  }
  
  header {
    padding: 1.25rem 1.75rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    position: relative;
  }
  
  .main-icon {
    width: 65px;
    height: 65px;
    display: grid;
    place-items: center;
    background: var(--primary-50);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--primary-700);
    margin-right: 2rem;
    transition: var(--transition);
    border: 1px solid var(--primary-200);
  }
  
  .info {
    h5 {
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: var(--text-color);
      font-size: 1.1rem;
    }
    
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
      font-size: 0.9rem;
    }
  }
  
  .content {
    padding: 1.25rem 1.75rem;
    background: var(--background-secondary-color);
  }
  
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.2rem;
    column-gap: 1.5rem;
    align-items: center;
    
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  
  .status {
    border-radius: var(--border-radius);
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: auto;
    display: inline-block;
    padding: 0.25rem 0.75rem;
    font-size: 0.85rem;
    
    &.pending {
      background: var(--yellow-light);
      color: var(--yellow-dark);
    }
    
    &.interview {
      background: var(--primary-100);
      color: var(--primary-700);
    }
    
    &.declined {
      background: var(--red-light);
      color: var(--red-dark);
    }
  }
  
  .actions {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  
  .edit-btn,
  .delete-btn {
    height: 36px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    cursor: pointer;
  }
  
  .edit-btn {
    background: var(--primary-50);
    color: var(--primary-700);
    border: 1px solid var(--primary-100);
    
    &:hover {
      background: var(--primary-100);
      color: var(--primary-800);
      transform: translateY(-2px);
    }
  }
  
  .delete-btn {
    background: var(--red-light);
    color: var(--red-dark);
    border: 1px solid transparent;
    
    &:hover {
      background: var(--red-dark);
      color: var(--white);
      transform: translateY(-2px);
    }
  }

  /* Dark mode specific adjustments */
  .dark-theme & {
    border: 1px solid rgba(255, 255, 255, 0.05);
    
    header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .main-icon {
      background: rgba(79, 70, 229, 0.15);
      color: var(--primary-300);
      border: 1px solid rgba(79, 70, 229, 0.2);
    }
  }
`;

export default Wrapper;
