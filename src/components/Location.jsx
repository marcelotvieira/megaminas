/* eslint-disable react/style-prop-object */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Location extends Component {
  render() {
    return (
      <div>
        <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.743034791125!2d-44.05184587096162!3d-19.89306964384254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6953c6157d70d%3A0x5d9598d4bce5ac0b!2sMEGAMINAS%20ALIMENTOS%20COMERCIO%20E%20DISTRIBUICAO%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1663438686670!5m2!1spt-BR!2sbr" title="location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    );
  }
}
