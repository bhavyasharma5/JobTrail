import PropTypes from 'prop-types';
import { useDashboardContext } from '../pages/DashboardLayout';

const FormRowSelect = ({
  name,
  labelText,
  list,
  defaultValue = '',
  onChange,
}) => {
  const { isDarkTheme } = useDashboardContext() || {};
  
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className={`form-select ${isDarkTheme ? 'dark-select' : ''}`}
        defaultValue={defaultValue}
        onChange={onChange}
        aria-label={labelText || name}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue} className={isDarkTheme ? 'dark-option' : ''}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

FormRowSelect.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  list: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormRowSelect;
