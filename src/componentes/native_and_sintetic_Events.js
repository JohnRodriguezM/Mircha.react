import React from 'react';


/*

el sinteticBaseEvent se da solo en los componentes basados en clases y el nativo es el basico basico de javascript, el de siempre

*/


export const NativesinteticEvents = () => {

    function handleClick(e,mensaje) {
        console.log("hola desde la consola")
        console.log(e.target)
        console.log(mensaje)
    }

  return (<div>
      <h2>mas sobre eventos</h2>
      <button onClick= {(e) => handleClick(e,"hola buenas noches")}>saludadr con handleClick</button>
     {/*  evento personalizado */}
     <Button eventoPersonalizado = {
         ()=>{
             console.log("buenas tardes mundo soy un evento personalizado que pasa a traves de una prop")
         }
     }/> 
  </div>);
};


// que es un evento personalizado
// creo un componente exclusivamente de un boton por ejemplo

const Button = props => {
    return (
        <button onClick={props.eventoPersonalizado}>
            manejo de eventos personalizados en reactjs
        </button>
    )
}

export {Button}