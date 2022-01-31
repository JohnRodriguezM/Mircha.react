import React from 'react';

function Button(props){
  return(
    <button onClick = {props.onClick}>{props.children}</button>
  )
}

function SaludoUsuario({name,setLogueado}) {
  return (<div>

      <h1>Hi... {name}</h1>

      <Button
        onClick = {()=>{setLogueado(false)}}>logout
      </Button>
  </div>);
}

function SaludoInvitado({setvalor,setLogueado}) {
    return (<div>

    <h1>Hi guest!!</h1>

    <input
    type="text"
    placeholder = "complete your name. Login!!"
      onChange = {(e)=>{setvalor(e.target.value)}}/>

    <Button
      onClick = {()=>{setLogueado(true)}}>Login
    </Button>

    </div>);
  }

function Saludo({logueado,valor,setvalor,setLogueado}) {
    return (<div>
        {
          logueado
          ? <SaludoUsuario
              name = {valor}
              setLogueado = {setLogueado}
          />
          : <SaludoInvitado 
              setvalor = {setvalor}
              setLogueado = {setLogueado}
            />
        }
    </div>);
  }
  

  export {Saludo}
