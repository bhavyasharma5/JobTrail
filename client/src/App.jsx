import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './components/ErrorBoundary';

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
  Dashboard,
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { action as addJobAction } from './pages/AddJob';
import { loader as allJobsLoader } from './pages/AllJobs';
import { loader as editJobLoader } from './pages/EditJob';
import { action as editJobAction } from './pages/EditJob';
import { action as deleteJobAction } from './pages/DeleteJob';
import { loader as adminLoader } from './pages/Admin';
import { action as profileAction } from './pages/Profile';
import { loader as statsLoader } from './pages/Stats';
import { loader as dashboardPageLoader } from './pages/Dashboard';
import ErrorElement from './components/ErrorElement';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  // Don't apply theme globally on initial load - will be handled by components
  return isDarkTheme;
};

// Don't apply dark theme on app load
// checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: (failureCount, error) => {
        // Don't retry on 404s or auth errors
        if (error?.response?.status === 404 || error?.response?.status === 401 || error?.response?.status === 403) {
          return false;
        }
        // Retry up to 2 times for other errors
        return failureCount < 2;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false, // Disable automatic refetch on window focus
      onError: (error) => {
        console.error('Query error:', error);
        // You can add global error handling here, like showing a toast notification
      }
    },
    mutations: {
      retry: false, // Don't retry mutations by default
      onError: (error) => {
        console.error('Mutation error:', error);
        // You can add global error handling here, like showing a toast notification
      }
    }
  },
});

// Make sure to clear any query cache issues
queryClient.invalidateQueries({ queryKey: ['user'] });

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
        errorElement: <Error />,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction(queryClient),
        errorElement: <Error />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout queryClient={queryClient} />,
        loader: async (...args) => {
          try {
            return await dashboardLoader(queryClient)(...args);
          } catch (error) {
            // Handle authentication errors
            if (error.response?.status === 401) {
              throw new Error('Please login to access this page');
            }
            throw error;
          }
        },
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: async (...args) => {
              try {
                return await dashboardPageLoader(queryClient)(...args);
              } catch (error) {
                console.error('Dashboard loader error:', error);
                throw error;
              }
            },
            errorElement: <ErrorElement />,
          },
          {
            path: 'add-job',
            element: <AddJob />,
            action: async (...args) => {
              try {
                return await addJobAction(queryClient)(...args);
              } catch (error) {
                console.error('Add job error:', error);
                throw error;
              }
            },
            errorElement: <ErrorElement />,
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: async (...args) => {
              try {
                return await statsLoader(queryClient)(...args);
              } catch (error) {
                console.error('Stats loader error:', error);
                throw error;
              }
            },
            errorElement: <ErrorElement />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: async (...args) => {
              try {
                return await allJobsLoader(queryClient)(...args);
              } catch (error) {
                console.error('All jobs loader error:', error);
                throw error;
              }
            },
            errorElement: <ErrorElement />,
          },
          {
            path: 'profile',
            element: <Profile />,
            action: async (...args) => {
              try {
                return await profileAction(queryClient)(...args);
              } catch (error) {
                console.error('Profile action error:', error);
                throw error;
              }
            },
            errorElement: <ErrorElement />,
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: async (...args) => {
              try {
                return await adminLoader(...args);
              } catch (error) {
                if (error.response?.status === 403) {
                  throw new Error('You do not have permission to access the admin page');
                }
                console.error('Admin loader error:', error);
                throw error;
              }
            },
            errorElement: <ErrorElement />,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: async (...args) => {
              try {
                return await editJobLoader(queryClient)(...args);
              } catch (error) {
                console.error('Edit job loader error:', error);
                throw error;
              }
            },
            action: async (...args) => {
              try {
                return await editJobAction(queryClient)(...args);
              } catch (error) {
                console.error('Edit job action error:', error);
                throw error;
              }
            },
            errorElement: <ErrorElement />,
          },
          {
            path: 'delete-job/:id',
            action: async (...args) => {
              try {
                return await deleteJobAction(queryClient)(...args);
              } catch (error) {
                console.error('Delete job error:', error);
                throw error;
              }
            },
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
