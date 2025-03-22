import { Link, Form, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { FaUserAlt, FaChartLine, FaCalendarCheck, FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/auth/login', data);
      queryClient.invalidateQueries();
      toast.success('Login successful');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('Take a test drive');
      navigate('/dashboard');
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
        <div className="info-content">
          <h2>Welcome Back!</h2>
          <p>Track your job applications, stay organized, and land your dream job with JobTrail.</p>
          
          <div className="features">
            <div className="feature-item">
              <FaUserAlt />
              <span>Personalized job tracking dashboard</span>
            </div>
            <div className="feature-item">
              <FaChartLine />
              <span>Visualize your application progress</span>
            </div>
            <div className="feature-item">
              <FaCalendarCheck />
              <span>Never miss important deadlines</span>
            </div>
            <div className="feature-item">
              <FaCheckCircle />
              <span>Stay organized throughout your job search</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="form-side">
        <Form method='post' className='form'>
          <Logo />
          <h4 className="form-title">Welcome Back</h4>
          <p className="form-subtitle">Enter your credentials to access your account</p>
          
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
            Explore the App
          </button>
          
          <p>
            Don't have an account?
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
