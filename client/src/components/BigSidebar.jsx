import NavLinks from './NavLinks';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useSelector, useDispatch } from 'react-redux';
import { IoLogOutOutline } from 'react-icons/io5';
import { logoutUser } from '../features/user/userSlice';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

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
          <header className='header'>
            <Logo />
          </header>
          <NavLinks />
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

export default BigSidebar;
