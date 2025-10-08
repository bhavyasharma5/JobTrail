import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../utils/constants';
import { useAllJobsContext } from '../pages/AllJobs';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaSearch, FaFilter, FaSortAmountDown } from 'react-icons/fa';

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
        <div className='form-title'>
          <FaFilter className="title-icon" />
          <h2>Filter Applications</h2>
        </div>

        <div className='form-grid'>
          <div className="search-group">
            <div className="input-group">
              <FaSearch className="input-icon" />
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

          <div className="filter-group">
            <FormRowSelect
              labelText='Status'
              name='jobStatus'
              list={['all', ...Object.values(JOB_STATUS)]}
              defaultValue={jobStatus}
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            />
          </div>

          <div className="filter-group">
            <FormRowSelect
              labelText='Type'
              name='jobType'
              list={['all', ...Object.values(JOB_TYPE)]}
              defaultValue={jobType}
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            />
          </div>

          <div className="filter-group">
            <FormRowSelect
              labelText='Sort By'
              name='sort'
              defaultValue={sort}
              list={[...Object.values(JOB_SORT_BY)]}
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            />
          </div>

          <Link to='/dashboard/all-jobs' className='reset-btn'>
            Reset Filters
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;