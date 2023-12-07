//Importar lo necesario apra la ejecución
import { useState, useEffect } from 'react';
import { TimerData } from '../interfaces/TimerInterface';
//Declara un hook personalizado y este devuelve: un array de TimerData y una función para agregar tareas al temporizador.
const useTimer = (): [TimerData[], (taskName: string) => void] => {
  //Crear una variable de estado y la funcion para actualizar la tarea
  const [tasks, setTasks] = useState<TimerData[]>([]);
// Crea un nuevo objeto TimerData con un ID basado en la fecha actual, el nombre de la tarea y un tiempo transcurrido inicial de cero.
//Utiliza setTasks para actualizar el estado tasks añadiendo la nueva tarea al array existente.
  const addTask = (taskName: string) => {
    const newTask: TimerData = {
      id: Date.now(),
      taskName,
      timeElapsed: 0,
    };
    setTasks([...tasks, newTask]);
  };
//Crea un intervalo que actualiza el tiempo transcurrido de las tareas cada segundo si hay tareas presentes en el estado tasks.
//Cuando el componente se desmonta o tasks cambia, se limpia el intervalo para evitar fugas de memoria.
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (tasks.length > 0) {
      interval = setInterval(() => {
        setTasks((prevTasks) =>
          prevTasks.map((task) => ({
            ...task,
            timeElapsed: task.timeElapsed + 1,
          }))
        );
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [tasks]);

  return [tasks, addTask];
};

export default useTimer;
