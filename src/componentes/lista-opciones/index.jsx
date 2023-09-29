
import './lista-opciones.css';

const ListaOpciones = (props) =>{

    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    }

    return <div className='lista-opciones'>
        <label>{props.titulo}</label>
        <select required={props.required} value={props.valor} onChange={manejarCambio} >

            <option value='' disabled defaultValue='' hidden >Selecionar un equipo</option>
            {/* Permite que se encuentre como "placeholder" Seleccionar un equipo, pero previene
                que el usuario seleccione esa opción (hidden y disabled) */}

            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>
                     {equipo}
                </option>
            } ) } 
            { /*    OTRA FORMA DEL MAP -basado en funcionamiento de arrow functions
                {equipos.map((equipo, index) => <option key={index}>{equipo}</option>}
                 - Solo funciona si la arrow function hace solo una acción/indicacion */}

        </select>
    </div>
};

export default ListaOpciones