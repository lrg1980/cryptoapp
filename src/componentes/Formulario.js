import React, { Component } from 'react'
import Axios from 'axios';

class Formulario extends Component {
     state = { 
          criptomonedas : []
     }
     async componentWillMount() {
          const url =
            'https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=BTC&tsym=USD&limit=20';

          await Axios.get(url)
               .then(respuesta => {
                    //console.log(respuesta)
                    this.setState({
                         criptomonedas : respuesta.data.Data
                    })
               })
     }
     render() { 
          return ( 
               <form>
                    <div className="row">
                         <label>Elige tu Moneda</label>
                         <select
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
                         <select className="u-full-width">
                              <option value="">Elige tu moneda</option>
                         </select>
                         </div>
                    </div>
                    <input className="button-primary u-full-width" type="submit" value="Cotizar" />
                    </form>
           );
     }
}
 
export default Formulario;