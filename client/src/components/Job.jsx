import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
  applicationDate,
}) => {
  const date = day(applicationDate || createdAt).format('MMM Do, YYYY');
  return (
    <Wrapper>
      <div className="job-card">
        <div className="job-header">
          <div className="company-logo">
            {company.charAt(0)}
          </div>
          <div className="job-title-section">
            <h3 className="job-position">{position}</h3>
            <h4 className="company-name">{company}</h4>
          </div>
          <div className={`status-badge ${jobStatus.replace(/\s+/g, '-')}`}>
            {jobStatus}
          </div>
        </div>
        
        <div className="job-details">
          <div className="detail-item">
            <FaLocationArrow className="detail-icon" />
            <span>{jobLocation}</span>
          </div>
          <div className="detail-item">
            <FaBriefcase className="detail-icon" />
            <span>{jobType}</span>
          </div>
          <div className="detail-item">
            <FaCalendarAlt className="detail-icon" />
            <span>{date}</span>
          </div>
        </div>

        <div className="job-actions">
          <Link to={`../edit-job/${_id}`} className="action-btn edit">
            Edit Application
          </Link>
          <Form method='post' action={`../delete-job/${_id}`}>
            <button type='submit' className="action-btn delete">
              Delete
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Job;
