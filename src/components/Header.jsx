/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable global-require */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const pages = [
      { text: 'Início', path: '/' },
      { text: 'Quem somos', path: '/about' },
      // { text: 'Produtos', path: '/products' },
      { text: 'Fornecedores', path: '/providers' },
      { text: 'Contato', path: '/contact' },
    ];

    const logo = require('../images/logo.webp');
    return (
      <header>
        <div className="header-box">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="socials">
            <a target="_blank" href="https://wa.me/553121277500" rel="noreferrer"><i className="fa-brands fa-whatsapp fa-lg" /></a>
            <a target="_blank" href="https://www.facebook.com/megaminasdistribuidora/" rel="noreferrer"><i className="fa-brands fa-facebook fa-lg" /></a>
            <a target="_blank" href="https://www.instagram.com/megaminasdistribuidora/" rel="noreferrer"><i className="fa-brands fa-instagram fa-lg" /></a>
          </div>
          <div className="header-top">
            <ul className="menu">
              {pages.map((page) => (
                <li key={page.text}>
                  <Link className="menu-opt" to={page.path}>{page.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="info" />
        </div>
        <Link to="/register">
          <button
            type="button"
            className="register-btn"
          >
            Faça seu cadastro
          </button>
        </Link>
      </header>
    );
  }
}
