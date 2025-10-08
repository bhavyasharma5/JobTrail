import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 2rem 0;

  .form {
    background: var(--background-secondary-color);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .form-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-color);
      margin: 0;
    }

    .title-icon {
      font-size: 1.125rem;
      color: var(--primary-500);
    }
  }

  .form-grid {
    display: grid;
    gap: 1.5rem;
    align-items: flex-end;
    
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    
    @media (min-width: 1200px) {
      grid-template-columns: 2fr 1fr 1fr 1fr auto;
      gap: 1rem;
    }
  }

  .search-group {
    @media (min-width: 1200px) {
      grid-column: 1;
    }
  }

  .input-group {
    position: relative;
    
    .input-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-secondary-color);
      font-size: 1rem;
    }
  }

  .search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.75rem;
    background: var(--background-color);
    border: 2px solid rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    color: var(--text-color);
    font-size: 0.95rem;
    transition: all 0.3s ease;
    height: 42px;

    &:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
    }

    &::placeholder {
      color: var(--text-secondary-color);
      opacity: 0.6;
    }
  }

  .filter-group {
    label {
      display: block;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--text-secondary-color);
      margin-bottom: 0.375rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    select {
      width: 100%;
      padding: 0.75rem 1rem;
      background: var(--background-color);
      border: 2px solid rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      color: var(--text-color);
      font-size: 0.95rem;
      transition: all 0.3s ease;
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 1.25em;
      padding-right: 2.5rem;
      height: 42px;

      &:focus {
        outline: none;
        border-color: var(--primary-500);
        box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
      }
    }
  }

  .reset-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    background: var(--red-light);
    color: var(--red-dark);
    border: none;
    border-radius: 10px;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    white-space: nowrap;
    height: 42px;

    &:hover {
      background: var(--red-dark);
      color: var(--white);
      transform: translateY(-2px);
    }
  }

  /* Dark mode adjustments */
  .dark-theme & {
    .form {
      background: rgba(17, 24, 39, 0.7);
      border-color: rgba(255, 255, 255, 0.05);
    }

    .search-input,
    .filter-group select {
      background: rgba(17, 24, 39, 0.7);
      border-color: rgba(255, 255, 255, 0.05);

      &:focus {
        border-color: var(--primary-400);
      }
    }

    .form-title h2 {
      color: var(--grey-200);
    }

    .filter-group label {
      color: var(--grey-400);
    }

    .reset-btn {
      background: rgba(239, 68, 68, 0.15);
      color: #f87171;
      
      &:hover {
        background: rgba(239, 68, 68, 0.25);
        color: #ef4444;
      }
    }
  }
`;

export default Wrapper;