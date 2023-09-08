/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import emailJs from '@emailjs/browser';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
  state = {
    nome: '',
    cnpj: '',
    razao: '',
    email: '',
    telefone1: '',
    telefone2: '',
    isButtonDisabled: true,
    redirect: false,
  };

  componentDidUpdate() {
    this.validateForm();
  }

  sendMail = (e) => {
    e.preventDefault();

    const {
      nome, cnpj, razao, email, telefone1, telefone2,
    } = this.state;

    const params = {
      from_name: nome,
      email,
      razao,
      cnpj,
      telefone1,
      telefone2,
    };

    emailJs.send('service_5qq34ji', 'template_yjejp6w', params, 'eXLilsIvqQUe9kiGU');

    return this.setState({ redirect: '/sendConfirmation' });
  };

  validateForm = () => {
    const {
      nome, cnpj, razao, email, telefone1, isButtonDisabled,
    } = this.state;
    const inputsToValidate = [nome, cnpj, razao, email, telefone1];
    const isNotValid = inputsToValidate.some((input) => input === '');
    if (isButtonDisabled !== isNotValid) return this.setState({ isButtonDisabled: isNotValid });
    return null;
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      razao, nome, cnpj, email, telefone1, telefone2, isButtonDisabled, redirect,
    } = this.state;

    if (redirect) return <Redirect to={redirect} />;
    return (
      <div className="register-page">
        <div className="page-container">
          <h2>Solicitação de Cadastro:</h2>
          <p>As informações somente serão usadas para contato ao cliente.</p>

          <form
            onSubmit={this.sendMail}
            action=""
            className="register-form"
          >
            <h3>Preencha suas informações e nós faremos contato.</h3>
            <label htmlFor="nome" aria-labelledby="nome">
              Nome:
              <input
                placeholder="Seu nome..."
                type="text"
                name="nome"
                id="nome"
                value={nome}
                onChange={this.onInputChange}
              />
            </label>

            <div className="two-column-input">
              <label htmlFor="razao" aria-labelledby="razao">
                Razão Soacial:
                <input
                  placeholder="Razão social..."
                  type="text"
                  name="razao"
                  id="razao"
                  value={razao}
                  onChange={this.onInputChange}
                />
              </label>
              <label htmlFor="cnpj" aria-labelledby="cnpj">
                CNPJ:
                <input
                  maxLength={14}
                  max={14}
                  placeholder="Somente números..."
                  type="text"
                  step={false}
                  name="cnpj"
                  id="cnpj"
                  value={cnpj}
                  onChange={this.onInputChange}
                />
              </label>
            </div>

            <label htmlFor="email" aria-labelledby="email">
              Email:
              <input
                placeholder="contato@email.com"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={this.onInputChange}
              />
            </label>

            <div className="two-column-input">
              <label htmlFor="telefone1" aria-labelledby="telefone1">
                Telefone 1:
                <input
                  placeholder="xxx xxxxx-xxxx"
                  type="text"
                  maxLength={12}
                  name="telefone1"
                  id="telefone1"
                  value={telefone1}
                  onChange={this.onInputChange}
                />
              </label>
              <label htmlFor="telefone2" aria-labelledby="telefone2">
                *Telefone 2:
                <input
                  placeholder="xxx xxxx-xxxx"
                  type="text"
                  maxLength={11}
                  name="telefone2"
                  id="telefone2"
                  value={telefone2}
                  onChange={this.onInputChange}
                />
              </label>
            </div>
            <button className="register-submit" type="submit" disabled={isButtonDisabled}>Enviar</button>

          </form>
        </div>

      </div>
    );
  }
}
