import { Component } from 'react';

import handleInput from 'components/utils/handleInput';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = handleInput.bind(this);

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onAddedContact(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
        </label>

        <label>
          Number{' '}
          <input
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleInput}
          />
        </label>

        <button type="submit" disabled={!this.state.name}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
