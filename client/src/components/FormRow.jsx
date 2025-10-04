import PropTypes from 'prop-types';
import INDIAN_CITIES from '../utils/indianCities';

const FormRow = ({ type, name, labelText, defaultValue, onChange, list, placeholder }) => {
  const locations = INDIAN_CITIES;

  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='form-input'
        defaultValue={defaultValue || ''}
        onChange={onChange}
        list={list}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
      {list && (
        <datalist id={list}>
          {locations.map((location) => (
            <option key={location} value={location} />
          ))}
        </datalist>
      )}
    </div>
  );
};

FormRow.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  list: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormRow;
