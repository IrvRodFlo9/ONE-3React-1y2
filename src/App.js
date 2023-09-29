
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/header/header.jsx';
import Formulario from './componentes/form/formulario.jsx';
import MiOrg from './componentes/miOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      nombre: 'Irving Rodríguez',
      puesto: 'Desarrollador Jr',
      foto: 'https://www.github.com/irvrodflo9.png',
      equipo: 'Programación',
      fav: true,
    },
    {
      id: uuid(),
      nombre: 'Christian Velasco',
      puesto: 'Desarrollador Sr',
      foto: 'https://github.com/christianpva.png',
      equipo: 'Front End',
      fav: false,
    },
    {
      id: uuid(),
      nombre: 'Jeanmarie Quijada',
      puesto: 'Diseñadora Gráfica',
      foto: 'https://github.com/JeanmarieAluraLatam.png',
      equipo: 'UX y Diseño',
      fav: false,
    },
    {
      id: uuid(),
      nombre: 'José Dario',
      puesto: 'Desarrollador Full Stack',
      foto: 'https://github.com/JoseDarioGonzalezCha.png',
      equipo: 'Programación',
      fav: false,
    },
  ]);
  // CUIDADO   Se inicia con estado de arreglo vacío para que si se usa el método .map, no se rompa el código

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario : '#57C278',
      colorSecundario: '#D9F7E9',
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario : '#82CFFA',
      colorSecundario: '#E8F8FF',
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario : '#A6D157',
      colorSecundario: '#F0F8E2',
    },
    {
      id: uuid(),
      titulo: 'DevOps',
      colorPrimario : '#E06B69',
      colorSecundario: '#FDE7E8',
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario : '#DB6EBF',
      colorSecundario: '#FAE9F5',
    },
    {
      id: uuid(),
      titulo: 'Móvil',
      colorPrimario : '#FFBA05',
      colorSecundario: '#FFF5D9',
    },
    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorPrimario : '#FF8A29',
      colorSecundario: '#FFEEDF',
    },
  ])

  // Operadores ternarios
  // condicion ? seMuestra : noMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador]);
    // SPREAD operador: permite copiar un arreglo y agregar un nuevo elemento
    //                  se copia el arreglo colaboradores y se añade colaborador 
    //        - Es similar a un .push

  };

  const eliminarColaborador = (id) => {
    // El método filter permite filtrar a los colaboradores que cumplan la condición especificada
    const actualizarColaboradores = colaboradores.filter((colaborador) => colaborador.id != id);
    setColaboradores(actualizarColaboradores)
  };

  const crearEquipo = (nuevoEquipo) => {

    /*   Forma alternativa de crear equipo nuevo
    const newID = uuid();
    nuevoEquipo['id'] =newID; 
    const equiposActualizados = equipos;
    equiposActualizados.push(nuevoEquipo);
    console.log(equiposActualizados);
    setEquipos(equiposActualizados);
    */ 
    setEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  };

  const setColorBG = (new_color, equipo_id) => { 

    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === equipo_id){
        equipo.colorPrimario = new_color;
      }

      return equipo;
      }
    );
    setEquipos(equiposActualizados)
  };

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      };
      return colaborador;
    }
    );
    setColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header/>
      {
        mostrarFormulario ? <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          nuevoEquipo={crearEquipo}
          /> : <></>
      } 
      {/* También puede usarse  mostrarFormulario === true ? <Formulario /> : <div></div> 
          pues, mostrarFormulario === true es igual que solo escribir la variable
          e igual que, el div vació puede funcionar como una nada, pero igual afecta componetes como flexbox 
          La forma más eficiente es: mostrarFormulario && <Formulario />, si no se cumple no pasa nada*/}
      <MiOrg cambiarMostrarForm={cambiarMostrar} />
      {
        equipos.map((equipo, index) => {
            /* Tambien se podría usar como key={index}, pero el titulo es más descriptivo*/
            return <Equipo 
                      datosEquipo={equipo} 
                      key={equipo.titulo}
                      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                      eliminarColaborador={eliminarColaborador}
                      setColorBG={setColorBG}
                      giveLike = {like}
                    /> 
        })
        /* Para tener más eficiencia en el método .map, se puede dejar a la ArrowF en una línea y omitir index
            equipos.map((equipo) => <Equipo datosEquipo={equipo} key={equipo.titulo} />*/ 
      }
      <Footer />
    </div>
  );
}

export default App;
