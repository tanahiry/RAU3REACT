// Importa React desde la librería 'react'
import React from 'react';

// Importa la interfaz 'TaskInterface' desde el archivo '../interfaces/TaskInterface'
import TaskInterface from '../interfaces/TaskInterface';

// Importa el componente 'Task' desde el archivo './Task'
import Task from './Task';

// Define una interfaz 'TaskListProps' que especifica las propiedades esperadas por el componente TaskList
interface TaskListProps {
  tasks: TaskInterface[]; // Un arreglo de tareas que sigue la estructura definida por TaskInterface
  onComplete: (id: number) => void; // Una función que toma un número (id) y no retorna nada (void)
}

// Define el componente TaskList como una función de React que recibe las props de TaskListProps
const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete }) => {
  return (
    <div>
      {/* Mapea sobre el arreglo 'tasks' y renderiza un componente 'Task' para cada elemento */}
      {tasks.map(task => (
        <Task key={task.id} task={task} onComplete={onComplete} />
      ))}
    </div>
  );
};

// Exporta el componente TaskList para que pueda ser usado en otros archivos
export default TaskList;
