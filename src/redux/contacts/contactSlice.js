import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'user',
  initialState: {
    contacts: [],
    filter: [],
  },
  reducers: {
    addUser(state, action) { 

 },
    dltContact(state, action) {
    
    },
    searchContacts(state, action) {
    
        },
  },
});

export const {
  addUser,
  dltContact,
  searchContacts,
  filteredContacts,
} = contactSlice.actions;
export default contactSlice.reducer;
