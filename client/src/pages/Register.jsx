import { Form, redirect, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { FaUserPlus, FaClipboardCheck, FaRocket, FaShieldAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      <div className="info-side">
        <div className="info-content">
          <h2>Start Your Job Search Journey</h2>
          <p>Create an account to track your applications, receive insights, and land your dream job faster.</p>
          
          <div className="features">
            <div className="feature-item">
              <FaClipboardCheck />
              <span>Track and organize all your applications</span>
            </div>
            <div className="feature-item">
              <FaRocket />
              <span>Boost your job search productivity</span>
            </div>
            <div className="feature-item">
              <FaUserPlus />
              <span>Free account with all premium features</span>
            </div>
            <div className="feature-item">
              <FaShieldAlt />
              <span>Secure and private job tracking</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="form-side">
        <Form method='post' className='form'>
          <Logo />
          <h4 className="form-title">Create Account</h4>
          <p className="form-subtitle">Join thousands of job seekers who trust JobTrail</p>
          
          <div className="input-container">
            <FormRow type='text' name='name' labelText="Full Name" />
          </div>
          
          <div className="input-container">
            <FormRow type='text' name='lastName' labelText='Last Name' />
          </div>
          
          <div className="input-container">
            <FormRow type='text' name='location' labelText="Location" />
          </div>
          
          <div className="input-container">
            <FormRow type='email' name='email' labelText="Email Address" />
          </div>
          
          <div className="input-container">
            <FormRow 
              type={showPassword ? 'text' : 'password'} 
              name='password' 
              labelText="Password"
            />
            <button 
              type="button" 
              className="password-toggle" 
              onClick={togglePassword} 
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          
          <SubmitBtn formBtn text="Create Account" />
          
          <p>
            Already have an account?
            <Link to='/login' className='member-btn'>
              Log In
            </Link>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Register;
