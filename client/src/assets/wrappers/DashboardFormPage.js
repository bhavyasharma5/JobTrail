import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  background: transparent;
  padding: 0;
  
  .form-title {
    color: var(--text-color);
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--grey-100);
  }
  
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
    background: transparent;
  }
  
  .form-row {
    margin-bottom: 1.5rem;
    
    .form-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      letter-spacing: 0.5px;
      color: var(--text-color);
      font-weight: 500;
      
      .icon {
        color: var(--primary-500);
        font-size: 1rem;
      }
    }
    
    .form-input,
    .form-select {
      width: 100%;
      padding: 0.75rem;
      border-radius: var(--border-radius);
      background: var(--white);
      border: 1px solid var(--grey-200);
      color: var(--text-color);
      outline: none;
      font-size: 1rem;
      transition: var(--transition);
      
      &:focus {
        border-color: var(--primary-300);
        box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
      }
    }
    
    .form-select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.5rem center;
      background-size: 1em;
    }
  }
  
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  
  .form-btn {
    align-self: end;
    margin-top: 1.5rem;
    grid-column: 1 / span 2;
    
    .btn {
      width: 100%;
      height: 48px;
      background: var(--primary-500);
      color: var(--white);
      border: none;
      border-radius: var(--border-radius);
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
      text-transform: capitalize;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      
      &:hover {
        background: var(--primary-700);
        transform: translateY(-2px);
        box-shadow: var(--shadow-3);
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }
    }
  }
  
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5rem;
    }
  }
  
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 2rem;
    }
  }
  
  @media (min-width: 1200px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    
    .form-btn {
      grid-column: 3;
    }
  }
`;

export default Wrapper;
