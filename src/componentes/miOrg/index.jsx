
import { useState } from 'react';
import './miOrg.css';

const MiOrg = (props) =>{

    return <section className='org-section '>
        <h3>Mi Organización</h3>
        <img src='/img/botonAdd.png' alt='Añadir Colaborador' onClick={props.cambiarMostrarForm}/> 
        {/* Si manejarClick llevara parentesis de función, esta se ejecutaría al abrir la página */}
    </section>
};

export default MiOrg