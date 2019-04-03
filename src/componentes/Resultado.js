import React from 'react';

const Resultado = ({ resultado }) => {

     if (Object.entries(resultado).length === 0) return null;
     return ( 
          <div className="resultado">
               <h1 className="text-center">Resultado</h1>
               <p className="precio">El precio actual es: <span>{resultado.PRICE}</span></p>
               <p>El precio más alto del día: <span>{resultado.HIGHDAY}</span></p>
               <p>El precio más bajo del día: <span>{resultado.LOWDAY}</span></p>
               <p>Variación últimas 24Hs: <span>{resultado.CHANGEPCT24HOUR}%</span></p>
               <p>Última actualización: <span>{resultado.LASTUPDATE}</span></p>
          </div>
      );
}
 
export default Resultado;
