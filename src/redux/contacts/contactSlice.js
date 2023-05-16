import { createSlice } from '@reduxjs/toolkit';
import {addUser, dltContact, searchContacts} from '../operations.js';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'user',
  initialState: {
    contacts: { 
    items: [],
    isLoading: false,
    error: null,
    filter: [] 
  }
  },
  
  exstraReducers: {
    [addUser.pending]:handlePending,
    [addUser.fulfilled](state, action) {
    state.isLoading = false
    state.error = null;
    state.items = action.payload;
  },
    [addUser.rejected]:handleRejected,
    [dltContact.pending]:handlePending,
    [dltContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );

      state.items.splice(index, 1);
    }
    },
    [dltContact.rejected]:handleRejected,
    
    [searchContacts.pending]:handlePending,
    
    [searchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [searchContacts.rejected]:handleRejected,
    
});


export default contactSlice.reducer;
