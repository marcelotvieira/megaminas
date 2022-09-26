/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactCardSlider from 'react-card-slider-component';
import { providers } from '../data/data';

export default class ProvidersPresentaiton extends Component {
  render() {
    return (
      <div className="providers-presentation">
        <h2>Nossos principais fornecedores</h2>
        <p>Para servir melhor, nos cercamos dos melhores!</p>
        <ReactCardSlider slides={providers} width="10" />
      </div>
    );
  }
}
