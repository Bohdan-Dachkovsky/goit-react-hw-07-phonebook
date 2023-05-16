import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://646391b4043c103502a657a0.mockapi.io';
export const addUser = createAsyncThunk('users/FetchContact', async (newUser, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", {newUser});
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
})  
export const dltUser = createAsyncThunk('users/dltContact', async (itemId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${itemId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
})  
export const searchContacts = createAsyncThunk('users/searchContactUser', async (searchId, thunkAPI) => {
    try {
        const response = await axios.get(`/contacts/${searchId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
})  