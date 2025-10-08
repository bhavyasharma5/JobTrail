import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAllJobsContext } from '../pages/AllJobs';
import PageBtnContainer from './PageBtnContainer';
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
      <div className="results-header">
        <div className="results-info">
          <h2 className="results-title">Search Results</h2>
          <p className="results-count">
            Found <span>{totalJobs}</span> job application{jobs.length > 1 && 's'}
          </p>
        </div>
      </div>
      <div className='jobs-grid'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default JobsContainer;
