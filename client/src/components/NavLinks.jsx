import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import links from '../utils/links';

const NavLinks = ({ toggleSidebar }) => {
  const { user } = useSelector((store) => store.user);

  const navLinks = useMemo(() => {
    return links.filter((link) => {
      const { path } = link;
      // Filter out admin links for non-admin users
      if (path === 'admin' && user.role !== 'admin') {
        return false;
      }
      return true;
    });
  }, [user.role]);

  return (
    <div className='nav-links'>
      {navLinks.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={path}
            onClick={toggleSidebar}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end
          >
            <span className='icon'>{icon}</span>
            <span className='text'>{text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
