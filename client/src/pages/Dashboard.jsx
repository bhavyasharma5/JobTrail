import { useDashboardContext } from './DashboardLayout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    await queryClient.ensureQueryData(statsQuery);
    return null;
  } catch (error) {
    console.error('Error loading stats data:', error);
    return null;
  }
};

const Dashboard = () => {
  const { user } = useDashboardContext() || {};
  const { data, isLoading } = useQuery(statsQuery);
  
  const defaultStats = data?.defaultStats || {};
  const totalJobs = defaultStats.pending + defaultStats.interview + defaultStats.declined || 0;

  return (
    <Wrapper>
      <div className="dashboard-header">
        <div>
          <h1>Welcome, {user?.name || 'User'}</h1>
          <p className="subtitle">This is your dashboard</p>
        </div>
        <Link to="/dashboard/add-job" className="add-job-btn">
          <FaPlus className="icon" /> Add Job
        </Link>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Jobs</h3>
          <p className="stat-value">{isLoading ? '...' : totalJobs}</p>
        </div>
        <div className="stat-card">
          <h3>Pending Applications</h3>
          <p className="stat-value">{isLoading ? '...' : defaultStats.pending || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Interviews Scheduled</h3>
          <p className="stat-value">{isLoading ? '...' : defaultStats.interview || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Jobs Declined</h3>
          <p className="stat-value">{isLoading ? '...' : defaultStats.declined || 0}</p>
        </div>
      </div>

      <div className="recent-jobs">
        <div className="section-header">
          <h2>Recent Jobs</h2>
          <Link to="/dashboard/all-jobs" className="view-all">View All</Link>
        </div>
        {totalJobs > 0 ? (
          <div>
            <p>Recent jobs will appear here</p>
            <Link to="/dashboard/all-jobs" className="view-all">
              View all your jobs
            </Link>
          </div>
        ) : (
          <div className="empty-state">
            <p>No jobs added yet</p>
            <Link to="/dashboard/add-job" className="add-job-link">
              Add your first job
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: transparent;
  
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    background: transparent;
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: var(--text-color);
  }

  .subtitle {
    color: var(--text-secondary-color);
  }

  .add-job-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--primary-500);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      background: var(--primary-700);
      box-shadow: var(--shadow-3);
      transform: translateY(-2px);
    }
    
    .icon {
      font-size: 0.875rem;
    }
  }

  .stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .stat-card {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    border: 1px solid rgba(0, 0, 0, 0.05);
    
    &:hover {
      box-shadow: var(--shadow-3);
      transform: translateY(-3px);
    }
    
    h3 {
      font-size: 1rem;
      margin-bottom: 1rem;
      color: var(--text-secondary-color);
    }
    
    .stat-value {
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--primary-500);
    }
  }

  .recent-jobs {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: var(--shadow-2);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    
    h2 {
      font-size: 1.25rem;
      color: var(--text-color);
    }
    
    .view-all {
      color: var(--primary-500);
      text-decoration: none;
      transition: var(--transition);
      
      &:hover {
        color: var(--primary-700);
        text-decoration: underline;
      }
    }
  }

  .empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--text-secondary-color);
    
    p {
      margin-bottom: 1rem;
    }
    
    .add-job-link {
      display: inline-block;
      color: var(--primary-500);
      text-decoration: none;
      border: 1px solid var(--primary-500);
      padding: 0.5rem 1rem;
      border-radius: var(--border-radius);
      transition: var(--transition);
      
      &:hover {
        background: var(--primary-500);
        color: white;
      }
    }
  }
`;

export default Dashboard; 