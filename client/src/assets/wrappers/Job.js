import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    box-shadow: var(--shadow-4);
    transform: translateY(-5px);
    
    .action-btn {
      opacity: 1;
      transform: translateX(0);
    }
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

  .main-content {
    padding: 1.5rem;
  }
  
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-50);
    border-radius: var(--border-radius);
    margin-right: 2rem;
    transition: all 0.3s;
    border: 1px solid var(--primary-100);
    
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
    }
  }
  
  .job-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 1rem;
    
    @media (min-width: 576px) {
      grid-template-columns: auto 1fr;
    }
  }
  
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    
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
  
  .job-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    border-top: 1px solid var(--grey-100);
  }
  
  .actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .action-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--text-color);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.5rem;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    transition: all 0.3s ease;
    opacity: 0.85;
    transform: translateX(5px);
    
    &.edit-btn {
      color: var(--green-dark);
      background: var(--green-light);
      
      &:hover {
        background: var(--green-dark);
        color: var(--white);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
    }
    
    &.delete-btn {
      color: var(--red-dark);
      background: var(--red-light);
      
      &:hover {
        background: var(--red-dark);
        color: var(--white);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
    }
  }
  
  .job-icon {
    font-size: 1rem;
    margin-right: 0.25rem;
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
  
  .date {
    color: var(--grey-500);
    font-size: 0.875rem;
  }
`;

export default Wrapper;
