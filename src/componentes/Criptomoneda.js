import React from 'react';

const Criptomoneda = ({criptomoneda}) => {
     
     //console.log(criptomoneda.CoinInfo)
     const { FullName, Name } = criptomoneda.CoinInfo;

     return ( 
          <option value={Name}> {Name}-{FullName}</option>
          
     );
}
 
export default Criptomoneda;