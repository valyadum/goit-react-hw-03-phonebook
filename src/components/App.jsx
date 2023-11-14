import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css'


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
          const newContact = {
            name: name,
            number: number,
            id: `id-` + nanoid(),
          };
    this.setState(({ contacts }) => {
    return  contacts.find(contact => contact.name === newContact.name)
        ? alert(`${newContact.name} is already in contact`)
        :{ contacts: [newContact, ...contacts] }
    });
  };
  handleChangeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getFindContacts = () => {
    let normalizeFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  onDeleteBtn = (id) => {
    this.setState(({ contacts }) => {
   return { contacts: contacts.filter(contact =>{return contact.id!==id} )}
    })
 }
  render() {
    const findContacts = this.getFindContacts();

    return (
      <>
        <div className={css.item}>
          <h1>Phonebook</h1>
          <ContactForm onSubmitProps={this.handleAddContact} />
        </div>

        <div className={css.item}>
          <h2>Contacts</h2>
          <Filter handleChangeFilter={this.handleChangeFilter} />
          <ContactList contacts={findContacts} deleteBtn={this.onDeleteBtn} />
        </div>
      </>
    );
  }
}

export default App;
