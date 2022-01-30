import React from 'react';


// dependienod del estado de un componente se rendereiza un componente u otro

function Login({Logueado,setLogueado}){
    return(
        <div>
            <button onClick = {()=>{
                setLogueado(true)
            }}>Login</button>
        </div>
    )
}


function Logout({Logueado,setLogueado}){
    return(
        <div>
            <button onClick = {()=>{
                setLogueado(false)
            }}>Logout</button>
        </div>
    )
}


export const RenderizadoCondicional = () => {

    const [Logueado,setLogueado] = React.useState(false)
  
  return (<div>
      <h2>renderizado condicional</h2>
        {Logueado ? <Logout
        Logueado = {Logueado}
        setLogueado={setLogueado}
        /> 
        : <Login 
        Logueado = {Logueado}
        setLogueado={setLogueado}  />}
        <hr />
  </div>);
};
