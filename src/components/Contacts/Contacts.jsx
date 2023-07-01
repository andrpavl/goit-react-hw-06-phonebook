import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export function Contacts ({contacts, deleteContact}) {
  const onDeleteContact = name => deleteContact(name);

    return (
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.name}>
            {contact.name}: {contact.number}
            <button
              className={css.deleteBtn}
              onClick={() => onDeleteContact(contact.name)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
