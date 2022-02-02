/* eslint-disable no-unused-expressions */
import React from 'react';

export const Contador = ({valorContador,setValorContador}) => {
  return (
  <div>
  <span>
  <button 
  onClick={() => {
    valorContador >= 5 ?
    'disabled'
    : setValorContador(++valorContador)}}
  >+</button>
  </span>

<p>{valorContador}</p>

<span>
<button onClick={() => {
    valorContador === 0 ?
    'disabled'
    : setValorContador(--valorContador)}}>-</button>
</span>
  </div>);
};
