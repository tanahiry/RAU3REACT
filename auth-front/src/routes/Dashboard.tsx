import React, { useEffect, useState } from 'react';
import { useAuth } from "../auth/AuthProvider";
import PortalLayout from "../layout/PortalLayout";
import { API_URL } from "../auth/authConstants";
import ExpensesTracker from '../Components/ExpensesTracker';
import TaskList from '../Components/TaskList';
import TaskForm from '../Components/TaskForm';
import useTaskManager from '../Hooks/useTaskManager';
import Calendar from '../Components/Calendar';
import useCalendar from '../Hooks/useCalendar';
import { EventData } from '../interfaces/CalendarInterfaces';
import Timer from '../Components/Timer';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const Dashboard: React.FC = () => {
  const auth = useAuth();
  const { tasks, addTask, completeTask } = useTaskManager();
  const { events, addEvent } = useCalendar();

  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState("");

  async function getTodos() {
    const accessToken = auth.getAccessToken();
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const json = await response.json();
        setTodos(json);
        console.log(json);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createTodo() {
    if (value.length > 3) {
      try {
        const response = await fetch(`${API_URL}/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.getAccessToken()}`,
          },
          body: JSON.stringify({ title: value }),
        });
        if (response.ok) {
          const todo = (await response.json()) as Todo;
          setTodos([...todos, todo]);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo();
  }

  const handleEventClick = (event: EventData) => {
    // Handle event click
  };

  return (
    <PortalLayout>
      <div className="dashboard">
        <h1>Gestor de organización de {auth.getUser()?.name ?? ""}:</h1>
        <hr/>
        <h3>Calendario</h3>
        <Calendar events={events} onEventClick={handleEventClick} />
        <hr/>
        <h3>Gastos Diarios</h3>
        <ExpensesTracker />
        <hr/>
        <h3>Tareas</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="New task to do..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onComplete={completeTask} />
        <hr/>
        <h3>Seguimiento del tiempo</h3>
        <Timer/>
        <hr/>
      </div>
    </PortalLayout>
  );
};

export default Dashboard;