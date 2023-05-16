import { createSlice } from '@reduxjs/toolkit';
import {addUser, dltContact, searchContacts} from '../operations.js';
export const contactSlice = createSlice({
  name: 'user',
  initialState: {
    contacts: [],
    filter: [],
  },
  exstraReducers: {
    [addUser.pending](state, action) {},
    [addUser.fulfilled](state, action) {},
    [addUser.rejected](state, action) {},
    [dltContact.pending](state, action) {},
    [dltContact.fulfilled](state, action) {},
    [dltContact.rejected](state, action) {},
    [searchContacts.pending](state, action) {},
    [searchContacts.fulfilled](state, action) {},
    [searchContacts.rejected](state, action) {},
},},);


export default contactSlice.reducer;
