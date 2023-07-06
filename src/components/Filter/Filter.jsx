import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilterAction } from 'redux/reducer';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilterAction(e.target.value));
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

