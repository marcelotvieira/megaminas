/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AboutComponent from '../components/AboutComponent';

export default class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="page-container">
          <AboutComponent variant="singleContent" />
        </div>
      </div>
    );
  }
}
