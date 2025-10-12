import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext, redirect } from 'react-router-dom';
import { Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { 
  FaUser, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCamera, 
  FaBriefcase, 
  FaGraduationCap,
  FaCode,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaFileUpload,
  FaBell,
  FaRupeeSign
} from 'react-icons/fa';
import { useState } from 'react';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('avatar');
    if (file && file.size > 500000) {
      toast.error('Image size too large');
      return null;
    }
    try {
      await customFetch.patch('/users/update-user', formData);
      queryClient.invalidateQueries(['user']);
      toast.success('Profile updated successfully');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    }
  };

const Profile = () => {
  const { user } = useOutletContext();
  const { 
    name, 
    lastName, 
    email, 
    location,
    jobTitle = '',
    skills = [],
    experienceLevel = 'Fresher',
    bio = '',
    linkedin = '',
    github = '',
    portfolio = '',
    preferredJobType = 'Full-time',
    preferredWorkMode = 'Hybrid',
    expectedSalary = { min: 0, max: 0, currency: 'INR' },
    notifications = {
      emailAlerts: true,
      applicationUpdates: true,
      jobRecommendations: true,
      marketingEmails: false,
    }
  } = user;
  
  const [previewImage, setPreviewImage] = useState(null);
  const [skillInput, setSkillInput] = useState('');
  const [skillsList, setSkillsList] = useState(skills);
  
  const handleAddSkill = () => {
    if (skillInput.trim() && !skillsList.includes(skillInput.trim())) {
      setSkillsList([...skillsList, skillInput.trim()]);
      setSkillInput('');
    }
  };
  
  const handleRemoveSkill = (skillToRemove) => {
    setSkillsList(skillsList.filter(skill => skill !== skillToRemove));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500000) {
        toast.error('Image size should be less than 500KB');
        e.target.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Wrapper>
      <div className="page-header">
        <h1 className="page-title">Profile Settings</h1>
        <p className="page-subtitle">Manage your personal information and preferences</p>
      </div>

      <Form method='post' className='form' encType='multipart/form-data'>
        <div className="profile-card">
          <div className="avatar-section">
            <div className="avatar-container">
              {previewImage ? (
                <img src={previewImage} alt="Profile preview" className="avatar-preview" />
              ) : (
                <div className="avatar-placeholder">
                  <FaUser />
                </div>
              )}
              <div className="avatar-overlay">
                <label htmlFor="avatar" className="avatar-upload-label">
                  <FaCamera />
                  <span>Change Photo</span>
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="avatar-input"
                />
              </div>
            </div>
            <p className="avatar-help">Max file size: 500KB</p>
          </div>

          <div className='form-center'>
            {/* Basic Information */}
            <div className="section-title">
              <h3>Basic Information</h3>
              <p className="section-description">Your personal details used across your profile</p>
            </div>
            <div className="form-grid">
              <FormRow
                type='text'
                name='name'
                defaultValue={name}
                labelText='first name'
                icon={<FaUser />}
              />
              <FormRow
                type='text'
                name='lastName'
                labelText='last name'
                defaultValue={lastName}
                icon={<FaUser />}
              />
              <FormRow
                type='email'
                name='email'
                defaultValue={email}
                icon={<FaEnvelope />}
              />
              <FormRow
                type='text'
                name='location'
                defaultValue={location}
                icon={<FaMapMarkerAlt />}
              />
            </div>

            {/* Professional Information */}
            <div className="section-title">
              <h3>Professional Information</h3>
              <p className="section-description">Showcase your professional experience and expertise</p>
            </div>
            <div className="input-group">
              <FormRow
                type='text'
                name='jobTitle'
                labelText='job title'
                defaultValue={jobTitle}
                icon={<FaBriefcase />}
              />
              <div className="form-row">
                <label htmlFor='experienceLevel' className='form-label'>
                  <span className="icon"><FaGraduationCap /></span>
                  experience level
                </label>
                <select
                  name='experienceLevel'
                  id='experienceLevel'
                  className='form-select'
                  defaultValue={experienceLevel}
                >
                  <option value='Fresher'>Fresher</option>
                  <option value='1-3 years'>1-3 years</option>
                  <option value='3-5 years'>3-5 years</option>
                  <option value='5-10 years'>5-10 years</option>
                  <option value='10+ years'>10+ years</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor='bio' className='form-label'>
                professional summary
              </label>
              <textarea
                name='bio'
                id='bio'
                className='form-textarea'
                defaultValue={bio}
                maxLength={500}
                rows={4}
                placeholder="Write a brief professional summary..."
              />
            </div>

            <div className="form-row">
              <label className='form-label'>
                <span className="icon"><FaCode /></span>
                skills
              </label>
              <div className="skills-input-container">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                  className="form-input"
                  placeholder="Add a skill and press Enter"
                />
              </div>
              <div className="skills-list">
                {skillsList.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="remove-skill"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="section-title">
              <h3>Social Links</h3>
              <p className="section-description">Connect your professional profiles and portfolio</p>
            </div>
            <div className="input-group">
              <FormRow
                type='url'
                name='linkedin'
                labelText='linkedin profile'
                defaultValue={linkedin}
                icon={<FaLinkedin />}
                placeholder="https://linkedin.com/in/username"
              />
              <FormRow
                type='url'
                name='github'
                labelText='github profile'
                defaultValue={github}
                icon={<FaGithub />}
                placeholder="https://github.com/username"
              />
            </div>
            <div className="input-group">
              <FormRow
                type='url'
                name='portfolio'
                labelText='portfolio website'
                defaultValue={portfolio}
                icon={<FaGlobe />}
                placeholder="https://yourportfolio.com"
              />
            </div>

            {/* Job Preferences */}
            <div className="section-title">
              <h3>Job Preferences</h3>
              <p className="section-description">Set your preferences for job opportunities</p>
            </div>
            <div className="input-group">
              <div className="form-row">
                <label htmlFor='preferredJobType' className='form-label'>
                  preferred job type
                </label>
                <select
                  name='preferredJobType'
                  id='preferredJobType'
                  className='form-select'
                  defaultValue={preferredJobType}
                >
                  <option value='Full-time'>Full-time</option>
                  <option value='Part-time'>Part-time</option>
                  <option value='Contract'>Contract</option>
                  <option value='Internship'>Internship</option>
                  <option value='Remote'>Remote</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor='preferredWorkMode' className='form-label'>
                  preferred work mode
                </label>
                <select
                  name='preferredWorkMode'
                  id='preferredWorkMode'
                  className='form-select'
                  defaultValue={preferredWorkMode}
                >
                  <option value='Remote'>Remote</option>
                  <option value='Hybrid'>Hybrid</option>
                  <option value='On-site'>On-site</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <div className="form-row">
                <label htmlFor='expectedSalaryMin' className='form-label'>
                  <span className="icon"><FaRupeeSign /></span>
                  minimum expected salary (annual)
                </label>
                <input
                  type='number'
                  name='expectedSalaryMin'
                  id='expectedSalaryMin'
                  className='form-input'
                  defaultValue={expectedSalary.min}
                  min="0"
                  step="10000"
                />
              </div>
              <div className="form-row">
                <label htmlFor='expectedSalaryMax' className='form-label'>
                  <span className="icon"><FaRupeeSign /></span>
                  maximum expected salary (annual)
                </label>
                <input
                  type='number'
                  name='expectedSalaryMax'
                  id='expectedSalaryMax'
                  className='form-input'
                  defaultValue={expectedSalary.max}
                  min="0"
                  step="10000"
                />
              </div>
            </div>

            {/* Resume Upload */}
            <div className="section-title">
              <h3>Resume/CV</h3>
              <p className="section-description">Upload your latest resume or CV</p>
            </div>
            <div className="form-row">
              <label htmlFor='resume' className='form-label'>
                <span className="icon"><FaFileUpload /></span>
                upload resume (PDF only, max 2MB)
              </label>
              <input
                type='file'
                id='resume'
                name='resume'
                className='form-input'
                accept='.pdf'
              />
            </div>

            {/* Notification Preferences */}
            <div className="section-title">
              <h3>Notification Preferences</h3>
              <p className="section-description">Manage how you receive updates and alerts</p>
            </div>
            <div className="notifications-grid">
              <div className="notification-option">
                <label className="toggle-label">
                  <input
                    type="checkbox"
                    name="emailAlerts"
                    defaultChecked={notifications.emailAlerts}
                  />
                  <span className="toggle-slider"></span>
                  Email Alerts
                </label>
              </div>
              <div className="notification-option">
                <label className="toggle-label">
                  <input
                    type="checkbox"
                    name="applicationUpdates"
                    defaultChecked={notifications.applicationUpdates}
                  />
                  <span className="toggle-slider"></span>
                  Application Updates
                </label>
              </div>
              <div className="notification-option">
                <label className="toggle-label">
                  <input
                    type="checkbox"
                    name="jobRecommendations"
                    defaultChecked={notifications.jobRecommendations}
                  />
                  <span className="toggle-slider"></span>
                  Job Recommendations
                </label>
              </div>
              <div className="notification-option">
                <label className="toggle-label">
                  <input
                    type="checkbox"
                    name="marketingEmails"
                    defaultChecked={notifications.marketingEmails}
                  />
                  <span className="toggle-slider"></span>
                  Marketing Emails
                </label>
              </div>
            </div>

            <div className="btn-container">
              <SubmitBtn formBtn text="Save Changes" />
            </div>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};
export default Profile;
