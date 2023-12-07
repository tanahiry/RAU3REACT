import React from 'react';
import ExpensesTracker from '../Components/ExpensesTracker';
import TaskList from '../Components/TaskList';
import TaskForm from '../Components/TaskForm';
import useTaskManager from '../Hooks/useTaskManager';
import Calendar from '../Components/Calendar';
import useCalendar from '../Hooks/useCalendar';
import { EventData } from '../interfaces/CalendarInterfaces';
import Timer from '../Components/Timer';


const Organiza: React.FC = () => {
  const { tasks, addTask, completeTask } = useTaskManager();
  //addevent
  const { events } = useCalendar();   
  const handleEventClick = (event: EventData) => {
    console.log(event);

    // Handle event click
  };
  return (
    <>
      <h1>Plataforma de Organización</h1>
      <hr/>
      <h3>Calendario</h3>
      <Calendar events={events} onEventClick={handleEventClick} />
      <hr/>
      <h3>Gastos Diarios</h3>
      <ExpensesTracker />
      <hr/>
      <h3>Tareas</h3>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onComplete={completeTask} />
      <hr/>
      <h3>Seguimiento del tiempo</h3>
      <Timer/>
      <hr/>
      return (
  <div>
    <Organiza />
  </div>
      );
  </>
  );
}

export default Organiza;

