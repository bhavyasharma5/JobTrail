import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const HomeLayout = () => {
  useEffect(() => {
    // Ensure dark theme is removed when landing page is shown
    document.body.classList.remove('dark-theme');
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default HomeLayout;
