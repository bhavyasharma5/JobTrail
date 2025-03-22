import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { toggleSidebar } from '../features/user/userSlice';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { IoLogOutOutline } from 'react-icons/io5';
import { logoutUser } from '../features/user/userSlice';

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    dispatch(logoutUser('Logging out...'));
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <div className='content-header'>
            <Logo />
            <button type='button' className='close-btn' onClick={toggle}>
              <FaTimes />
            </button>
          </div>
          <NavLinks toggleSidebar={toggle} />
          <div className='logout-area'>
            <button type='button' className='logout-btn' onClick={handleLogout}>
              <IoLogOutOutline className='icon' />
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
