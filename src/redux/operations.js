import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = '';
export const addUser = createAsyncThunk('users/FetchContact', async (_, thunkAPI) => {
    try {
        const response = await axios.get("/users");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
})  
export const dltUser = createAsyncThunk('users/dltContact', async (id, thunkAPI) => {
    try {
        const response = await axios.get("/users");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
})  
export const searchContacts = createAsyncThunk('users/searchContactUser', async (id, thunkAPI) => {
    try {
        const response = await axios.get("/users");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
})  