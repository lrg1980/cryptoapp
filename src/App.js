import React, { Component } from 'react';
import imagen from './cryptomonedas.png';
import Formulario from './componentes/Formulario';
import Axios from 'axios';
import Resultado from './componentes/Resultado';


class App extends Component {

  // Leer lo que el usuario ha seleccionado
  state = {
    resultado: {},
    monedaSeleccionada: '',
    criptoSeleccionada: ''
  }

  cotizarCriptomoneda = async (cotizacion) => {
    // obtener los valores
    const { moneda, criptomoneda } = cotizacion;
    
    // realizar consulta con axios a la API
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    await Axios.get(url)
      .then(respuesta => {
        //console.log(respuesta)
        this.setState({
          resultado: respuesta.data.DISPLAY[criptomoneda][moneda]
        })
      })
  }

  render() {
    return (
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <img src={imagen} alt="imagen" className="logotipo" />
          </div>
          <div className="one-half column">
            <h1>Cotizador al instante</h1>
            <Formulario
              cotizarCriptomoneda={this.cotizarCriptomoneda}
            />
            <Resultado
              resultado={this.state.resultado}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
