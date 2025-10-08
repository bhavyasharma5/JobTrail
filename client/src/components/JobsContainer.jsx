import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAllJobsContext } from '../pages/AllJobs';
import PageBtnContainer from './PageBtnContainer';
import { FaBriefcase, FaClock, FaCheckCircle, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const JobsContainer = () => {
  const { data } = useAllJobsContext();

  const { jobs, totalJobs, numOfPages } = data;
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="stats-grid">
        <div className="stat-card" style={{ '--card-color': '#6366f1' }}>
          <div className="stat-header">
            <div className="stat-icon" style={{ background: '#e0e7ff', color: '#6366f1' }}>
              <FaBriefcase />
            </div>
            <div className="stat-info">
              <h3 className="stat-title">TOTAL APPLICATIONS</h3>
              <p className="stat-value">{totalJobs}</p>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '100%', background: '#6366f1' }}></div>
          </div>
        </div>

        <div className="stat-card" style={{ '--card-color': '#f59e0b' }}>
          <div className="stat-header">
            <div className="stat-icon" style={{ background: '#fef3c7', color: '#f59e0b' }}>
              <FaClock />
            </div>
            <div className="stat-info">
              <h3 className="stat-title">INTERVIEWS</h3>
              <p className="stat-value">{jobs.filter(job => ['hr screening', 'online assessment', 'technical interview', 'hr interview'].includes(job.jobStatus)).length}</p>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '60%', background: '#f59e0b' }}></div>
          </div>
        </div>

        <div className="stat-card" style={{ '--card-color': '#10b981' }}>
          <div className="stat-header">
            <div className="stat-icon" style={{ background: '#d1fae5', color: '#10b981' }}>
              <FaCheckCircle />
            </div>
            <div className="stat-info">
              <h3 className="stat-title">OFFERS RECEIVED</h3>
              <p className="stat-value">{jobs.filter(job => job.jobStatus === 'offer accepted').length}</p>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '40%', background: '#10b981' }}></div>
          </div>
        </div>
      </div>

      <div className="jobs-section">
        <div className="section-header">
          <h2>Your Applications</h2>
          <div className="header-actions">
            <Link to="/dashboard/add-job" className="add-job-link">
              <FaPlus /> Add New
            </Link>
          </div>
        </div>
        <div className='jobs-grid'>
          {jobs.map((job) => {
            return <Job key={job._id} {...job} />;
          })}
        </div>
        {numOfPages > 1 && <PageBtnContainer />}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
