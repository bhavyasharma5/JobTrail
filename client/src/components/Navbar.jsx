import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, clearStore } from '../features/user/userSlice';
import { useState } from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    dispatch(clearStore('Logging out...'));
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div className='logo-container'>
          <Logo />
        </div>
        <div className='btn-container'>
          <button 
            type='button' 
            className='user-btn' 
            onClick={() => setShowLogout(!showLogout)}
          >
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt='user avatar'
                className='avatar'
              />
            ) : (
              <FaUserCircle />
            )}
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='logout-btn'
              onClick={handleLogout}
            >
              <IoLogOutOutline />
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
