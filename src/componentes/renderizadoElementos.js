import React from 'react';

export const RenderizadoElementos = () => {

    let weekDays = ["lunes",'martes','miercoles','jueves','viernes','sabado','domingo']
    let map = weekDays.map((el,i) => <li key = {i}>{el}</li>)
    
  return( <div>
      <h2>Renderizado de Elementos</h2>
      <h3>dias de la semana</h3>
      <ol>
          {
              map
          }
      </ol>
  </div>);
};
