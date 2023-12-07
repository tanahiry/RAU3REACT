// Importa el hook 'useState' desde React, que permite manejar el estado en componentes funcionales.
import { useState } from 'react';

// Importa la interfaz 'TaskInterface' desde el archivo '../interfaces/TaskInterface'.
import TaskInterface from '../interfaces/TaskInterface';

// Declara un hook personalizado 'useTaskManager'.
const useTaskManager = () => {
  // Utiliza el hook 'useState' para inicializar el estado 'tasks' como un array vacío de 'TaskInterface'.
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  // Define una función 'addTask' que recibe un título (string) como argumento.
  const addTask = (title: string) => {
    // Crea un nuevo objeto de tipo 'TaskInterface' con un ID generado a partir del tiempo actual, el título proporcionado y 'completed' inicializado como 'false'.
    const newTask: TaskInterface = {
      id: Date.now(),
      title,
      completed: false,
    };
    // Actualiza el estado 'tasks' agregando el nuevo objeto 'newTask' al array existente utilizando spread operator.
    setTasks([...tasks, newTask]);
  };

  // Define una función 'completeTask' que recibe un ID (número) como argumento.
  const completeTask = (id: number) => {
    // Crea un nuevo array 'updatedTasks' utilizando 'map' para iterar sobre 'tasks' y actualizar la tarea con el ID correspondiente marcándola como completada (completada = true).
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    );
    // Actualiza el estado 'tasks' con el nuevo array de tareas actualizadas ('updatedTasks').
    setTasks(updatedTasks);
  };

  // Retorna un objeto que contiene las propiedades 'tasks', 'addTask' y 'completeTask'.
  return {
    tasks, // Propiedad que contiene el array de tareas.
    addTask, // Función para agregar una nueva tarea.
    completeTask, // Función para marcar una tarea como completada.
  };
};

// Exporta el hook 'useTaskManager' por defecto para que pueda ser utilizado en otros componentes.
export default useTaskManager;

