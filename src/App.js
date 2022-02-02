import React from 'react';

import logo from './logo.svg';
import './App.css';

// importacion de components
import {RenderizadoCondicional} from './componentes/renderizadoCondicional'
import {RenderizadoElementos} from './componentes/renderizadoElementos'

// muestra de data (simulacion API)
import data from './componentes/helpers/data.json'

import {ConsumoJson} from './componentes/consumoJson'



import {Saludo} from './componentes/pruebaRenderizado'


// para el contador 
import {Contador} from './componentes/contador'




function App() {


  /*estado de pruebaRenderizado (important) */
  const [valor,setValor] = React.useState('')
  const[logueado,setLogueado] = React.useState()
  /**/
  // para el contador
  const [valorContador,setValorContador] = React.useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* uso de operador ternario */}
      <RenderizadoCondicional/>
      <br />
      <br />
      {/* renderizado de elementos en reactjs */}
      <RenderizadoElementos/>
      <br />
      {/* consumo de datos Json */}
      <ConsumoJson>
          {
            data.frameworks.map(el => {
              return(
                <>
                  <li key = {el.id}>
                  <a href={el.webSite} target="_blank" rel = "noopener noreferrer">{el.name}</a>
                  </li>
                  {/* <li key = {el.name}>{` mi sitio web es: ${el.webSite}`}</li> */}
                  <li key = {el.webSite}>soy el mejor framework del mundo</li>
                  <div>
                  <br /><br />
                    <h2>segundo consumo, diferente forma</h2>
                  </div>
                </>
              )
            })
          }
      </ConsumoJson>
      <br /><br /><hr />
      {/* componente importante */}
      <Saludo
        logueado = {logueado}
        setLogueado = {setLogueado}
        valor = {valor}
        setvalor = {setValor}
      />
      <br />
      <br />
      <br />
      <br />
      <Contador 
        valorContador={ valorContador }
        setValorContador={setValorContador}
      />
      </header>
    </div>
  );
}

export default App;
