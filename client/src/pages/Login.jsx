import { Link, Form, redirect } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { FaUserAlt, FaChartLine, FaCalendarCheck, FaEye, FaEyeSlash, FaCheckCircle, FaLongArrowAltRight } from 'react-icons/fa';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/auth/login', data);
      queryClient.invalidateQueries(['user']);
      toast.success('Login successful');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'An error occurred during login');
      return error;
    }
  };

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const queryClient = useQueryClient();

  const loginDemoUser = async () => {
    const data = {
      email: 'demo@jobtrail.com',
      password: 'demo123!@#',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('Take a test drive');
      queryClient.invalidateQueries(['user']);
      window.location.href = '/dashboard';
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      <div className="info-side">
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
        
        <div className="info-content">
          <h2>Welcome Back!</h2>
          <p>
            Track your job applications, stay organized, and land your dream job with JobTrail&apos;s intuitive dashboard.
          </p>
          
          <div className="features">
            <div className="feature-item">
              <FaUserAlt />
              <span>Personalized job tracking dashboard with real-time updates</span>
            </div>
            <div className="feature-item">
              <FaChartLine />
              <span>Visual analytics to gain insights on your application progress</span>
            </div>
            <div className="feature-item">
              <FaCalendarCheck />
              <span>Smart reminders so you never miss important deadlines</span>
            </div>
            <div className="feature-item">
              <FaCheckCircle />
              <span>Organized workflow to streamline your entire job search</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="form-side">
        <Form 
          method='post' 
          className='form' 
          action='/login'
          onSubmit={(e) => {
            const formData = new FormData(e.target);
            const email = formData.get('email');
            const password = formData.get('password');
            
            if (!email || !password) {
              e.preventDefault();
              toast.error('Please fill in all fields');
              return;
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              e.currentTarget.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
            }
          }}>
          <Logo />
          <h4 className="form-title">Welcome Back</h4>
          <p className="form-subtitle">Sign in to continue your job search journey</p>
          
          <div className="input-container">
            <FormRow type='email' name='email' labelText="Email Address" />
          </div>
          
          <div className="input-container">
            <FormRow type={showPassword ? 'text' : 'password'} name='password' labelText="Password" />
            <button 
              type="button" 
              className="password-toggle" 
              onClick={togglePassword} 
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          
          <SubmitBtn formBtn text="Sign In" />
          
          <div className="divider">
            <span>OR</span>
          </div>
          
          <button type='button' className='btn btn-block' onClick={loginDemoUser}>
            Explore Demo <FaLongArrowAltRight style={{ marginLeft: '8px' }} />
          </button>
          
          <p>
            Don&apos;t have an account?
            <Link to='/register' className='member-btn'>
              Create Account
            </Link>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
