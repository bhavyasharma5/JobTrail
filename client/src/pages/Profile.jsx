import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/ProfilePage';
import { useOutletContext, redirect, Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { FaCamera, FaPencilAlt } from 'react-icons/fa';
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
    name = '', 
    lastName = '', 
    email = '',
    gender = '',
    country = '',
    language = '',
    timezone = '',
  } = user;
  
  const [previewImage, setPreviewImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
      <div className="profile-container">
        <div className="welcome-header">
          <h1>Welcome, {name}</h1>
          <p className="date">Tue, 07 June 2023</p>
        </div>

        <Form method='post' className='profile-form' encType='multipart/form-data'>
          <div className="profile-header">
            <div className="avatar-section">
              <div className="avatar-container">
                {previewImage ? (
                  <img src={previewImage} alt="Profile" className="avatar-image" />
                ) : (
                  <div className="avatar-placeholder">
                    {name.charAt(0)}{lastName.charAt(0)}
                  </div>
                )}
                <label htmlFor="avatar" className="avatar-upload">
                  <FaCamera />
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <div className="user-info">
                <h2>{name} {lastName}</h2>
                <p>{email}</p>
              </div>
              <button 
                type="button" 
                className="edit-button"
                onClick={() => setIsEditing(!isEditing)}
              >
                <FaPencilAlt /> Edit
              </button>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-column">
              <FormRow
                type='text'
                name='name'
                labelText='Full Name'
                defaultValue={name}
                disabled={!isEditing}
              />
              <FormRow
                type='text'
                name='lastName'
                labelText='Nick Name'
                defaultValue={lastName}
                disabled={!isEditing}
              />
              <div className="form-row">
                <label>Gender</label>
                <select 
                  name="gender" 
                  defaultValue={gender}
                  disabled={!isEditing}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-row">
                <label>Country</label>
                <select 
                  name="country" 
                  defaultValue={country}
                  disabled={!isEditing}
                >
                  <option value="">Select Country</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                </select>
              </div>
            </div>

            <div className="form-column">
              <div className="email-section">
                <label>My email Address</label>
                <div className="email-display">
                  <span className="email-icon">📧</span>
                  <div className="email-info">
                    <p>{email}</p>
                    <span className="email-date">1 month ago</span>
                  </div>
                </div>
                <button type="button" className="add-email">+ Add Email Address</button>
              </div>

              <div className="form-row">
                <label>Language</label>
                <select 
                  name="language" 
                  defaultValue={language}
                  disabled={!isEditing}
                >
                  <option value="">Select Language</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="spanish">Spanish</option>
                </select>
              </div>

              <div className="form-row">
                <label>Time Zone</label>
                <select 
                  name="timezone" 
                  defaultValue={timezone}
                  disabled={!isEditing}
                >
                  <option value="">Select Time Zone</option>
                  <option value="ist">(GMT+5:30) India Standard Time</option>
                  <option value="pst">(GMT-8:00) Pacific Time</option>
                  <option value="est">(GMT-5:00) Eastern Time</option>
                </select>
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="form-actions">
              <button type="submit" className="save-button">
                Save Changes
              </button>
              <button 
                type="button" 
                className="cancel-button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </Form>
      </div>
    </Wrapper>
  );
};
export default Profile;
