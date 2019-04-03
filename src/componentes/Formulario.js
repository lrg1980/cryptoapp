import React, { Component } from 'react'
import Axios from 'axios';
import Criptomoneda from './Criptomoneda';
import Error from './Error';

class Formulario extends Component {
     state = { 
          criptomonedas: [],
          moneda: '',
          criptomoneda: '',
          error: false
     }

     async componentWillMount() {
          const url =
            'https://min-api.cryptocompare.com/data/top/mktcapfull?fsym=BTC&tsym=USD&limit=20';

          await Axios.get(url)
               .then(respuesta => {
                    this.setState({
                         criptomonedas : respuesta.data.Data
                    })
               })
     }

     // Se ejecuta cada que el usuario elige una opción del Select
     obtenerValor = e => {
          //console.log(e.target.name);
          const { name, value } = e.target;
          this.setState({
               [name] : value
          })
     }

     // Validar que el usuario elija las monedas
     cotizarMoneda = e => {
          e.preventDefault();

          const { moneda, criptomoneda } = this.state;
          // validar que haya algo en el State
          if (moneda === '' || criptomoneda === '') {
               this.setState({
                    error: true
               }, () => {
                    setTimeout(() => {
                         this.setState({
                              error: false
                         })
                    }, 3000);
               });
               return;
          }

          // crear el objeto
          const cotizacion = {
               moneda,
               criptomoneda
          }

          // enviar los datos al componente App.js para cotizar
          this.props.cotizarCriptomoneda(cotizacion);
          
     }

     render() { 
          const mensaje = (this.state.error) ? <Error mensaje="Ambos campos son obligatorios" /> : '';

          return ( 
               <form
                    onSubmit={this.cotizarMoneda}>
                    {mensaje}
                    <div className="row">
                         <label>Elige tu Moneda</label>
                         <select
                              onChange={this.obtenerValor}
                              name="moneda"
                              className="u-full-width">
                                   <option value="">Elige tu moneda</option>
                                   <option value="USD">Dolar Estadounidense</option>
                                   <option value="USD">Dolar Canadiense</option>
                                   <option value="USD">Dolar Australiano</option>
                                   <option value="EUR">Euros EU</option>
                                   <option value="GBP">Libras UK</option>
                                   <option value="ARS">Peso Argentino</option>
                                   <option value="COP">Peso Colombiano</option>
                                   <option value="MXN">Peso Mexicano</option>
                                   <option value="USD">Yen Japones</option>
                         </select>
                    </div>

                    <div className="row">
                         <div>
                         <label>Elige tu Criptomoneda</label>
                              <select
                                   onChange={this.obtenerValor}
                                   name = "criptomoneda"
                                   className = "u-full-width" >
                                        <option value="">Elige tu moneda</option>
                                             {Object.keys(this.state.criptomonedas).map(key => (
                                                  <Criptomoneda
                                                       key={key}
                                                       criptomoneda={this.state.criptomonedas[key]}
                                                  />
                                             ))}
                              </select>
                         </div>
                    </div>
                         <input className="button-primary u-full-width" type="submit" value="Cotizar" />
                    </form>
           );
     }
}
 
export default Formulario;