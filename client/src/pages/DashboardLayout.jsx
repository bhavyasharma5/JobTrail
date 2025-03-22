import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllJobs } from '../features/job/jobSlice';
import { getCurrentUser } from '../features/user/userSlice';
import Loading from '../components/Loading';

const DashboardLayout = () => {
  const { user, isLoading, userLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUser());
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(getAllJobs());
    }
  }, [user, dispatch]);

  if (userLoading) {
    return (
      <Wrapper>
        <main className='dashboard'>
          <Loading center />
        </main>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            {isLoading ? <Loading center /> : <Outlet />}
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default DashboardLayout;
