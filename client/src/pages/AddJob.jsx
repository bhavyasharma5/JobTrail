import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { FaBriefcase, FaBuilding, FaLocationArrow, FaCalendarCheck, FaRegPaperPlane, FaClock } from 'react-icons/fa';
import mainImage from '../assets/images/main-alternative.svg';
import INDIAN_CITIES from '../utils/indianCities';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/jobs', data);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job added successfully ');
      return redirect('/dashboard/all-jobs');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const AddJob = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Add New Application</h1>
          <p className="page-subtitle">Track your next career opportunity</p>
        </div>
      </div>

      <div className="form-container">
        <div className="form-section">
          <Form method='post' className='modern-form'>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="position" className="modern-label">
                  <FaBriefcase className="label-icon" />
                  <span>Position</span>
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  className="modern-input"
                  placeholder="e.g. Senior Frontend Developer"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="modern-label">
                  <FaBuilding className="label-icon" />
                  <span>Company</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="modern-input"
                  placeholder="e.g. Google"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="jobLocation" className="modern-label">
                  <FaLocationArrow className="label-icon" />
                  <span>Job Location</span>
                </label>
                <input
                  type="text"
                  id="jobLocation"
                  name="jobLocation"
                  className="modern-input"
                  defaultValue={user.location}
                  placeholder="e.g. New York, NY"
                  list="locations"
                  autoComplete="off"
                  required
                />
                <datalist id="locations">
                  {INDIAN_CITIES.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              </div>

              <div className="form-group">
                <label htmlFor="jobStatus" className="modern-label">
                  <FaCalendarCheck className="label-icon" />
                  <span>Application Status</span>
                </label>
                <select
                  id="jobStatus"
                  name="jobStatus"
                  className="modern-select"
                  defaultValue={JOB_STATUS.APPLIED}
                >
                  {Object.values(JOB_STATUS).map((status) => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="jobType" className="modern-label">
                  <FaClock className="label-icon" />
                  <span>Job Type</span>
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  className="modern-select" 
                  defaultValue={JOB_TYPE.FULL_TIME}
                >
                  {Object.values(JOB_TYPE).map((type) => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="applicationDate" className="modern-label">
                  <FaCalendarCheck className="label-icon" />
                  <span>Application Date</span>
                </label>
                <input
                  type="date"
                  id="applicationDate"
                  name="applicationDate"
                  className="modern-input"
                  defaultValue={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  <FaRegPaperPlane className="btn-icon" />
                  Submit Application
                </button>
              </div>
            </div>
          </Form>
        </div>

        <div className="illustration-section">
          <div className="illustration-card">
            <img src={mainImage} alt="Job Application" className="illustration" />
            <div className="tips-card">
              <h3>Quick Tips</h3>
              <ul>
                <li>✓ Be specific with position title</li>
                <li>✓ Track every application</li>
                <li>✓ Update status regularly</li>
                <li>✓ Add notes for follow-ups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;

  .page-header {
    margin-bottom: 2.5rem;
  }

  .header-content {
    text-align: center;
  }

  .page-title {
    font-size: 2.25rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--grey-900) 0%, var(--primary-600) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .page-subtitle {
    color: var(--text-secondary-color);
    font-size: 1.125rem;
  }

  .form-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
  }

  .form-section {
    background: var(--background-secondary-color);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .modern-form {
    width: 100%;
  }

  .form-grid {
    display: grid;
    gap: 1.75rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .modern-label {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--text-color);
    text-transform: capitalize;
  }

  .label-icon {
    color: var(--primary-500);
    font-size: 1.125rem;
  }

  .modern-input,
  .modern-select {
    width: 100%;
    padding: 0.875rem 1rem;
    border-radius: 10px;
    background: var(--background-color);
    border: 2px solid rgba(0, 0, 0, 0.08);
    color: var(--text-color);
    font-size: 1rem;
    transition: all 0.3s ease;
    outline: none;

    &:focus {
      border-color: var(--primary-500);
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
      background: var(--background-secondary-color);
    }

    &::placeholder {
      color: var(--text-secondary-color);
      opacity: 0.6;
    }
  }

  .modern-select {
    cursor: pointer;
    text-transform: capitalize;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1.25em;
    padding-right: 2.5rem;
  }

  .form-actions {
    margin-top: 1rem;
  }

  .submit-btn {
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.0625rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
      background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-700) 100%);
    }

    &:active {
      transform: translateY(0);
    }

    .btn-icon {
      font-size: 1rem;
    }
  }

  .illustration-section {
    display: none;
  }

  .illustration-card {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    border: 2px solid rgba(99, 102, 241, 0.1);
  }

  .illustration {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-bottom: 2rem;
    filter: drop-shadow(0 10px 30px rgba(99, 102, 241, 0.2));
  }

  .tips-card {
    background: var(--background-secondary-color);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-color);
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.625rem 0;
        color: var(--text-secondary-color);
        font-size: 0.9375rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:not(:last-child) {
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
      }
    }
  }

  @media (min-width: 768px) {
    .form-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem 2rem;
    }

    .form-actions {
      grid-column: 1 / -1;
    }
  }

  @media (min-width: 1024px) {
    .form-container {
      grid-template-columns: 1.2fr 1fr;
      gap: 3rem;
    }

    .illustration-section {
      display: block;
      position: sticky;
      top: 2rem;
    }
  }

  @media (min-width: 1200px) {
    .form-container {
      grid-template-columns: 1.3fr 1fr;
    }
  }
`;

export default AddJob;
