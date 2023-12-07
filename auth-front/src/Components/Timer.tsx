import React, { useState } from 'react';
import useTimer from '../Hooks/useTimer';

const Timer: React.FC = () => {
  //Se utiliza useState para crear dos estados: taskName, que almacena el nombre de la tarea actual y se inicializa como una cadena vacía, y tasks, 
  //que se inicializa mediante el hook useTimer para almacenar la lista de tareas y una función addTask para agregar nuevas tareas.
  const [taskName, setTaskName] = useState('');
  const [tasks, addTask] = useTimer();
//handleAddTask es una función que se llama al hacer clic en el botón "Agregar Tarea". Verifica que taskName no esté vacío 
// y luego llama a addTask para agregar la tarea al estado tasks. Luego, reinicia taskName a una cadena vacía.
  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName('');
    }
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const taskItemStyle = {
    borderBottom: '1px solid #ccc',
    marginBottom: '10px',
    paddingBottom: '10px',
  };

  const blueTextStyle = {
    color: '#0047AB', // Azul oscuro
    margin: '5px 0',
  };
//El componente devuelve un bloque de JSX que incluye un formulario con un campo de entrada para el nombre de la tarea y un botón para agregar la tarea. Al hacer clic en el botón, se activa la función handleAddTask.
//También hay una lista (ul) que muestra todas las tareas almacenadas en el estado tasks. Para cada tarea en tasks, se muestra el nombre de la tarea y el tiempo transcurrido.
///Cada tarea se muestra dentro de un elemento de lista (li) con estilos definidos por las variables taskItemStyle y blueTextStyle.
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button style={{ backgroundColor: '#0047AB', color: '#fff', padding: '5px 10px', border: 'none', borderRadius: '3px' }} onClick={handleAddTask}>
          Agregar Tarea
        </button>
      </div>
      <div>
        <ul style={listStyle}>
          {tasks.map((task) => (
            <li key={task.id} style={taskItemStyle}>
              <p style={blueTextStyle}>Tarea: {task.taskName}</p>
              <p style={blueTextStyle}>Tiempo transcurrido: {task.timeElapsed} segundos</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timer;
