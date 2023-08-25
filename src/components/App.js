import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { PhoneList } from './Phonelist/PhoneList';
import { Container } from './ContactForm/StyledContactFrom';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount(){
    const savedContacts = localStorage.getItem('savedContacts');
    if (savedContacts !==null){
      this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }

    
  };
  componentDidUpdate(prevProps,prevState){
    if(prevState.contacts !==this.state.contacts){
      localStorage.setItem('savedContacts',JSON.stringify(this.state.contacts));
    }
  }

  addPhoneCard = newCard => {
    const checkName = newCard.Name;
    if (
      this.state.contacts.some(
        contact => contact.Name.toLowerCase() === checkName.toLowerCase()
      )
    ) {
      alert(`${checkName} already recorded in the directory`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newCard],
    }));
    
  };
  changefilterPhone = value => {
    this.setState({
      filter: value,
    });
  };
  getFiltered = () => {
    return this.state.contacts.filter(contact =>
      contact.Name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteCard = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  render() {
    const filtered = this.getFiltered();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addPhoneCard={this.addPhoneCard} />
        {this.state.contacts.length !== 0 && (
          <>
            <h2>Contacts</h2>
            <Filter
              changeFilter={this.changefilterPhone}
              phoneFilter={this.state.filter}
            />
            <PhoneList contacts={filtered} deleteContact={this.deleteCard} />
          </>
        )}
      </Container>
    );
  }
}
