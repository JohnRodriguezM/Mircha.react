import React from 'react';

export const Item = props => {
  return (<div>
      <ul>
          <li>{props.arreglo.join(", ")}</li>
          <li>{props.arreglo.map(el => props.funcion(el)).join(" - - ")}</li>
      </ul>
  </div>);
};
