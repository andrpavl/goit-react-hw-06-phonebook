import { useEffect } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { setFilterAction, deleteContact, addContact } from '../redux/reducer';
import { nanoid } from 'nanoid';

export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const isInContacts = contacts.find(contact => contact.name === name);
    if (isInContacts) {
      alert(`${name} is already in contacts`);
      console.log(contacts)
    } else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      dispatch(addContact(newContact));
    }
  };

  const handleChange = e => {
    dispatch(setFilterAction(e.target.value));
  };
const handleDeleteContact = id => {
  dispatch(deleteContact(id));
};
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.application}>
      <h1>Phonebook</h1>
      <Phonebook addContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} handleChange={handleChange} />
      <Contacts
        contacts={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
}