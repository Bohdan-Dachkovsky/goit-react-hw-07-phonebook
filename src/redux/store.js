import { configureStore } from '@reduxjs/toolkit';
import {contactReducer} from './contacts/contactSlice.js'
import logger from 'redux-logger'

export const store = configureStore({
  devTools: true,
  reducer: { user: contactReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});
