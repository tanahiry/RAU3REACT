import React, { useState } from 'react';

// Se define una interfaz TaskFormProps que describe las propiedades que este componente espera recibir.
// En este caso, espera una función onAdd que toma un parámetro de tipo string y no devuelve nada.
interface TaskFormProps {
  onAdd: (title: string) => void;
}
  // Se declara un componente funcional TaskForm que toma las props definidas en TaskFormProps.
  // En este caso, se desestructura la prop onAdd de las props pasadas al componente.

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
// Se utiliza el hook useState para declarar una variable de estado 'title' y una función 'setTitle'
// para manejar el estado del título de la tarea. Se inicializa con un valor vacío ('').

  const [title, setTitle] = useState('');
// Se define la función handleSubmit que se ejecuta al enviar el formulario.
// Evita el comportamiento por defecto del formulario con e.preventDefault().
// Verifica si el título no está vacío, llama a la función onAdd con el título y luego limpia el estado del título.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== '') {
      onAdd(title);
      setTitle('');
    }
  };
// Se definen estilos en objetos para el input y el botón del formulario.
  const inputStyle = {
    padding: '8px',
    fontSize: '16px',
    border: '2px solid #0077cc',
    borderRadius: '4px',
    marginRight: '8px',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#0077cc',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

// Se devuelve la estructura del formulario. Al enviar el formulario, se ejecuta la función handleSubmit.
// El input controlado muestra el valor del título y actualiza el estado con cada cambio.
// El botón tiene un estilo definido y ejecuta la función de enviar el formulario al hacer clic.

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agrega una tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
