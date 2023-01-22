/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AboutComponent from '../components/AboutComponent';
import ContactForm from '../components/ContactForm';
import ProductPresentation from '../components/ProductPresentation';
import ProvidersPresentaiton from '../components/ProvidersPresentaiton';
import ImageSlider from '../components/ImageSlider';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="presentation">
          <ImageSlider />
        </div>
        <div className="home-page">
          <div className="page-container">
            <ProvidersPresentaiton />
            <ProductPresentation />
            <AboutComponent />
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}
