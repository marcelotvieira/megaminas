/* eslint-disable react/no-array-index-key */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { providersPrev } from '../data/data';

export default class ProductPresentation extends Component {
  render() {
    const boxes = providersPrev.map((provider, index) => (
      <div className="box" key={index}>

        <div className="box-left">
          <img src={provider.providerImage} alt="" className="provider" />
        </div>

        <div className="box-right">
          {provider.products.map((product, i) => (
            <img key={i} src={product} alt="" className="product" />
          ))}
        </div>

      </div>
    ));

    return (
      <div className="product-presentation">
        <h2>Alguns de nossos produtos</h2>
        <p>Ofertamos uma ampla variedade de produtos dos principais fornecedores:</p>
        <div className="boxes-container">{ boxes }</div>
      </div>

    );
  }
}
