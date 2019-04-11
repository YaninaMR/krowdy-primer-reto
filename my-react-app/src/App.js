import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Cotizador from "./componentes/Cotizador";



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           Primer Ejercicio de React
        </header>
        <Cotizador/>
      </div>
    );
  }
}

export default App;
