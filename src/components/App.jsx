import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css'


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const data = localStorage.getItem('contactsKey');
    const contactsParse = JSON.parse(data);
    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
   
  }
  componentDidUpdate( prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contactsKey', JSON.stringify(this.state.contacts));
    }
  }
  handleAddContact = ({ name, number }) => {
    const newContact = {
      name: name,
      number: number,
      id: `id-` + nanoid(),
    };
    this.setState(({ contacts }) => {
      return contacts.find(contact => contact.name === newContact.name)
        ? alert(`${newContact.name} is already in contact`)
        : { contacts: [newContact, ...contacts] };
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
  onDeleteBtn = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => {
          return contact.id !== id;
        }),
      };
    });
  };
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
