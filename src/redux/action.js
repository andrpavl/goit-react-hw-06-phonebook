import { nanoid } from 'nanoid';

export const addContact = contact => {
  return {
    type: 'addContact',
    payload: contact,
    id: nanoid(),
  };
};

export const deleteContact = id => {
  return {
    type: 'deleteContact',
    payload: id,
  };
};

export const setFilter = filter => {
  return {
    type: 'setFilter',
    payload: filter,
  };
};
