import './App.css';
import { React } from 'react';
import Gerador from './components/gerador/index';
import Cabecalho from './components/cabecalho/index';

const App = function () {
  return (
    <div id="inicio">
      <Cabecalho />
      <Gerador />
      <footer />
    </div>
  );
};

export default App;
