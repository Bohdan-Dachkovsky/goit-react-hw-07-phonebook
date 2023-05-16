import React from 'react'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import ContactList from './components/ContactList/ContactList.jsx'
import Filter from './components/Filter/Filter.jsx'
import './App.css';

export const App = () => {
  const contacts = 1;
  return (
    <div
    className='App'
    style={{
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
    {contacts?.length && <Filter />}
    <ContactList />
  </div>
  )
}


