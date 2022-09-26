/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import aboutImage1 from '../images/about-image1.jpg';
import aboutImage2 from '../images/about-image2.jpg';
import aboutImage4 from '../images/about-image4.jpg';

export default class AboutComponent extends Component {
  render() {
    const { variant } = this.props;
    return (
      <div className="about-conponent">
        {variant === '' && (<h2>Quem somos?</h2>) }
        <h3>A Megaminas</h3>
        {variant === 'singleContent' && (
          <div className="about-images">
            <img src={aboutImage1} alt="" />
            <img src={aboutImage2} alt="" />
            <img src={aboutImage4} alt="" />
          </div>
        )}
        <p>
          Fundada em 09 de janeiro de 2006, a Megaminas Alimentos é referência na CEASA – MG
          com o comércio de produtos industrializados de consumo básico para varejo generalista.
          A Megaminas trabalha com mais de 4 mil itens em sete diferentes categorias:
          <br />
          <br />
          alimentação, bomboniere, bebidas, limpeza, higiene pessoal, utilidades e papelaria.
          Com um amplo e seleto mix de produtos, a Megaminas oferece aos seus clientes
          a comodidade de encontrarem tudo o que precisam em um só lugar, agilizando o atendimento
          e garantindo a satisfação.
          <br />
          <br />
          Além disso, os clientes contam com um atendimento personalizado
          e focado em suas necessidades, tanto no balcão de atendimento quanto por telefone.
          Visite a nossa loja e surpreenda-se!
        </p>
      </div>
    );
  }
}

AboutComponent.propTypes = {
  variant: PropTypes.string,
};

AboutComponent.defaultProps = {
  variant: '',
};
