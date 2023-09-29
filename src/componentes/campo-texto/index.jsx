
import { useState } from 'react';
import './campo.css';

const Campo = (props) => {

    const {type='text'} = props
    // Al destructurar podemos hacer que si un valor no esta definido se le pueda asignar

    const manejarCambio = (e)=> props.setValor(e.target.value);

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
        />
    </div>

 
};

export default Campo