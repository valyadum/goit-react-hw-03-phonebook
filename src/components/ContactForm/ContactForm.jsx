import React, { Component } from 'react';
import css from './ContactForm.module.css'


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeName = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  onAddContact = event => {
    event.preventDefault();
    this.props.onSubmitProps(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.onAddContact}>
          <label className={css.label}>
            
            <input
              placeholder='Name'
              className={css.input}
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
          </label>
          <label className={css.label}>
            
            <input
              placeholder='Number'
              className={css.input}
              type="tel"
              name="number"
              value={this.state.number}
              required
              onChange={this.handleChangeName}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            />
          </label>
          <button type="submit" className={css.buttonSubmit}>Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
