/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import logo from '../images/logo.webp';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h3 htmlFor="phone" aria-labelledby="phone">
            Contato
            <ul>
              <li>
                <i className="fa-solid fa-phone" />
                (31) 2127-7500
              </li>
              <li>
                <i className="fa-solid fa-location-pin" />
                CEASA - Pavilhão 3 Lojas 9 a 12 e 12A.
              </li>
              <li>
                <i className="fa-solid fa-envelope" />
                megaminasalimentos@megaminasalimentos.com.br
              </li>
            </ul>

          </h3>

          <div className="copyright">
            ©Developed by
            {' '}
            <br />
            {' '}
            Marcelo Vieira | Adson Henrique
          </div>

        </footer>
      </div>
    );
  }
}
