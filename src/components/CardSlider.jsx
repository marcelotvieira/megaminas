import React from 'react';
import PropTypes from 'prop-types';

function CardSlider({ items }) {
  const slideLeft = () => {
    const slider = document.getElementById('card-slider');
    slider.scrollLeft -= 448;
  };

  const slideRight = () => {
    const slider = document.getElementById('card-slider');
    slider.scrollLeft += 448;
  };

  return (
    <div className="card-slider-container">
      <button
        type="button"
        onClick={slideLeft}
      >
        {'<'}

      </button>
      <div id="card-slider" className="card-slider">
        {
        items.map((item) => (
          <div key={item.title} className="provider-slider-card">
            <div className="provider-image-box">
              <img alt="" src={item.image} />
            </div>

            <div className="provider-card-info">
              <h4>{item.title}</h4>
            </div>

          </div>
        ))
      }

      </div>
      <button
        type="button"
        onClick={slideRight}
      >
        {'>'}

      </button>

    </div>
  );
}

CardSlider.defaultProps = {
  items: [],
};

CardSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
};

export default CardSlider;
