/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import aboutImage1 from '../images/fotoLoja.jpeg';

export default class AboutComponent extends Component {
  render() {
    const { variant } = this.props;
    return (
      <div className="about-conponent">
        {variant === '' && (<h2>Quem somos?</h2>)}
        <h3>A Megaminas</h3>
        {variant === 'singleContent' && (
          <div className="about-images">
            <img src={aboutImage1} alt="" />
          </div>
        )}
        {variant === 'singleContent' ? (
          <div>
            <p>
              Fundada em 18 de novembro de 2005, a MEGAMINAS Distribuidora
              se destaca no segmento atacadista/distribuidor pela credibilidade
              com seus clientes, fornecedores e colaboradores.
              Desde sua fundação, a MEGAMINAS busca ofertar aos seus
              clientes a melhor opção de compras no CEASA MG através
              da seleção criteriosa de fornecedores e da diversificação
              de produtos atuando com ética e dedicação.
              Além disso, seus clientes contam com um atendimento
              personalizado focado em suas necessidades, tanto no
              balcão de atendimento quanto por telefone buscando
              levar a excelência constante para a satisfação dos seus clientes.
            </p>
            <h3>Missão</h3>
            <p>
              Atendimento personalizado com foco na construção de
              relacionamentos lucrativos e duradouros, comercializando
              um maior mix de produtos e com o melhor custo benefício
              para nossos clientes
            </p>
            <h3>Visão</h3>
            <p>
              Ganhar reconhecimento no mercado varejista  de minas gerais pela excelência em
              atendimento e produtos, ampliando assim nosso campo de atuação e fornecimento.
              Buscar maiores níveis de satisfação para clientes, fornecedores e colaboradores.
            </p>
            <h3>Valores</h3>
            <p>
              Ética, transparência, humildade, responsabilidade social,
              respeito e valorização do ser humano, inovação e criatividade.
            </p>
          </div>
        )
          : (
            <p>
              A Megaminas trabalha com mais de 4 mil itens em sete
              diferentes categorias sendo estas, alimentação,
              bomboniere, bebidas, limpeza, higiene pessoal, utilidades e papelaria.
            </p>
          )}
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
