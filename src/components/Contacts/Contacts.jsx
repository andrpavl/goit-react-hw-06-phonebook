import css from './Contacts.module.css';

export function Contacts({ contacts, deleteContact }) {
  const onDeleteContact = id => deleteContact(id);
  // console.log(contacts)
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.name}>
          {contact.name}: {contact.number}
          <button
            className={css.deleteBtn}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
