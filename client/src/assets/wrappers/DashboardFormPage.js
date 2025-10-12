import styled from 'styled-components';

const Wrapper = styled.section`
  .page-header {
    margin-bottom: 3rem;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    
    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.5px;
      
      .dark-theme & {
        background: linear-gradient(135deg, var(--primary-300), var(--primary-500));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    
    .page-subtitle {
      color: var(--text-secondary-color);
      font-size: 1.125rem;
      margin-top: 0.5rem;
      line-height: 1.6;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .profile-card {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    padding: 3rem;
    box-shadow: var(--shadow-2);
    margin: 2rem auto 3rem;
    max-width: 800px;
    
    .dark-theme & {
      background: var(--dark-mode-bg-secondary-color);
      box-shadow: var(--dark-mode-shadow-2);
    }
  }

  .avatar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    padding: 2rem;
    background: var(--background-color);
    border-radius: var(--border-radius);
    
    .avatar-container {
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 1rem;
      background: var(--background-color);
      border: 2px solid var(--primary-500);
      
      .avatar-preview {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .avatar-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: var(--grey-400);
      }
      
      .avatar-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        padding: 0.5rem;
        transform: translateY(100%);
        transition: transform 0.3s ease;
      }
      
      &:hover .avatar-overlay {
        transform: translateY(0);
      }
    }
    
    .avatar-upload-label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: white;
      cursor: pointer;
      font-size: 0.875rem;
      
      svg {
        font-size: 1rem;
      }
    }
    
    .avatar-input {
      display: none;
    }
    
    .avatar-help {
      font-size: 0.875rem;
      color: var(--text-secondary-color);
    }
  }

  .form-grid {
    display: grid;
    gap: 2rem;
    margin-bottom: 3rem;
    
    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .form-row {
      margin-bottom: 0;
    }
  }

  .section-title {
    margin: 4rem 0 2rem;
    border-bottom: none;
    padding-bottom: 0;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 60px;
      height: 4px;
      background: var(--primary-500);
      border-radius: 2px;
    }
    
    h3 {
      font-size: 1.5rem;
      color: var(--text-color);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    .section-description {
      color: var(--text-secondary-color);
      font-size: 0.95rem;
      margin-top: 0.25rem;
    }
    
    .dark-theme & {
      border-bottom-color: var(--dark-mode-grey-100);
    }
  }

  .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border-radius: var(--border-radius);
    background: var(--background-secondary-color);
    border: 1px solid rgba(0, 0, 0, 0.05);
    color: var(--text-color);
    resize: vertical;
    min-height: 100px;
    font-family: inherit;
    
    &:focus {
      border-color: var(--primary-300);
      box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
    }
  }

  .skills-input-container {
    margin-bottom: 0.5rem;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
    padding: 1rem;
    background: var(--background-color);
    border-radius: var(--border-radius);
  }

  .skill-tag {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    background: var(--primary-100);
    color: var(--primary-700);
    border-radius: 9999px;
    font-size: 0.875rem;
    
    .dark-theme & {
      background: var(--primary-900);
      color: var(--primary-100);
    }
    
    .remove-skill {
      background: none;
      border: none;
      color: inherit;
      margin-left: 0.5rem;
      cursor: pointer;
      padding: 0 0.25rem;
      font-size: 1.25rem;
      line-height: 1;
      
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .notifications-grid {
    display: grid;
    gap: 1.5rem;
    margin: 2rem 0;
    background: var(--background-color);
    padding: 2rem;
    border-radius: var(--border-radius);
    max-width: 600px;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .notification-option {
    .toggle-label {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      
      input[type="checkbox"] {
        display: none;
        
        &:checked + .toggle-slider {
          background: var(--primary-500);
          
          &:before {
            transform: translateX(1.25rem);
          }
        }
      }
      
      .toggle-slider {
        position: relative;
        width: 2.5rem;
        height: 1.25rem;
        background: var(--grey-200);
        border-radius: 9999px;
        margin-right: 0.75rem;
        transition: background-color 0.2s;
        
        &:before {
          content: "";
          position: absolute;
          width: 1rem;
          height: 1rem;
          background: white;
          border-radius: 50%;
          top: 0.125rem;
          left: 0.125rem;
          transition: transform 0.2s;
        }
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 2px solid var(--grey-100);
    
    .dark-theme & {
      border-top-color: var(--dark-mode-grey-100);
    }
    
    .btn {
      min-width: 150px;
    }
  }
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
    margin-bottom: 2.5rem;
    
    .form-label {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1rem;
      margin-bottom: 0.75rem;
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
