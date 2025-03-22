import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr auto;
  
  &:hover {
    box-shadow: var(--shadow-4);
    transform: translateY(-5px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--primary-500);
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
    height: 7px;
  }
  
  header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1.5rem;
  }
  
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-50);
    border-radius: var(--border-radius);
    transition: all 0.3s;
    border: 1px solid var(--primary-100);
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--primary-700);
    
    &:hover {
      background: var(--primary-100);
      transform: scale(1.05);
    }
  }
  
  .info {
    h5 {
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: var(--text-color);
      letter-spacing: 0;
      line-height: 1.3;
      transition: all 0.2s ease;
    }
    
    p {
      margin: 0;
      color: var(--grey-600);
      letter-spacing: 0;
      line-height: 1.5;
      text-transform: capitalize;
    }
  }
  
  .content {
    padding: 1.5rem;
  }
  
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    
    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
    
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .status {
    display: inline-block;
    background: var(--primary-50);
    color: var(--primary-700);
    border-radius: var(--border-radius);
    padding: 0.25rem 0.75rem;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-top: 0.5rem;
    border: 1px solid var(--primary-200);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    width: auto;
    text-transform: capitalize;
    
    &.pending {
      background: var(--yellow-light);
      color: var(--yellow-dark);
      border-color: var(--yellow-light);
    }
    
    &.interview {
      background: var(--primary-50);
      color: var(--primary-700);
      border-color: var(--primary-100);
    }
    
    &.declined {
      background: var(--red-light);
      color: var(--red-dark);
      border-color: var(--red-light);
    }
  }
  
  .actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
  
  .edit-btn,
  .delete-btn {
    background: transparent;
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 36px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1rem;
    border-radius: var(--border-radius);
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  
  .edit-btn {
    background: var(--green-light);
    color: var(--green-dark);
    border: 1px solid var(--green-light);
    
    &:hover {
      background: var(--green-dark);
      color: var(--white);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  .delete-btn {
    background: var(--red-light);
    color: var(--red-dark);
    border: 1px solid var(--red-light);
    
    &:hover {
      background: var(--red-dark);
      color: var(--white);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  .job-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    
    svg {
      color: var(--grey-500);
    }
  }
  
  .company {
    color: var(--green-dark);
    letter-spacing: 0;
    font-style: italic;
    font-weight: 500;
  }
  
  .job-footer {
    background: var(--background-color);
    border-top: 1px solid var(--grey-100);
    padding: 0.75rem 1.5rem;
  }
  
  .date {
    color: var(--grey-500);
    font-size: 0.875rem;
  }
`;

export default Wrapper;
