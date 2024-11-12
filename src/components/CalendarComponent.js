import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import EventsData from "./EventsData"; // Assuming you have an array of events data
import "./CustomCalendar.css";
import ItineraryDetails from "./ItineraryDetails";
import { NavLink } from "react-router-dom";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState(EventsData);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="Calendar">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={eventClick}
      />
      {selectedEvent && (
        <div className="event-details">
          <h3>{selectedEvent.title}</h3>
        
          <NavLink to="/itinerary-details"  className="btn view btn-primary">View</NavLink>

         

          <p>
            {moment(selectedEvent.start).format("MMMM Do, YYYY")} -{" "}
            {moment(selectedEvent.end).format("MMMM Do, YYYY")}
          </p>
          <p>{selectedEvent.description}</p>
          <button onClick={closeEventDetails}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
