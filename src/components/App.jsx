import { useEffect, useState } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const isInContacts = contacts.some(contact => contact.name === name);
    if (isInContacts) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        name: name,
        number: number,
      };
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const deleteContact = name => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.name !== name)
    );
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
      <Phonebook addContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} handleChange={handleChange} />
      <Contacts contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}
