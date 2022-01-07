import React from 'react';
import './styles.css';
import Multicampi from '../../imagens/multicampi.png';
import Brasao from '../../imagens/brasao.png';

const Cabecalho = function () {
  return (
    <header>
      <div className="cabecalho-container">
        <div className="logo-container">
          <a title="Universidade de Pernambuco" href="http://www.upe.br">
            <img
              className="upe-logo"
              alt="Universidade de Pernambuco"
              src={Brasao}
            />
          </a>
          <a title="Multicampi Garanhuns" href="http://www.upe.br/garanhuns">
            <img
              className="multicampi-logo"
              alt="Multicampi Garanhuns"
              src={Multicampi}
            />
          </a>
        </div>
        <span>Programação III</span>
      </div>
    </header>
  );
};

export default Cabecalho;
