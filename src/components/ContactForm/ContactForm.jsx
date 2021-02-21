import { Component } from 'react';
import s from './ContactForm.module.css';

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
      <form onSubmit={this.handleSubmit} className={s.form}>
        <div className={s.overlay}>
          <label>
            Name{' '}
            <input
              type="text"
              name="name"
              className={s.input}
              value={this.state.name}
              onChange={this.handleInput}
            />
          </label>

          <label>
            Number{' '}
            <input
              type="number"
              name="number"
              className={s.input}
              value={this.state.number}
              onChange={this.handleInput}
            />
          </label>
        </div>

        <button type="submit" className={s.button} disabled={!this.state.name}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
