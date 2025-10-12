import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext, redirect } from 'react-router-dom';
import { Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaCamera } from 'react-icons/fa';
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
  const { name, lastName, email, location } = user;
  const [previewImage, setPreviewImage] = useState(null);

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
            <div className="input-group">
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
            </div>
            
            <div className="input-group">
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
