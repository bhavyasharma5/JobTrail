import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 2rem;

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .stat-card {
    background: var(--background-secondary-color);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--card-color);
    }
    
    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      transform: translateY(-4px);
    }
  }

  .stat-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .stat-info {
    flex: 1;
  }

  .stat-title {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary-color);
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-color);
    margin: 0;
    line-height: 1;
  }

  .progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 0.6s ease;
  }

  .jobs-section {
    background: var(--background-secondary-color);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-color);
      margin: 0;
    }
  }

  .header-actions {
    display: flex;
    gap: 1rem;
  }

  .add-job-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);
    color: white;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9375rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
    }
  }

  .jobs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Dark mode adjustments */
  .dark-theme & {
    .stat-card {
      background: rgba(17, 24, 39, 0.7);
      border-color: rgba(255, 255, 255, 0.05);

      &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      }
    }

    .progress-bar {
      background: rgba(255, 255, 255, 0.05);
    }

    .jobs-section {
      background: rgba(17, 24, 39, 0.7);
      border-color: rgba(255, 255, 255, 0.05);
    }

    .section-header h2 {
      color: var(--grey-200);
    }
  }
`;