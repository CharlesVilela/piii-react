import React, { useState, useEffect } from 'react';
import './styles.css';
import { ReactComponent as Gerar } from '../../imagens/gerar.svg';
import cadeado from '../../imagens/cadeado.png';

const Gerador = function () {
  const [senha, setSenha] = useState('');

  const [configuracao, setConfiguracao] = useState({
    tamanho: 8,
    maiuscula: false,
    minuscula: false,
    numeros: false,
    especiais: false,
  });

  const handleChangeTamanho = (valor) => {
    setConfiguracao({
      ...configuracao,
      tamanho: parseInt(valor, 10),
    });
  };

  const handleChangeMaiuscula = (valor) => {
    setConfiguracao({
      ...configuracao,
      maiuscula: valor,
    });
    console.log('valor', valor);
  };

  const handleChangeMinuscula = (valor) => {
    setConfiguracao((configAnterior) => ({
      ...configAnterior,
      minuscula: valor,
    }));
  };

  const handleChangeNumeros = (valor) => {
    setConfiguracao((configAnterior) => ({
      ...configAnterior,
      numeros: valor,
    }));
  };

  const handleChangeEspeciais = (valor) => {
    setConfiguracao((configAnterior) => ({
      ...configAnterior,
      especiais: valor,
    }));
  };

  // const handleGerarSenha = () => {
  //   const parametros = {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     mode: 'cors',
  //     cache: 'default',
  //     body: JSON.stringify(configuracao),
  //   };

  //   console.log(configuracao, parametros);

  //   fetch('http://localhost:8080/api/v1/senha', parametros)
  //     .then((retorno) => retorno.text())
  //     .then((senhaGerada) => setSenha(senhaGerada));
  // };

  useEffect(() => {
    const parametros = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(configuracao),
    };

    console.log(configuracao, parametros);

    if (
      parametros.maiuscula === true ||
      parametros.minuscula === true ||
      parametros.numeros === true ||
      parametros.especiais === true
    ) {
      fetch('http://localhost:8080/api/v1/senha', parametros)
        .then((retorno) => retorno.text())
        .then((senhaGerada) => setSenha(senhaGerada))
        .catch(console.log('Desculpe houve algum erro!'));
    }
  }, [configuracao]);

  return (
    <main className="principal">
      <h1>Gerador de senhas</h1>
      <div className="gerador-container">
        <div className="imagem-cadeado-container">
          <img src={cadeado} alt="imagem-cadeado" />
        </div>
        <div className="componentes">
          <div className="input">
            <div className="senha">{senha}</div>
            <span className="classificacao classificacao-lg muito-forte">
              muito forte
            </span>
            <div className="botao-gerar-container">
              <a href="_blank" className="lnk-gerar">
                <Gerar className="img-gerar" />
              </a>
            </div>
          </div>
          <div className="copiar">
            <a href="_blank" className="lnk-copiar">
              Copiar
            </a>
          </div>
          <div className="ajustes">
            <div className="tamanho">
              <span>Tamanho Senha:</span>
              <span className="tamanho-definido">{configuracao.tamanho}</span>
              <button type="button" className="btn-senha">
                -
              </button>
              <input
                type="range"
                min="4"
                max={64}
                value={configuracao.tamanho}
                onChange={(e) => handleChangeTamanho(e.target.value)}
              />
              <button type="button" className="btn-senha">
                +
              </button>
            </div>
            <div className="complexidade">
              <span className="texto-caracteres">Caracteres utilizados:</span>
              <div className="check-caracteres">
                <div className="check-opcao">
                  <label htmlFor="maiuscula" className="item-opcao-label">
                    ABC
                    <input
                      type="checkbox"
                      id="maiuscula"
                      className="item-opcao"
                      value={configuracao.maiuscula}
                      onChange={(e) => handleChangeMaiuscula(e.target.checked)}
                    />
                  </label>
                </div>
                <div className="check-opcao">
                  <label htmlFor="minuscula" className="item-opcao-label">
                    abc
                    <input
                      type="checkbox"
                      id="minuscula"
                      className="item-opcao"
                      value={configuracao.minuscula}
                      onChange={(e) => handleChangeMinuscula(e.target.checked)}
                    />
                  </label>
                </div>
                <div className="check-opcao">
                  <label htmlFor="numeros" className="item-opcao-label">
                    123
                    <input
                      type="checkbox"
                      id="numeros"
                      className="item-opcao"
                      value={configuracao.numeros}
                      onChange={(e) => handleChangeNumeros(e.target.checked)}
                    />
                  </label>
                </div>
                <div className="check-opcao">
                  <label htmlFor="especiais" className="item-opcao-label">
                    #$&
                    <input
                      type="checkbox"
                      id="especiais"
                      className="item-opcao"
                      value={configuracao.especiais}
                      onChange={(e) => handleChangeEspeciais(e.target.checked)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gerador;
