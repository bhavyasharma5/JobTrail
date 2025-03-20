import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  overflow: hidden;
  border: 1px solid var(--grey-100);
  position: relative;
  
  &:hover {
    box-shadow: var(--shadow-3);
    transform: translateY(-2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: var(--primary-500);
    opacity: 0.8;
  }
  
  header {
    padding: 1.25rem 1.75rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    position: relative;
  }
  
  .main-icon {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    background: var(--primary-100);
    border-radius: var(--border-radius);
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--primary-700);
    margin-right: 2rem;
    transition: var(--transition);
  }
  
  .info {
    h5 {
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: var(--grey-900);
      font-size: 1.1rem;
    }
    
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--grey-500);
      font-size: 0.9rem;
    }
  }
  
  .content {
    padding: 1.25rem 1.75rem;
    background: var(--white);
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
    border-radius: var(--border-radius-full);
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 110px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    border-radius: var(--border-radius-full);
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
    
    &:hover {
      background: var(--red-dark);
      color: var(--white);
      transform: translateY(-2px);
    }
  }
`;

export default Wrapper;
