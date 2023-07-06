import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/action';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value))
  }
  

  return (
    <label htmlFor="name">
      Find contacts by name
      <input
        className={css.filterInput}
        placeholder="Enter name"
        name="name"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
