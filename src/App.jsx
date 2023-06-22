import React from 'react';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
import {getTasks, getLoading, errorMessage} from './redux/contacts/selectors.js';
import {useSelector, useDispatch} from 'react-redux';
import {addUser} from './redux/operations.js';



export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(errorMessage);
  useEffect(() => {
    dispatch(addUser());
  }, [dispatch]);
  const contacts = useSelector(getTasks);
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
    }}
  >
    <h1>Phonebook</h1>
    <ContactForm />
    {contacts?.length>0 || <Filter />}
    {isLoading && !error && <b>Request in progress...</b>}
    <ContactList />
  </div>
  )
}


