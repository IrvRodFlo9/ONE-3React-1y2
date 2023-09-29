
import hexToRgba from 'hex-to-rgba';
import './equipo.css';
import Colaborador from '../colaborador';

const Equipo = (props) => {

    // DESTRUCTURACIÓN   
    //      const {titulo, colorPrimario, colorSecundario} = props.datosEquipo
    //  Permite extraer esa información del objeto sin repetir a cada rato: props.datosEquipo
    //  Ese código sería análogo a:
    //      const titulo = props.datosEquipo.titulo;          con todas las propiedades

    const colorTeam = props.datosEquipo.colorPrimario;
    const estiloBG = {backgroundColor: hexToRgba(colorTeam  , '0.4')}
    // Así se puede hacer un poco más limpio el código de estilos, se podría hacer igual con el Titulo (h3)

    const {colaboradores, eliminarColaborador, setColorBG, giveLike} = props

    // CUIDADO   Poner <> al inicio y </> al final previene errores en el script

    return <>
    {colaboradores.length > 0 && <section className='equipo_contenedor' style={estiloBG}>
            <input 
                type='color'
                value={colorTeam}
                onChange={(e)=> setColorBG(e.target.value, props.datosEquipo.id)}
            />
            <h3 style={{borderColor: props.datosEquipo.colorPrimario}} >{props.datosEquipo.titulo}</h3>
            <div className='equipo_interno'>
                {colaboradores.map((colaborador, index) => <Colaborador 
                    datosColaborador={colaborador} 
                    key={colaborador.id} 
                    colorPrimario={props.datosEquipo.colorPrimario} 
                    eliminarColaborador={eliminarColaborador} 
                    giveLike={giveLike}
                    />)
                }
            </div>      
        </section>
    }</>
};

export default Equipo