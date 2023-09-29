
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './formulario.css'
import Campo from '../campo-texto';
import ListaOpciones from '../lista-opciones';
import Boton from '../boton';

const Formulario = (props) => {

    // Definición de useStates
    const [nombre, setNombre] = useState('');
    const [puesto, setPuesto] = useState('');
    const [foto, setFoto] = useState('')
    const [equipo, setEquipo] = useState('')

    const [nombreEquipo, setNombreEquipo] = useState('');
    const [colorEquipo, setColorEquipo] = useState('')

    const manejarEnvio = (e) => {
        e.preventDefault();
        const newID = uuid();
        let datosEnvio = {
            nombre: nombre, 
            puesto: puesto,
            foto: foto,
            equipo: equipo,
            id: newID,
        }
        props.registrarColaborador(datosEnvio)

        // El objeto se podría definir igual como: datosEnvio {nombre, puesto, foto, equipo}
        // de forma más eficiente.JS interpreta que el valor y se llaman igual (Más no son iguales)
    };

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault();
        let datosEnvio = {
            titulo: nombreEquipo,
            colorPrimario :colorEquipo,
        }

        props.nuevoEquipo(datosEnvio);
    }

    return (<section className='formulario'>

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo
                titulo='Nombre' 
                placeholder='Inserte nombre' 
                required 
                valor={nombre} 
                setValor={setNombre} 
            />
            <Campo
                titulo='Puesto' 
                placeholder='Inserte puesto' 
                required 
                valor={puesto} 
                setValor={setPuesto}  
                />
            <Campo
                titulo='Foto' 
                placeholder='Inserte link de foto' 
                required 
                valor={foto} 
                setValor={setFoto}  
            />
            <ListaOpciones 
                titulo='Equipo' 
                required
                valor={equipo}
                setValor = {setEquipo}
                equipos={props.equipos}
            />
            <Boton>Crear</Boton>
            {/*
                Tambien podria usarse <Boton title = 'Crear' /> y leer props.title
            */}
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo
                titulo='Nombre Equipo' 
                placeholder='Ingresar el nombre del equipo' 
                required 
                valor={nombreEquipo} 
                setValor={setNombreEquipo} 
            />
            <Campo
                titulo='Color' 
                placeholder='Ingrese el color en formato hexadecimal' 
                required 
                valor={colorEquipo} 
                setValor={setColorEquipo}  
                type='color'
            />
            <Boton>Registrar Equipo</Boton>
        </form>

    </section>
    );
};

export default Formulario;
