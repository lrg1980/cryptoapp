import React, { Component } from 'react';
import imagen from './cryptomonedas.png';
import Formulario from './componentes/Formulario';
import Axios from 'axios';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';


class App extends Component {

  // Leer lo que el usuario ha seleccionado
  state = {
    resultado: {},
    monedaSeleccionada: '',
    criptoSeleccionada: '',
    cargando: false
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
          resultado: respuesta.data.DISPLAY[criptomoneda][moneda],
          cargando: true
        }, () => {
            setTimeout(() => {
              this.setState({
                cargando: false
              })
            }, 3000);
        })
      });
    
    // 3 Segundos despues, 
  }

  render() {
    const resultado = (this.state.cargando) ? < Spinner /> : <Resultado resultado=
                  {this.state.resultado}/> 
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
            {resultado}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
