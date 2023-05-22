import React, {useRef, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button } from '@chakra-ui/react';

function Calendar() {

    const calendarRef = useRef(null);

    const handleAddEvent = () => {
        if (calendarRef.current) {
          const calendarApi = calendarRef.current.getApi();
          if (calendarApi) {
            const event = {
              title: 'New Event',
              start: '2023-05-25T09:00:00',
              end: '2023-05-25T10:30:00',
            };
            calendarApi.addEvent(event);
          }
        }
      };

      useEffect(() => {
        if (calendarRef.current) {
          const calendarApi = calendarRef.current.getApi();
          if (calendarApi) {
            const event = {
              title: 'New Event',
              start: '2023-05-25T09:00:00',
              end: '2023-05-25T10:30:00',
            };
            calendarApi.addEvent(event);
          }
        }
      }, []);
  return (
    <>
    <FullCalendar
    ref={calendarRef}
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    initialView={"dayGridMonth"}
    headerToolbar= {{
        start: "today prev,next",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
    }}
    />
           

    <Button onClick={handleAddEvent}>Add Event</Button>

    </>
  )
}

export default Calendar;