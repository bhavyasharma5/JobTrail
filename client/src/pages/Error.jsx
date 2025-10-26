import { Link, useRouteError, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error('Route error:', error);

  const getErrorMessage = () => {
    if (error.status === 404) {
      return "We can't seem to find the page you're looking for";
    }
    if (error.status === 401 || error.status === 403) {
      return 'You are not authorized to access this page';
    }
    if (error.status === 500) {
      return 'Our server is having issues. Please try again later';
    }
    if (error.message) {
      return error.message;
    }
    return 'An unexpected error occurred';
  };

  const getErrorTitle = () => {
    if (error.status === 404) return 'Page Not Found';
    if (error.status === 401 || error.status === 403) return 'Unauthorized Access';
    if (error.status === 500) return 'Server Error';
    return 'Something Went Wrong';
  };

  const handleRetry = () => {
    // Refresh the current route
    navigate(0);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <div>
        <img src={img} alt='error illustration' />
        <h3>{getErrorTitle()}</h3>
        <p>{getErrorMessage()}</p>
        
        <div style={{ 
          marginTop: '20px',
          display: 'flex',
          gap: '15px',
          justifyContent: 'center'
        }}>
          {/* Show Back button if we can go back */}
          {window.history.length > 1 && (
            <button
              onClick={handleGoBack}
              style={{
                padding: '8px 16px',
                background: 'var(--grey-500)',
                color: 'var(--white)',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Go Back
            </button>
          )}
          
          <button
            onClick={handleRetry}
            style={{
              padding: '8px 16px',
              background: 'var(--primary-500)',
              color: 'var(--white)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
          
          <Link 
            to='/'
            style={{
              padding: '8px 16px',
              background: 'var(--primary-700)',
              color: 'var(--white)',
              borderRadius: '4px',
              textDecoration: 'none'
            }}
          >
            Go Home
          </Link>
        </div>

        {/* Show technical details in development */}
        {process.env.NODE_ENV !== 'production' && error.stack && (
          <pre style={{ 
            margin: '20px', 
            padding: '10px', 
            background: '#f5f5f5',
            borderRadius: '5px',
            overflow: 'auto',
            fontSize: '12px'
          }}>
            {error.stack}
          </pre>
        )}
      </div>
    </Wrapper>
  );
};

export default Error;
