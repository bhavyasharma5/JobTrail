import { useDashboardContext } from './DashboardLayout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlus, FaBriefcase, FaClock, FaCheckCircle, FaTimesCircle, FaChartLine } from 'react-icons/fa';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';
import { JobsContainer } from '../components';

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  },
};

const recentJobsQuery = {
  queryKey: ['recentJobs'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs?limit=5&sort=newest');
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    await queryClient.ensureQueryData(statsQuery);
    await queryClient.ensureQueryData(recentJobsQuery);
    return null;
  } catch (error) {
    console.error('Error loading dashboard data:', error);
    return null;
  }
};

const Dashboard = () => {
  const { user } = useDashboardContext() || {};
  const { data, isLoading } = useQuery(statsQuery);
  const { data: jobsData, isLoading: jobsLoading } = useQuery(recentJobsQuery);
  
  const defaultStats = data?.defaultStats || {};
  const totalJobs = (defaultStats.pending || 0) + 
                    (defaultStats.applied || 0) + 
                    (defaultStats['hr screening'] || 0) + 
                    (defaultStats['online assessment'] || 0) + 
                    (defaultStats['technical interview'] || 0) + 
                    (defaultStats['hr interview'] || 0) + 
                    (defaultStats.interview || 0) + 
                    (defaultStats['offer accepted'] || 0) + 
                    (defaultStats.declined || 0);
  
  // Count all interview-stage jobs
  const interviewCount = (defaultStats['hr screening'] || 0) + 
                         (defaultStats['online assessment'] || 0) + 
                         (defaultStats['technical interview'] || 0) + 
                         (defaultStats['hr interview'] || 0) + 
                         (defaultStats.interview || 0) +
                         (defaultStats['offer accepted'] || 0);
  
  // Success rate based on offer accepted
  const successRate = totalJobs > 0 ? Math.round(((defaultStats['offer accepted'] || 0) / totalJobs) * 100) : 0;

  const stats = [
    {
      title: 'Total Applications',
      value: totalJobs,
      icon: <FaBriefcase />,
      color: '#6366f1',
      bgColor: '#e0e7ff',
      progress: 100,
    },
    {
      title: 'Interviews',
      value: interviewCount,
      icon: <FaClock />,
      color: '#f59e0b',
      bgColor: '#fef3c7',
      progress: totalJobs > 0 ? (interviewCount / totalJobs) * 100 : 0,
    },
    {
      title: 'Offers Received',
      value: defaultStats['offer accepted'] || 0,
      icon: <FaCheckCircle />,
      color: '#10b981',
      bgColor: '#d1fae5',
      progress: totalJobs > 0 ? ((defaultStats['offer accepted'] || 0) / totalJobs) * 100 : 0,
    },
    {
      title: 'Rejected',
      value: defaultStats.declined || 0,
      icon: <FaTimesCircle />,
      color: '#ef4444',
      bgColor: '#fee2e2',
      progress: totalJobs > 0 ? (defaultStats.declined / totalJobs) * 100 : 0,
    },
    {
      title: 'Success Rate',
      value: `${successRate}%`,
      icon: <FaChartLine />,
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      progress: successRate,
    },
  ];

  return (
    <Wrapper>
      <div className="dashboard-header">
        <div className="header-content">
          <h1 className="page-title">Job Application Dashboard</h1>
          <p className="subtitle">Track and manage your job applications</p>
        </div>
        <Link to="/dashboard/add-job" className="add-job-btn">
          <FaPlus className="icon" /> Add New Application
        </Link>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ '--card-color': stat.color }}>
            <div className="stat-header">
              <div className="stat-icon" style={{ background: stat.bgColor, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-info">
                <h3 className="stat-title">{stat.title}</h3>
                <p className="stat-value">{isLoading ? '...' : stat.value}</p>
              </div>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${stat.progress}%`,
                  background: stat.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <div className="section-header">
          <h2>Quick Actions</h2>
        </div>
        <div className="actions-grid">
          <Link to="/dashboard/add-job" className="action-card">
            <FaPlus className="action-icon" />
            <h3>Add Application</h3>
            <p>Track a new job opportunity</p>
          </Link>
          <Link to="/dashboard/all-jobs" className="action-card">
            <FaBriefcase className="action-icon" />
            <h3>View All Jobs</h3>
            <p>See all your applications</p>
          </Link>
          <Link to="/dashboard/stats" className="action-card">
            <FaChartLine className="action-icon" />
            <h3>View Analytics</h3>
            <p>Analyze your progress</p>
          </Link>
        </div>
      </div>

      {/* Your Applications Section */}
      <div className="applications-section">
        <div className="section-header">
          <h2>Your Applications</h2>
          <Link to="/dashboard/all-jobs" className="view-all-link">View All →</Link>
        </div>
        {jobsLoading ? (
          <div className="loading-state">Loading applications...</div>
        ) : jobsData?.jobs?.length > 0 ? (
          <div className="jobs-list">
            {jobsData.jobs.map((job) => (
              <Link to={`/dashboard/edit-job/${job._id}`} key={job._id} className="job-card">
                <div className="job-company-logo">
                  {job.company.charAt(0).toUpperCase()}
                </div>
                <div className="job-details">
                  <h3 className="job-company">{job.company}</h3>
                  <p className="job-position">{job.position}</p>
                </div>
                <div className="job-meta">
                  <span className="job-type">{job.jobType}</span>
                  <span className="job-location">{job.jobLocation}</span>
                </div>
                <div className="job-date">
                  {new Date(job.applicationDate || job.createdAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: '2-digit',
                    year: 'numeric'
                  })}
                </div>
                <div className={`job-status status-${job.jobStatus.replace(/\s+/g, '-')}`}>
                  {job.jobStatus.charAt(0).toUpperCase() + job.jobStatus.slice(1)}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-applications">
            <p>No applications yet</p>
            <Link to="/dashboard/add-job" className="add-first-job">
              <FaPlus /> Add Your First Application
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
    align-items: flex-start;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .header-content {
    flex: 1;
    min-width: 250px;
  }

  .page-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--primary-300) 0%, var(--primary-500) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.5px;
  }

  .subtitle {
    color: var(--text-secondary-color);
    font-size: 1rem;
  }

  .add-job-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);
    color: white;
    padding: 0.875rem 1.75rem;
    border-radius: 10px;
    transition: all 0.3s ease;
    text-decoration: none;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
      background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-700) 100%);
    }
    
    .icon {
      font-size: 0.875rem;
    }
  }

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

  .quick-actions {
    background: var(--background-secondary-color);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .section-header {
    margin-bottom: 1.5rem;
    
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-color);
      margin: 0;
    }
  }

  .actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .action-card {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(99, 102, 241, 0.02) 100%);
    border: 2px solid rgba(99, 102, 241, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    text-align: center;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
      border-color: var(--primary-500);
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%);
    }

    .action-icon {
      font-size: 2rem;
      color: var(--primary-500);
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-color);
      margin: 0 0 0.5rem 0;
    }

    p {
      font-size: 0.875rem;
      color: var(--text-secondary-color);
      margin: 0;
    }
  }

  .applications-section {
    margin-top: 2.5rem;

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .view-all-link {
      color: var(--primary-500);
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        color: var(--primary-700);
      }
    }
  }

  .loading-state {
    text-align: center;
    padding: 3rem;
    color: var(--text-secondary-color);
    font-size: 1.125rem;
  }

  .jobs-list {
    display: grid;
    gap: 1rem;
  }

  .job-card {
    background: var(--background-secondary-color);
    border-radius: 12px;
    padding: 1.5rem;
    display: grid;
    grid-template-columns: auto 1fr auto auto auto;
    gap: 1.5rem;
    align-items: center;
    transition: all 0.3s ease;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      border-color: var(--primary-400);
    }
  }

  .job-company-logo {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 700;
  }

  .job-details {
    flex: 1;
    min-width: 0;

    .job-company {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-color);
      margin: 0 0 0.25rem 0;
    }

    .job-position {
      font-size: 0.9375rem;
      color: var(--text-secondary-color);
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .job-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 120px;

    span {
      font-size: 0.8125rem;
      color: var(--text-secondary-color);
      text-transform: capitalize;
    }
  }

  .job-date {
    font-size: 0.875rem;
    color: var(--text-secondary-color);
    min-width: 100px;
    text-align: right;
  }

  .job-status {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: capitalize;
    min-width: 120px;
    text-align: center;
  }

  .status-pending { background: #fef3c7; color: #92400e; }
  .status-applied { background: #dbeafe; color: #1e40af; }
  .status-hr-screening { background: #e0e7ff; color: #4338ca; }
  .status-online-assessment { background: #fce7f3; color: #9f1239; }
  .status-technical-interview { background: #ddd6fe; color: #5b21b6; }
  .status-hr-interview { background: #fed7aa; color: #9a3412; }
  .status-interview { background: #fef08a; color: #854d0e; }
  .status-offer-accepted { background: #d1fae5; color: #065f46; }
  .status-declined { background: #fee2e2; color: #991b1b; }

  .empty-applications {
    text-align: center;
    padding: 3rem;
    background: var(--background-secondary-color);
    border-radius: 12px;
    border: 2px dashed rgba(0, 0, 0, 0.1);

    p {
      font-size: 1.125rem;
      color: var(--text-secondary-color);
      margin-bottom: 1.5rem;
    }

    .add-first-job {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.875rem 1.75rem;
      background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
      }
    }
  }

  @media (max-width: 768px) {
    .dashboard-header {
      flex-direction: column;
      align-items: stretch;
    }

    .add-job-btn {
      width: 100%;
      justify-content: center;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .actions-grid {
      grid-template-columns: 1fr;
    }

    .job-card {
      grid-template-columns: auto 1fr;
      gap: 1rem;
      padding: 1rem;
    }

    .job-meta,
    .job-date {
      display: none;
    }

    .job-status {
      grid-column: 1 / -1;
      margin-top: 0.5rem;
    }
  }
`;

export default Dashboard; 