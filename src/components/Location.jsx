/* eslint-disable react/style-prop-object */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Location extends Component {
  render() {
    return (
      <div>
        <iframe className="location" width="50%" title="MegaMinas" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=MegaMinas%20Alimentos%20Comercio+(Megaminas%20Distribuidora)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
      </div>
    );
  }
}
