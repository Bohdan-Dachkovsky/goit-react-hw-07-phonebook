import { createSlice } from '@reduxjs/toolkit';
import {addUser, dltContact, searchContacts} from '../operations.js';
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
    [addUser.pending](state, action) {
    state.isLoading = true
    },
    [addUser.fulfilled](state, action) {
    state.isLoading = false
    state.error = null;
    state.items = action.payload;
  },
    [addUser.rejected](state, action) {
    state.isLoading = false;
    state.error = action.payload;
    },
    [dltContact.pending](state, action) {
      state.isLoading = true;
    },
    [dltContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    }
    },
    [dltContact.rejected](state, action) {
      state.isLoading = true;
      state.error = action.payload;
    },
    [searchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [searchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [searchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
},},);


export default contactSlice.reducer;
