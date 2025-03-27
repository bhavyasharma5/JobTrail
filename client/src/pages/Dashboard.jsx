import { useDashboardContext } from './DashboardLayout';
import { FaPlus, FaFilter } from 'react-icons/fa';
import styled from 'styled-components';

const Dashboard = () => {
  const { user } = useDashboardContext();

  return (
    <Wrapper>
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Welcome, {user.name}</h1>
          <p className="subtitle">Track your job applications and interviews</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary">
            <FaPlus className="icon" />
            Add New Job
          </button>
          <button className="btn-secondary">
            <FaFilter className="icon" />
            Filter Jobs
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <section className="stats-grid">
        <div className="stat-card">
          <h3>Total Jobs</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>Pending Applications</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>Interviews Scheduled</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>Rejected</h3>
          <p className="stat-number">0</p>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <p className="empty-state">No recent activity to display</p>
        </div>
      </section>

      {/* Upcoming Interviews */}
      <section className="upcoming-interviews">
        <h2>Upcoming Interviews</h2>
        <div className="interview-list">
          <p className="empty-state">No upcoming interviews</p>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);

    .header-left {
      h1 {
        font-size: 2rem;
        color: var(--text-primary-color);
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .subtitle {
        color: var(--text-secondary-color);
        font-size: 0.9rem;
      }
    }

    .header-actions {
      display: flex;
      gap: 1rem;
    }
  }

  .btn-primary, .btn-secondary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: var(--transition);
    cursor: pointer;
    font-size: 0.9rem;

    .icon {
      font-size: 1rem;
    }
  }

  .btn-primary {
    background: var(--primary-500);
    color: var(--white);
    border: none;

    &:hover {
      background: var(--primary-600);
      transform: translateY(-2px);
    }
  }

  .btn-secondary {
    background: var(--white);
    color: var(--primary-500);
    border: 1px solid var(--primary-500);

    &:hover {
      background: var(--primary-50);
      transform: translateY(-2px);
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: var(--white);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);

    &:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-3);
    }

    h3 {
      color: var(--text-secondary-color);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary-color);
    }
  }

  .recent-activity, .upcoming-interviews {
    background: var(--white);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    margin-bottom: 2rem;

    h2 {
      font-size: 1.25rem;
      color: var(--text-primary-color);
      margin-bottom: 1rem;
    }
  }

  .empty-state {
    color: var(--text-secondary-color);
    text-align: center;
    padding: 2rem;
  }
`;

export default Dashboard; 