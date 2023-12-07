import { useState } from 'react';
import { EventData } from '../interfaces/CalendarInterfaces';

const useCalendar = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  const addEvent = (newEvent: EventData) => {
    setEvents([...events, newEvent]);
  };

  return {
    events,
    addEvent,
  };
};

export default useCalendar;
