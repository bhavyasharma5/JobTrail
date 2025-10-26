import { Component } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    // You can also log the error to an error reporting service here
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Wrapper>
          <div>
            <img src={img} alt='error occurred' />
            <h3>Oops! Something went wrong</h3>
            <p>
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            {process.env.NODE_ENV !== 'production' && (
              <pre style={{ 
                margin: '20px', 
                padding: '10px', 
                background: '#f5f5f5',
                borderRadius: '5px',
                overflow: 'auto'
              }}>
                {this.state.error?.stack}
              </pre>
            )}
            <div style={{ marginTop: '20px' }}>
              <Link 
                to='/'
                onClick={() => {
                  // Reset error state when navigating away
                  this.setState({ hasError: false, error: null, errorInfo: null });
                }}
                style={{
                  marginRight: '15px',
                  padding: '8px 16px',
                  background: 'var(--primary-500)',
                  color: 'var(--white)',
                  borderRadius: '4px',
                  textDecoration: 'none'
                }}
              >
                Go Home
              </Link>
              <button
                onClick={() => {
                  // Reset error state and retry
                  this.setState({ hasError: false, error: null, errorInfo: null });
                }}
                style={{
                  padding: '8px 16px',
                  background: 'var(--grey-500)',
                  color: 'var(--white)',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}
