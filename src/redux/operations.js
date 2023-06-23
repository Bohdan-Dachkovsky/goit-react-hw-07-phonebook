import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://646391b4043c103502a657a0.mockapi.io/contacts';
export const addUser = createAsyncThunk('task/addUser', async (newUser, thunkAPI) => {
      try {
            const {data} =  await axios.post("/contacts", {newUser})
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
      
})  
export const dltUser = createAsyncThunk('task/dltContact', async (itemId, thunkAPI) => {
      try {
            const {data} =  await axios.delete(`/contacts/${itemId}`)
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
})  
export const searchContacts = createAsyncThunk('task/searchContacts', async (_, thunkAPI) => {
      try {
            const {data} =  await axios.get(`/contacts`)
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
      
      
})  