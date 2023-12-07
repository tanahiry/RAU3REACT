import React from 'react';
import { CalendarProps, EventData } from '../interfaces/CalendarInterfaces';
import './Calendar.css'; // Importar el archivo CSS

const Calendar: React.FC<CalendarProps> = ({ events, onEventClick }) => {
  const groupEventsByDate = () => {
    const groupedEvents: { [key: string]: EventData[] } = {};

    events.forEach((event) => {
      const dateKey = event.date.toISOString().split('T')[0]; // Agrupar eventos por fecha

      if (!groupedEvents[dateKey]) {
        groupedEvents[dateKey] = [];
      }

      groupedEvents[dateKey].push(event);
    });

    return groupedEvents;
  };

  const groupedEvents = groupEventsByDate();

  const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day) => (
      <div key={day} className="day-of-week">{day}</div>
    ));
  };
  //Aquí se define una función groupEventsByDate que agrupa los eventos por fecha. Se inicializa un objeto vacío para almacenar los eventos agrupados por fecha y se recorre la lista de eventos para organizarlos por día.
  //groupedEvents guarda los eventos agrupados por fecha. daysOfWeek contiene los nombres de los días de la semana en un arreglo. renderDaysOfWeek genera elementos <div> para mostrar los nombres de los días de la semana.
  const handleEventClick = (event: EventData) => {
    // Manejar el clic en el evento
    console.log('Evento clickeado:', event); // Ejemplo: loguear el evento en la consola
  };
  //renderCalendar es una función que genera el contenido del calendario. Utiliza bucles para generar los días de la semana y sus eventos asociados en el formato de calendario.
  const renderCalendar = () => {
    const days: JSX.Element[] = [];
    let currentWeek: JSX.Element[] = [];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Obtener el primer día del mes
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    // Obtener el día de la semana para el primer día del mes
    const firstDayOfWeek = firstDayOfMonth.getDay();
    let dayCount = 1 - firstDayOfWeek;

    while (dayCount <= 31) { // Se supone que no hay más de 31 días en un mes
      for (let i = 0; i < 7; i++) {
        const tempDate = new Date(currentYear, currentMonth, dayCount);
        const dateKey = tempDate.toISOString().split('T')[0];

        const dayEvents = groupedEvents[dateKey] || [];

        currentWeek.push(
          <div key={dateKey} className="calendar-day">
            {dayCount > 0 && dayCount <= 31 ? dayCount : ''}
            <div className="events-container">
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  className="event-box"
                  onClick={() => onEventClick(event)}
                >
                  <p>{event.title}</p>
                </div>
              ))}
            </div>
          </div>
        );

        dayCount++;
      }

      days.push(
        <div key={`week-${dayCount}`} className="week">
          {currentWeek}
        </div>
      );
      currentWeek = [];
    }

    return days;
  };

  return (
    <div className="calendar-grid">
      <div className="month-header" style={{ color: 'black' }}>{new Date().toLocaleDateString('default', { month: 'long' })}</div>
      <div className="days-of-week" style={{ backgroundColor: 'lightblue' }}>{renderDaysOfWeek()}</div>
      <div className="calendar" style={{ border: '1px solid blue' }}>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
