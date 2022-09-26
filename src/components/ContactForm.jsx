/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Location from './Location';

export default class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    isSendButtonDisabled: true,
  };

  componentDidUpdate() {
    this.formValidation();
  }

  formValidation = () => {
    const {
      name, email, message, isSendButtonDisabled,
    } = this.state;
    const isValid = (name !== '' && email !== '' && message !== '');
    if (isSendButtonDisabled === isValid) return this.setState({ isSendButtonDisabled: !isValid });
    return null;
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      name, email, message, isSendButtonDisabled,
    } = this.state;
    return (
      <div className="location-contact">
        <h2>Venha nos visitar!</h2>
        <p>Ou fale conosco pelo meio que preferir!</p>
        <div className="contact-form">
          <div className="two-column-container">
            <Location />
            <form action="">
              <h2>Fale com a gente: </h2>
              <div className="two-column-input">
                <label htmlFor="name" aria-labelledby="name">
                  Nome:
                  <br />
                  <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                </label>
                <label htmlFor="email" aria-labelledby="email">
                  E-mail:
                  <br />
                  <input type="email" name="email" id="email" value={email} onChange={this.handleChange} />
                </label>
              </div>
              <label htmlFor="message" aria-labelledby="message">
                Mensagem:
                <br />
                <textarea rows={6} type="message" name="message" id="message" value={message} onChange={this.handleChange} />
              </label>
              <button type="button" disabled={isSendButtonDisabled} onClick={this.submitForm}>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
