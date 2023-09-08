/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import emailJs from '@emailjs/browser';
import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import Location from './Location';

export default class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    isSendButtonDisabled: true,
    isSendedMessage: false,
    isLoading: false,
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

  submitForm = () => {
    this.setState({ isLoading: true });
    const { state } = this;
    const params = {
      name: state.name,
      email: state.email,
      message: state.message,
    };
    emailJs.send('service_5qq34ji', 'template_a6zlsp5', params, 'eXLilsIvqQUe9kiGU')
      .then(() => this.setState({ isLoading: false, isSendedMessage: true }))
      .catch((err) => console.log('ERRO: ', err.message));
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      name, email, message, isSendButtonDisabled, isSendedMessage,
      isLoading,
    } = this.state;
    return (
      <div className="location-contact">
        <h2>Venha nos visitar!</h2>
        <p>Ou fale conosco pelo meio que preferir!</p>
        <div className="contact-form">
          <div className="two-column-container">
            <Location />
            <form action="">
              { isLoading ? <ReactLoading className="loading" type="spinningBubbles" color="#151C7E" width={40} heigth={40} />
                : (
                  <div>
                    { !isSendedMessage ? (
                      <div className="contact-form-box">
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
                      </div>
                    )
                      : (
                        <h2 className="sended-message">Mensagem enviada, agradecemos seu contato!</h2>
                      )}

                  </div>
                )}

            </form>
          </div>
        </div>
      </div>
    );
  }
}
