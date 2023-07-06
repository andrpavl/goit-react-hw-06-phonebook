import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/reducer';
import { useState } from 'react';

export function Phonebook() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  const nameId = nanoid();
  const telId = nanoid();

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={nameId} className={css.label}>
        Name
        <input
          placeholder="Enter name"
          className={css.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={telId} className={css.label}>
        Phone
        <input
          placeholder="Enter phone number"
          className={css.input}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.btnAdd} type="submit">
        Add contact
      </button>
    </form>
  );
}
Phonebook.propTypes = {
  addContact: PropTypes.func.isRequired,
};
