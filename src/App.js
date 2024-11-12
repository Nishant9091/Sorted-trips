import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import TripDetails from "./components/tripdetails";
import ItineraryDetails from "./components/ItineraryDetails";
import TravelBookForm from "./components/TravelBookForm";
import NewLogin from "./components/NewLogin";
import Calendar from "./components/CalendarComponent";
import ItenaryTabDetails from "./components/ItenaryTabDetails";
import NumPersonsSection from "./components/NumPersonSection";

export default function App() {
  return (
    <>
      <Routes>
    
        <Route index path="/" element={<Home />} id="home" />
       
        <Route path="trip-details" element={<TripDetails />} />

        <Route path="calender" element={<Calendar />} />
        <Route path="itinerary-details" element={<ItineraryDetails />} />
        <Route path="iteneararyTab">
          <Route index element={<ItenaryTabDetails />} />
          <Route path="TravelBookForm">
            <Route index element={<TravelBookForm />} />
            <Route path="NumPersonSection" element={<NumPersonsSection />} />
          </Route>
        </Route>
        <Route path="book-now" element={<NewLogin />} />
      </Routes>
    </>
  );
}
