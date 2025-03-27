import { useDashboardContext } from './DashboardLayout';
import { FaPlus, FaFilter, FaSearch, FaBriefcase, FaClock, FaCalendarCheck, FaTimesCircle, FaLightbulb, FaRegChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Dashboard = () => {
  const { user } = useDashboardContext();
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  
  // Mock data for charts/progress - in real app would come from API
  const progress = 35; // percent
  
  // Daily tip - would rotate in real application
  const dailyTips = [
    "Customize each application to match the job description",
    "Follow up on applications after 1-2 weeks",
    "Research the company before interviews",
    "Prepare stories that demonstrate your skills",
    "Network with professionals in your target industry"
  ];
  const randomTip = dailyTips[Math.floor(Math.random() * dailyTips.length)];

  return (
    <Wrapper>
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="welcome-section">
            <h1>Welcome, {user.name}</h1>
            <p className="subtitle">Today is {today}</p>
          </div>
          <div className="progress-container">
            <div className="progress-info">
              <span>Job Search Progress</span>
              <span className="progress-percent">{progress}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
        <div className="header-actions">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search jobs..." className="search-input" />
          </div>
          <Link to="/dashboard/add-job" className="btn-primary">
            <FaPlus className="icon" />
            Add New Job
          </Link>
          <button className="btn-secondary">
            <FaFilter className="icon" />
            Filter
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <h3>Total Jobs</h3>
            <FaBriefcase className="stat-icon" />
          </div>
          <p className="stat-number">0</p>
          <div className="stat-trend neutral">
            <span>No change</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <h3>Pending Applications</h3>
            <FaClock className="stat-icon" />
          </div>
          <p className="stat-number">0</p>
          <div className="stat-trend neutral">
            <span>No change</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <h3>Interviews Scheduled</h3>
            <FaCalendarCheck className="stat-icon" />
          </div>
          <p className="stat-number">0</p>
          <div className="stat-trend neutral">
            <span>No change</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <h3>Rejected</h3>
            <FaTimesCircle className="stat-icon" />
          </div>
          <p className="stat-number">0</p>
          <div className="stat-trend neutral">
            <span>No change</span>
          </div>
        </div>
      </section>

      {/* Two-column layout for activity and other widgets */}
      <div className="dashboard-grid">
        <section className="recent-activity">
          <div className="section-header">
            <h2>Recent Activity</h2>
            <Link to="/dashboard/all-jobs" className="view-all">View All</Link>
          </div>
          
          <div className="activity-list">
            <p className="empty-state">No recent activity to display</p>
            {/* Activity items would go here */}
          </div>
        </section>

        <div className="dashboard-sidebar">
          {/* Daily Tip Section */}
          <section className="daily-tip">
            <div className="tip-header">
              <FaLightbulb className="tip-icon" />
              <h3>Daily Tip</h3>
            </div>
            <p>{randomTip}</p>
          </section>

          {/* Upcoming Interviews */}
          <section className="upcoming-interviews">
            <div className="section-header">
              <h2>Upcoming Interviews</h2>
              <Link to="/dashboard/all-jobs" className="view-all">View All</Link>
            </div>
            <div className="interview-list">
              <p className="empty-state">No upcoming interviews</p>
            </div>
          </section>

          {/* Job Search Insights */}
          <section className="job-insights">
            <div className="section-header">
              <h2><FaRegChartBar className="insight-icon" /> Insights</h2>
            </div>
            <div className="insights-content">
              <p className="empty-state">Add more jobs to generate insights</p>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    padding: 1.75rem;
    background: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);

    .header-left {
      .welcome-section {
        margin-bottom: 1rem;
      }

      h1 {
        font-size: 1.8rem;
        color: var(--text-primary-color);
        font-weight: 600;
        margin-bottom: 0.25rem;
      }

      .subtitle {
        color: var(--text-secondary-color);
        font-size: 0.9rem;
      }

      .progress-container {
        max-width: 300px;
        
        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary-color);
          
          .progress-percent {
            font-weight: 600;
            color: var(--primary-500);
          }
        }
        
        .progress-bar {
          height: 8px;
          background: var(--grey-100);
          border-radius: 4px;
          overflow: hidden;
          
          .progress-fill {
            height: 100%;
            background: linear-gradient(to right, var(--primary-300), var(--primary-500));
            border-radius: 4px;
            transition: width 0.5s ease-in-out;
          }
        }
      }
    }

    .header-actions {
      display: flex;
      gap: 0.8rem;
      align-items: center;

      .search-container {
        position: relative;
        
        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--grey-400);
          font-size: 0.9rem;
        }
        
        .search-input {
          padding: 0.65rem 1rem 0.65rem 2.2rem;
          border: 1px solid var(--grey-200);
          border-radius: var(--border-radius);
          font-size: 0.9rem;
          width: 220px;
          transition: all 0.3s;
          
          &:focus {
            outline: none;
            border-color: var(--primary-300);
            box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
            width: 250px;
          }
        }
      }
    }

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 1.5rem;
      
      .header-actions {
        width: 100%;
        .search-container .search-input {
          width: 100%;
        }
      }
    }
  }

  .btn-primary, .btn-secondary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.65rem 1.1rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: var(--transition);
    cursor: pointer;
    font-size: 0.9rem;
    white-space: nowrap;

    .icon {
      font-size: 0.9rem;
    }
  }

  .btn-primary {
    background: var(--primary-500);
    color: var(--white);
    border: none;

    &:hover {
      background: var(--primary-600);
      transform: translateY(-2px);
      box-shadow: var(--shadow-3);
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

    .stat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
      
      h3 {
        color: var(--text-secondary-color);
        font-size: 0.9rem;
        font-weight: 500;
      }
      
      .stat-icon {
        font-size: 1.1rem;
        color: var(--primary-500);
      }
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary-color);
      margin-bottom: 0.75rem;
    }
    
    .stat-trend {
      font-size: 0.8rem;
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      display: inline-block;
      
      &.positive {
        background: var(--green-light);
        color: var(--green-dark);
      }
      
      &.negative {
        background: var(--red-light);
        color: var(--red-dark);
      }
      
      &.neutral {
        background: var(--grey-100);
        color: var(--grey-500);
      }
    }
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 1.5rem;
    
    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
    }
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    
    h2 {
      font-size: 1.25rem;
      color: var(--text-primary-color);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .view-all {
      font-size: 0.85rem;
      color: var(--primary-500);
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .recent-activity, .upcoming-interviews, .daily-tip, .job-insights {
    background: var(--white);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    margin-bottom: 1.5rem;
  }

  .daily-tip {
    border-left: 4px solid var(--primary-500);
    
    .tip-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      
      .tip-icon {
        color: var(--primary-500);
        font-size: 1.2rem;
      }
      
      h3 {
        font-size: 1.1rem;
        color: var(--text-primary-color);
        font-weight: 600;
      }
    }
    
    p {
      color: var(--text-secondary-color);
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }

  .empty-state {
    color: var(--text-secondary-color);
    text-align: center;
    padding: 2rem;
    background: var(--grey-50);
    border-radius: var(--border-radius);
    font-size: 0.9rem;
  }
  
  .insight-icon {
    margin-right: 0.5rem;
  }
`;

export default Dashboard; 