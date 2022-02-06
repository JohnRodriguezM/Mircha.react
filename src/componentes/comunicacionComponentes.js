import React from 'react';

/*
como se comunican los componentes en react?

react es una libreria que utiliza el one way dta binding ( la comunicacion es unidireccional (entre elementos padres e elementos hijos))

comunicacion de un padre con su hijo:
esta se da a traves del paso de las props en los componentes

sin embargo los hijos influyen en el comportamente del padre:
por ejemplo con los eventos personalizados


y... la comunicacion entre componentes no relacionados:

a traves de :

- context: es una API interna de reactjs que provee una forma de pasar datos a traves del arbol de componentes sin tener que pasar props manualmente
- redux: es una libreria externa de react para el manejo del estado dentro de la aplicacion


- una forma no tan usada son los portales ( nos permiten renderizar ciertas cosas o afectar elementos que no tenemos asignados en el dom real )

Cuando la acción deja de servirte, reúne información; cuando la
información deja de servirte, duerme..
—Ursula K. Le Guin, La Mano Izquierda De La Oscuridad


*/



const Padre = () => {
    let mensajeIncial = "buenas tardes, pero si estas leyendo esto por la noche"
    const [informacion, setInformacion] = React.useState(mensajeIncial);
    const [toggle, setToggle] = React.useState(true);
  return (
  <div>
    <h2>comunicacion entre componentes</h2>
    <Hijo
        mensaje = "hola soy un componente hijo, (mensaje para el hijo 1)" // manejando comunucion de componente padres a hijos
    />
    <Hijo mensaje = "comunicacion entre componentes hijo, (mensaje para el hijo 2)"/>
  <br />
  <HijoQueAfectaEstadoDelPadre 
      informacion = {informacion}
      setInformacion = {setInformacion}
      toggle = {toggle}
      setToggle = {setToggle}
  />
  <br />
  </div>
  );
};


const Hijo = props => {
    return (
    <>
    <h2>{props.mensaje}</h2>
    </>
    )
}


const HijoQueAfectaEstadoDelPadre = ({informacion, setInformacion,toggle,setToggle}) => {
    let mensajeNoche = "ahora si, buenas noches para ti, donde quiera que estes"
    function hanleClick() {
        setToggle(!toggle)
    }

    return(
        <div>
            <h2
            onClick = {hanleClick}>{toggle ? mensajeNoche : informacion}
            </h2>
        </div>
    )
}


export {Padre}