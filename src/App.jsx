import { Component } from 'react';
import { v4 as uuid } from 'uuid';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handlerInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  addContact = (name, number) => {
    return {
      id: uuid().slice(30),
      name,
      number,
    };
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          this.addContact(this.state.name, this.state.number),
        ],
        name: '',
        number: null,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handlerInput}
            />
          </label>

          <label>
            Number
            <input
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handlerInput}
            />
          </label>

          <br />
          <button type="submit" disabled={!this.state.name}>
            Add contact
          </button>
        </form>
        <section>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(el => (
              <li>
                {el.name}: {el.number}
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
