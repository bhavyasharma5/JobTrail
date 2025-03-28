import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  background: transparent;
  box-shadow: none;
  border: none;
  padding: 0;
  margin: 0;
  
  .form-title {
    color: var(--text-color);
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
    border-bottom: none;
  }
  
  .form {
    width: 100%;
    max-width: 100%;
    background: transparent !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
    transition: none !important;
    border: none !important;
    
    &:hover {
      box-shadow: none !important;
    }
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
      background: var(--background-secondary-color);
      border: 1px solid rgba(0, 0, 0, 0.05);
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
      text-transform: capitalize;
      
      &::-ms-expand {
        display: none;
      }
      
      option {
        background-color: var(--background-secondary-color);
        color: var(--text-color);
        padding: 10px;
        font-size: 1rem;
      }
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
  
  .form-no-box {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
    
    &:hover {
      box-shadow: none !important;
    }
  }
  
  /* Dark mode specific adjustments */
  .dark-theme & {
    .form-input,
    .form-select {
      background-color: var(--background-secondary-color) !important;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-color) !important;
      
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
      
      &:focus {
        border-color: var(--primary-400);
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
      }
    }
    
    .form-select {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23cbd5e1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      
      option {
        background-color: var(--dark-mode-bg-secondary-color) !important;
        color: var(--dark-mode-text-color) !important;
        padding: 10px;
      }
    }
  }
`;

export default Wrapper;
