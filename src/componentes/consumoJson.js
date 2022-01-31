import React from 'react';
// importacion de data
import data from './helpers/data.json'


/*
se crea componente pero tener en cuenta que deberia ser creado por separado
*/

const ListaElemento = props => {
    return(
    <>
        <li key = {props.idKey}>
            <a href={props.web} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </li>
    </>
    )
}


export const ConsumoJson = props => {
  return (<div>
  <hr />
  <br />
      <h1>consumo de archivo Json, simulacion de API</h1>
    <ol>
        {
            props.children
        }
    </ol>
    <ol>
    {
        data.frameworks.map(el => <ListaElemento
            idKey = {el.id}
            name = {el.name}
            web = {el.webSite}
        />)
    }
    </ol>
  </div>);
};
