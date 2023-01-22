/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const images = [
  'https://static.wixstatic.com/media/017da7_662725bc94a64ff4bc02c3cefc1c82a8~mv2.png/v1/fill/w_420,h_352,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/danone.png',
  'https://www.brf-global.com/wp-content/themes/brf-global/assets/images/nova-identidade/pack-de-produtos.png',
  'https://static.wixstatic.com/media/242cab_f73105dd7e924eac9f7bc5810cb423fc~mv2.png/v1/fill/w_570,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/A%C3%87A%C3%8D%20PRODUTOS.png',
  'https://www.argamassapenedo.com.br/images/2021/02/27/produtos.png',
  'https://i2.wp.com/www.premierealimentos.com.br/wp-content/uploads/2020/10/MIX-DE-PRODUTOS.png?fit=1712%2C1214',
];
const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, i) => (
          <div
            className="slide"
            key={i}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
