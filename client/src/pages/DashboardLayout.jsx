import { Outlet, redirect, useNavigate, useNavigation } from 'react-router-dom';
import { BigSidebar, Navbar, SmallSidebar, Loading } from '../components';
import { createContext, useContext, useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { checkDefaultTheme } from '../App';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    try {
      const { data } = await customFetch.get('/users/current-user');
      return data;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      return { user: null };
    }
  },
};

export const loader = (queryClient) => async () => {
  try {
    const data = await queryClient.ensureQueryData(userQuery);
    return data;
  } catch (error) {
    console.error('Dashboard loader error:', error);
    return redirect('/');
  }
};

const DashboardContext = createContext();

const DashboardLayout = ({ queryClient }) => {
  const { data, isLoading, isError } = useQuery(userQuery);
  const user = data?.user || null;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
  const [isAuthError, setIsAuthError] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    queryClient.invalidateQueries();
    toast.success('Logging out...');
  };

  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);

  useEffect(() => {
    if (!user && !isLoading && (isAuthError || isError)) {
      console.log('No authenticated user found, redirecting to login');
      navigate('/');
    }
  }, [user, isLoading, isAuthError, isError, navigate]);

  if (isLoading || isPageLoading) {
    return <Loading />;
  }

  if (!user) {
    return <Loading />;
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

const Wrapper = styled.div`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    background: var(--background-color);
    transition: var(--transition);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 75%;
      background: linear-gradient(135deg, transparent 0%, var(--primary-50) 100%);
      opacity: 0.5;
      z-index: 0;
      pointer-events: none;
    }
  }
  
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
    transition: var(--transition);
    position: relative;
    z-index: 1;
  }
  
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    
    .dashboard-page {
      width: 90%;
      margin-left: 2rem;
      padding: 2rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      background: var(--background-secondary-color);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-1);
    }
  }
`;

export const useDashboardContext = () => useContext(DashboardContext);

DashboardLayout.propTypes = {
  queryClient: PropTypes.object.isRequired,
};

export default DashboardLayout;
