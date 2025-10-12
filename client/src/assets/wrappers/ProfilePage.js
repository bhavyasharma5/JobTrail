import styled from 'styled-components';

const Wrapper = styled.section`
  .profile-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
  }

  .welcome-header {
    margin-bottom: 2rem;
    
    h1 {
      font-size: 1.75rem;
      font-weight: 500;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }
    
    .date {
      color: var(--text-secondary-color);
      font-size: 0.875rem;
    }
  }

  .profile-header {
    margin-bottom: 3rem;
  }

  .avatar-section {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem;
    background: var(--background-color);
    border-radius: var(--border-radius);
    position: relative;
  }

  .avatar-container {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background: var(--primary-100);
    
    .avatar-image {
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
      font-size: 2rem;
      font-weight: 500;
      color: var(--primary-500);
      text-transform: uppercase;
    }
    
    .avatar-upload {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      color: white;
      cursor: pointer;
      transform: translateY(100%);
      transition: transform 0.2s;
    }
    
    &:hover .avatar-upload {
      transform: translateY(0);
    }
  }

  .hidden {
    display: none;
  }

  .user-info {
    flex: 1;
    
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 0.25rem;
    }
    
    p {
      color: var(--text-secondary-color);
      font-size: 0.875rem;
    }
  }

  .edit-button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    padding: 0.5rem 1rem;
    background: var(--primary-500);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
    
    &:hover {
      background: var(--primary-700);
    }
  }

  .form-grid {
    display: grid;
    gap: 3rem;
    margin-bottom: 2rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .form-column {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--text-color);
      margin-bottom: 1.5rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid var(--grey-100);
    }
  }

  .social-links-section {
    .social-link {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;
      position: relative;

      .social-icon {
        font-size: 1.5rem;
        color: var(--primary-500);
        margin-top: 2rem;
      }

      .visit-link {
        position: absolute;
        right: 1rem;
        top: 2.75rem;
        color: var(--primary-500);
        font-size: 0.875rem;
        opacity: 0.8;
        transition: var(--transition);

        &:hover {
          opacity: 1;
          transform: translateY(-1px);
        }
      }
    }
  }

  .resume-section {
    .resume-upload {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem;
      background: var(--background-color);
      border-radius: var(--border-radius);
      border: 1px dashed var(--grey-200);

      .resume-icon {
        font-size: 2rem;
        color: var(--primary-500);
      }

      .resume-content {
        flex: 1;

        .resume-name {
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .resume-date {
          font-size: 0.75rem;
          color: var(--text-secondary-color);
        }

        .no-resume {
          color: var(--text-secondary-color);
          font-style: italic;
        }
      }

      .upload-button {
        padding: 0.75rem 1.25rem;
        background: var(--primary-500);
        color: white;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: var(--transition);

        &:hover {
          background: var(--primary-700);
        }
      }

      .view-resume {
        padding: 0.75rem 1.25rem;
        background: var(--primary-100);
        color: var(--primary-500);
        border-radius: var(--border-radius);
        text-decoration: none;
        transition: var(--transition);

        &:hover {
          background: var(--primary-200);
        }
      }
    }
  }

  .form-row {
    label {
      display: block;
      font-size: 0.875rem;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }
    
    select, input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--grey-200);
      border-radius: var(--border-radius);
      background: var(--background-color);
      color: var(--text-color);
      font-size: 0.875rem;
      
      &:disabled {
        background: var(--grey-50);
        cursor: not-allowed;
      }
      
      &:focus {
        border-color: var(--primary-500);
        box-shadow: 0 0 0 2px var(--primary-100);
      }
    }
  }

  .email-section {
    label {
      display: block;
      font-size: 0.875rem;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }
  }

  .email-display {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--background-color);
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
    
    .email-icon {
      font-size: 1.25rem;
    }
    
    .email-info {
      flex: 1;
      
      p {
        margin-bottom: 0.25rem;
      }
      
      .email-date {
        font-size: 0.75rem;
        color: var(--text-secondary-color);
      }
    }
  }

  .add-email {
    width: 100%;
    padding: 0.75rem;
    background: var(--primary-100);
    color: var(--primary-500);
    border: 1px dashed var(--primary-500);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    
    &:hover {
      background: var(--primary-200);
    }
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--grey-100);
    
    button {
      padding: 0.75rem 1.5rem;
      border-radius: var(--border-radius);
      font-size: 0.875rem;
      cursor: pointer;
      transition: var(--transition);
    }
    
    .save-button {
      background: var(--primary-500);
      color: white;
      border: none;
      
      &:hover {
        background: var(--primary-700);
      }
    }
    
    .cancel-button {
      background: transparent;
      border: 1px solid var(--grey-300);
      color: var(--text-color);
      
      &:hover {
        background: var(--grey-50);
      }
    }
  }

  /* Dark mode adjustments */
  .dark-theme & {
    .social-links-section {
      .social-link {
        .social-icon {
          color: var(--primary-400);
        }
        
        .visit-link {
          color: var(--primary-400);
        }
      }
    }

    .resume-section {
      .resume-upload {
        border-color: var(--dark-mode-grey-200);
        background: var(--dark-mode-bg-color);

        .resume-icon {
          color: var(--primary-400);
        }

        .view-resume {
          background: rgba(var(--primary-rgb), 0.1);
          color: var(--primary-400);

          &:hover {
            background: rgba(var(--primary-rgb), 0.2);
          }
        }
      }
    }
    .profile-container {
      background: var(--dark-mode-bg-secondary-color);
    }
    
    .avatar-section {
      background: var(--dark-mode-bg-color);
    }
    
    .form-row {
      select, input {
        background: var(--dark-mode-bg-color);
        border-color: var(--dark-mode-grey-200);
        
        &:disabled {
          background: var(--dark-mode-grey-100);
        }
        
        &:focus {
          border-color: var(--primary-400);
          box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
        }
      }
    }
    
    .email-display {
      background: var(--dark-mode-bg-color);
    }
    
    .add-email {
      background: rgba(var(--primary-rgb), 0.1);
      border-color: var(--primary-400);
      
      &:hover {
        background: rgba(var(--primary-rgb), 0.2);
      }
    }
    
    .form-actions {
      border-color: var(--dark-mode-grey-100);
      
      .cancel-button {
        border-color: var(--dark-mode-grey-200);
        
        &:hover {
          background: var(--dark-mode-grey-100);
        }
      }
    }
  }
`;

export default Wrapper;
