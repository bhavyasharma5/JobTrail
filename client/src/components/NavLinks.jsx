import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user, isDarkTheme } = useDashboardContext();
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === 'admin' && role !== 'admin') return;
        return (
          <NavLink
            to={path}
            key={path}
            className={({ isActive }) => 
              isActive 
                ? `nav-link active ${isDarkTheme ? 'dark-link' : ''}` 
                : `nav-link ${isDarkTheme ? 'dark-link' : ''}`
            }
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className={`icon ${isDarkTheme ? 'dark-icon' : ''}`}>{icon}</span>
            <span className='text'>{text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

NavLinks.propTypes = {
  isBigSidebar: PropTypes.bool,
};

export default NavLinks;
