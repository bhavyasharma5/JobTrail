import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useQueryErrorHandler = (error, queryKey) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!error) return;

    // Handle specific error types
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          toast.error('Session expired. Please login again.');
          navigate('/login');
          break;
        case 403:
          toast.error(data.msg || 'You do not have permission to perform this action');
          break;
        case 404:
          toast.error(data.msg || 'Resource not found');
          break;
        case 429:
          toast.error('Too many requests. Please try again later.');
          break;
        case 500:
          toast.error('Server error. Please try again later.');
          break;
        default:
          toast.error(data.msg || 'An error occurred');
      }
    } else if (error.request) {
      // Network error
      toast.error('Network error. Please check your connection.');
    } else {
      // Something else went wrong
      toast.error(error.message || 'An unexpected error occurred');
    }

    // Log error for debugging
    console.error(`Query error for ${queryKey}:`, error);
  }, [error, navigate, queryKey]);
};
