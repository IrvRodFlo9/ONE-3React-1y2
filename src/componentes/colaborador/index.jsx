
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './colaborador.css';

const Colaborador = (props) => {

    const {nombre, puesto, foto, equipo, id, fav} = props.datosColaborador;
    const {eliminarColaborador, giveLike} = props;    

    return <section className='card-colaborador'>
        {/* Se usa una arrow function en el evento onClick para evitar el comportamiento por defecto en el cual
            al renderizar el componente se ejecute la función eliminarColaborador */}
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className='eliminar-card'/>
        <div className='card-encabezado' style={{backgroundColor: props.colorPrimario}} >
            <img src={foto} alt={'Foto perfil ' + nombre}></img>
        </div>
        <div className='card-info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>

            {fav === true? <AiFillHeart color='red' onClick={ () => {giveLike(id)}} /> :  <AiOutlineHeart onClick={ () => {giveLike(id)}} />}
           
        </div>
    </section>
};

export default Colaborador