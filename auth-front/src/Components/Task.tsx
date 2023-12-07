import React from 'react';
import TaskInterface from '../interfaces/TaskInterface';
// Este componente espera recibir una tarea (task) que cumpla con la estructura definida en TaskInterface, y una función onComplete que reciba un número (id) y no devuelva ningún valor (void).
interface TaskProps {
  task: TaskInterface;
  onComplete: (id: number) => void;
}

//Se declara el componente Task como una función de React que recibe las propiedades especificadas en TaskProps desestructuradas en { task, onComplete }.
const Task: React.FC<TaskProps> = ({ task, onComplete }) => {
  //Se define una función handleComplete que se ejecutará cuando se marque la tarea como completada. Esta función invoca la función onComplete pasándole el id de la tarea.
  const handleComplete = () => {
    onComplete(task.id);
  };
//El componente devuelve un fragmento de JSX que representa visualmente una tarea. Incluye un checkbox que refleja si la tarea está completada o no, según el valor de task.completed, y cuando se produce un cambio (onChange), llama a la función handleComplete. También muestra el título de la tarea (task.title) dentro de un elemento span.
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleComplete}
      />
      <span>{task.title}</span>
    </div>
  );
};

export default Task;
