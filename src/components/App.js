import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { PhoneList } from './Phonelist/PhoneList';
import { Container } from './ContactForm/StyledContactFrom';
import { useState, useEffect } from 'react';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('savedContacts');
    console.log(savedContacts);
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem('savedContacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addPhoneCard = newCard => {
    const checkName = newCard.Name;
    if (
      contacts.some(
        contact => contact.Name.toLowerCase() === checkName.toLowerCase()
      )
    ) {
      alert(`${checkName} already recorded in the directory`);
      return;
    }
    setContacts(prevState => [...prevState, newCard]);
  };
  const changefilterPhone = value => setFilter(value);

  const getFiltered = () =>
    contacts.filter(contact =>
      contact.Name.toLowerCase().includes(filter.toLowerCase())
    );

  const deleteCard = deleteId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== deleteId)
    );
  };

  const filtered = getFiltered();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addPhoneCard={addPhoneCard} />
      {contacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter changeFilter={changefilterPhone} phoneFilter={filter} />
          <PhoneList contacts={filtered} deleteContact={deleteCard} />
        </>
      )}
    </Container>
  );
};
