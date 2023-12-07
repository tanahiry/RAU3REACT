//Definir estructura del elemento que se usara 
export interface EventData {
    id: number;
    title: string;
    date: Date;
  }
  
  export interface CalendarProps {
    events: EventData[];
    onEventClick: (event: EventData) => void;
  }
  
  export interface DayProps {
    date: Date;
    events: EventData[];
    onEventClick: (event: EventData) => void;
  }
  