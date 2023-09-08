/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { providers } from '../data/data';
import CardSlider from './CardSlider';

export default class ProvidersPresentaiton extends Component {
  render() {
    return (
      <div className="providers-presentation">
        <h2>Nossos principais fornecedores</h2>
        <p>Para servir melhor, nos cercamos dos melhores!</p>
        <CardSlider items={providers} width="10" />
      </div>
    );
  }
}
