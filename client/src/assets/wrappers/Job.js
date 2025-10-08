import styled from 'styled-components';

const Wrapper = styled.article`
  .job-card {
    background: var(--background-secondary-color);
    border-radius: 16px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      border-color: var(--primary-400);
    }
  }

  .job-header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .company-logo {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 700;
  }

  .job-title-section {
    min-width: 0;

    .job-position {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-color);
      margin: 0 0 0.25rem 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .company-name {
      font-size: 0.9375rem;
      color: var(--text-secondary-color);
      margin: 0;
      font-weight: 500;
    }
  }

  .status-badge {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: capitalize;
    white-space: nowrap;

    &.pending { background: #fef3c7; color: #92400e; }
    &.applied { background: #dbeafe; color: #1e40af; }
    &.hr-screening { background: #e0e7ff; color: #4338ca; }
    &.online-assessment { background: #fce7f3; color: #9f1239; }
    &.technical-interview { background: #ddd6fe; color: #5b21b6; }
    &.hr-interview { background: #fed7aa; color: #9a3412; }
    &.interview { background: #fef08a; color: #854d0e; }
    &.offer-accepted { background: #d1fae5; color: #065f46; }
    &.declined { background: #fee2e2; color: #991b1b; }
  }

  .job-details {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.02);
    border-radius: 12px;
  }

  .detail-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary-color);
    font-size: 0.9375rem;

    .detail-icon {
      color: var(--primary-500);
      opacity: 0.8;
    }
  }

  .job-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .action-btn {
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-size: 0.9375rem;
    font-weight: 600;
    transition: all 0.3s ease;
    flex: 1;
    text-align: center;
    text-decoration: none;
    border: none;
    cursor: pointer;

    &.edit {
      background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);
      color: white;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
      }
    }

    &.delete {
      background: #fee2e2;
      color: #991b1b;
      
      &:hover {
        background: #fecaca;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
      }
    }
  }

  /* Dark mode adjustments */
  .dark-theme & {
    .job-card {
      background: rgba(17, 24, 39, 0.7);
      border-color: rgba(255, 255, 255, 0.05);

      &:hover {
        border-color: var(--primary-400);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      }
    }

    .job-details {
      background: rgba(255, 255, 255, 0.03);
    }

    .detail-item {
      color: #94a3b8;
    }

    .action-btn {
      &.delete {
        background: rgba(239, 68, 68, 0.15);
        color: #f87171;
        
        &:hover {
          background: rgba(239, 68, 68, 0.25);
          color: #ef4444;
        }
      }
    }
  }
`;

export default Wrapper;
