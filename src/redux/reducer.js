import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;

export const {addContact, deleteContact} = contactsSlice.actions;
export const setFilterAction = filterSlice.actions.setFilter;