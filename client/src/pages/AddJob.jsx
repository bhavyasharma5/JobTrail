import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { FaBriefcase, FaBuilding, FaLocationArrow, FaCalendarCheck } from 'react-icons/fa';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/jobs', data);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job added successfully ');
      return redirect('/dashboard/all-jobs');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const AddJob = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Add New Job</h4>
        <div className='form-center'>
          <div className="form-row">
            <label htmlFor="position" className="form-label">
              <FaBriefcase className="icon" /> Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              className="form-input"
              placeholder="e.g. Frontend Developer"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="company" className="form-label">
              <FaBuilding className="icon" /> Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input"
              placeholder="e.g. Google"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="jobLocation" className="form-label">
              <FaLocationArrow className="icon" /> Job Location
            </label>
            <input
              type="text"
              id="jobLocation"
              name="jobLocation"
              className="form-input"
              defaultValue={user.location}
              placeholder="e.g. New York"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="jobStatus" className="form-label">
              <FaCalendarCheck className="icon" /> Job Status
            </label>
            <select
              id="jobStatus"
              name="jobStatus"
              className="form-select"
              defaultValue={JOB_STATUS.PENDING}
            >
              {Object.values(JOB_STATUS).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="jobType" className="form-label">
              <FaBriefcase className="icon" /> Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              className="form-select" 
              defaultValue={JOB_TYPE.FULL_TIME}
            >
              {Object.values(JOB_TYPE).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-btn">
            <button type="submit" className="btn">
              Submit Application
            </button>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddJob;
