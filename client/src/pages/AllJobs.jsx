import { toast } from 'react-toastify';
import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData, Link } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params;
  return {
    queryKey: [
      'jobs',
      search ?? '',
      jobStatus ?? 'all',
      jobType ?? 'all',
      sort ?? 'newest',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/jobs', {
        params,
      });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allJobsQuery(params));
    return { searchValues: { ...params } };
  };

const AllJobsContext = createContext();

const AllJobs = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));

  return (
    <Wrapper>
      <AllJobsContext.Provider value={{ data, searchValues }}>
        <div className="dashboard-header">
          <div className="header-content">
            <h1 className="page-title">All Applications</h1>
            <p className="subtitle">View and manage all your job applications</p>
          </div>
          <Link to="/dashboard/add-job" className="add-job-btn">
            <FaPlus className="icon" /> Add New Application
          </Link>
        </div>
        <JobsContainer />
        <div className="search-section">
          <SearchContainer />
        </div>
      </AllJobsContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
    background: linear-gradient(135deg, var(--grey-900) 0%, var(--primary-600) 100%);
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

  /* Dark mode adjustments */
  .dark-theme & {
    .page-title {
      background: linear-gradient(135deg, var(--primary-300) 0%, var(--primary-500) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
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
  }
`;

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;