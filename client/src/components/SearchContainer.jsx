import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../utils/constants';
import { useAllJobsContext } from '../pages/AllJobs';
import styled from 'styled-components';
import { useDashboardContext } from '../pages/DashboardLayout';

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
        <h5 className={`form-title ${isDarkTheme ? 'dark-title' : ''}`}>Search Form</h5>
        <div className='form-center'>
          <FormRow
            type='search'
            name='search'
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />

          <FormRowSelect
            labelText='job status'
            name='jobStatus'
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText='job type'
            name='jobType'
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name='sort'
            defaultValue={sort}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <ResetButton to='/dashboard/all-jobs' className={isDarkTheme ? 'dark-button' : ''}>
            Reset Search Values
          </ResetButton>
        </div>
      </Form>
    </Wrapper>
  );
};

const ResetButton = styled(Link)`
  background: var(--background-secondary-color);
  color: var(--primary-600);
  border: 1px solid var(--primary-300);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  display: inline-block;
  text-align: center;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: var(--letter-spacing);
  transition: var(--transition);
  
  &:hover {
    background: var(--primary-600);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-2);
  }
  
  &.dark-button {
    border-color: var(--primary-400);
    background: rgba(79, 70, 229, 0.1);
    color: var(--primary-300);
    
    &:hover {
      background: var(--primary-600);
      color: var(--white);
    }
  }
`;

export default SearchContainer;
