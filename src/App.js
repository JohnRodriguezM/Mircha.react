import logo from './logo.svg';
import './App.css';

// importacion de components
import {RenderizadoCondicional} from './componentes/renderizadoCondicional'
import {RenderizadoElementos} from './componentes/renderizadoElementos'

// muestra de data (simulacion API)
import data from './componentes/helpers/data.json'

import {ConsumoJson} from './componentes/consumoJson'









function App() {
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
      </header>
    </div>
  );
}

export default App;
