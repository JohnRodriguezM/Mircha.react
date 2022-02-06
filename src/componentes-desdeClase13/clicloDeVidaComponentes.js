/*
el ciclo de vida de los components se basa en 3 pasos:

-montaje  ej: componentDidMount()
-actualizacion ej : componentDidUpdate()
-desmontaje ej : componentWillUnmount()


vamos a realzar un ejemplo con components de clases
*/
import React from 'react';

export const ClicloDeVidaComponentes = ({hora,setHora}) => {

    const tictac = () => {
        let intervalo = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        },1000)
    }
    



const Stopwatch = () => {
   clearInterval()
}

/* const tictac = () => {
    setHora(new Date().toLocaleTimeString())
} */

/* let MyInterval = setInterval(tictac,1000) */


/* const clickInciacion = () => {
    let intervalo = setInterval(tictac,1000)
}

const clickStopwatch = () => {
    clearInterval()
} */


  return (
  <div>
  <p>{hora}</p>
  <button onClick = {tictac}>iniciar</button>
  <button>detener</button>
  </div>);
};
