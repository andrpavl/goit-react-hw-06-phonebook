import { combineReducers } from 'redux';

const contactsInitialState = { contacts: [] };

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'addContact':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const filterInitialState = {
  filter: '',
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'setFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
