import { Component } from 'react';
import { v4 as uuid } from 'uuid';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import handleInput from 'components/utils/handleInput';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInput = handleInput.bind(this);

  addContact = (name, number) => {
    const contactItem = {
      id: uuid().slice(30),
      name,
      number,
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactItem],
      };
    });
  };

  onVisibleContacts = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAddedContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter searchFilter={this.state.filter} handler={this.handleInput} />

        <ContactList visible={this.onVisibleContacts} />
      </div>
    );
  }
}
