import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../utils/constants';
import { useAllJobsContext } from '../pages/AllJobs';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;
  const { isDarkTheme } = useDashboardContext() || {};
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };

  return (
    <Wrapper>
      <Form className='form'>
        <div className="search-row">
          <div className="search-group">
            <div className="input-group">
              <FaSearch className="search-icon" />
              <input
                type="search"
                name="search"
                className="search-input"
                defaultValue={search}
                placeholder="Search by position or company..."
                onChange={debounce((form) => {
                  submit(form);
                })}
              />
            </div>
          </div>

          <div className="filters-group">
            <div className="select-group">
              <select
                name='jobStatus'
                defaultValue={jobStatus}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                }}
              >
                <option value='all'>Status</option>
                {Object.values(JOB_STATUS).map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="select-group">
              <select
                name='jobType'
                defaultValue={jobType}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                }}
              >
                <option value='all'>Type</option>
                {Object.values(JOB_TYPE).map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="select-group">
              <select
                name='sort'
                defaultValue={sort}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                }}
              >
                {Object.values(JOB_SORT_BY).map((item) => (
                  <option key={item} value={item}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <Link to='/dashboard/all-jobs' className='reset-btn'>
              Clear
            </Link>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 2rem;

  .form {
    background: var(--background-secondary-color);
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 1.5rem;
  }

  .search-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
  }

  .search-group {
    flex: 1;
    min-width: 300px;
  }

  .input-group {
    position: relative;
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-secondary-color);
    font-size: 1rem;
  }

  .search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.75rem;
    background: var(--background-color);
    border: 2px solid rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    color: var(--text-color);
    font-size: 0.95rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
    }

    &::placeholder {
      color: var(--text-secondary-color);
      opacity: 0.6;
    }
  }

  .filters-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .select-group select {
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    background: var(--background-color);
    border: 2px solid rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    color: var(--text-color);
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1.25em;
    min-width: 140px;

    &:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
    }
  }

  .reset-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    background: var(--red-light);
    color: var(--red-dark);
    border: none;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      background: var(--red-dark);
      color: var(--white);
      transform: translateY(-2px);
    }
  }

  /* Dark mode adjustments */
  .dark-theme & {
    .form {
      background: rgba(17, 24, 39, 0.7);
      border-color: rgba(255, 255, 255, 0.05);
    }

    .search-input,
    .select-group select {
      background: rgba(17, 24, 39, 0.7);
      border-color: rgba(255, 255, 255, 0.05);

      &:focus {
        border-color: var(--primary-400);
      }
    }

    .reset-btn {
      background: rgba(239, 68, 68, 0.15);
      color: #f87171;
      
      &:hover {
        background: rgba(239, 68, 68, 0.25);
        color: #ef4444;
      }
    }
  }
`;

export default SearchContainer;