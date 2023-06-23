import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://646391b4043c103502a657a0.mockapi.io/contacts';
export const addUser = createAsyncThunk('task/addUser', async (newUser, thunkAPI) => {
      return  await axios.post("/contacts", {newUser}).then((response) => response.json())
      .catch(error => thunkAPI.rejectWithValue(error.message));
      
})  
export const dltUser = createAsyncThunk('task/dltContact', async (itemId, thunkAPI) => {
      return await axios.delete(`/contacts/${itemId}`).then((response) => response.data)
      .catch(error => thunkAPI.rejectWithValue(error.message));
})  
export const searchContacts = createAsyncThunk('task/searchContacts', async (_, thunkAPI) => {
      return await axios.get(`/contacts`).then((response) => response.data)
     .catch(error =>  thunkAPI.rejectWithValue(error.message));
      
})  