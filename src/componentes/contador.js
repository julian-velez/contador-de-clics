import React from 'react'
import  '../hojas-de-estilo/contador.css'

function Contador ({ numClics }) /*desestructuración*/{
    return (
    <div className='contador'>
      {numClics}
    </div>
    );
}


export default Contador;