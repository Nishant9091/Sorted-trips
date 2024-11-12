import "./BigTrips.css";
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/BigTrips/Trip1.jpg";
import Trip2 from "../assets/BigTrips/Trip2.jpg";
import Trip3 from "../assets/BigTrips/Trip3.jpg";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavLink } from "react-router-dom";
import Calendar from "./CalendarComponent";
import TripDetails from "./tripdetails";

//cards BigTrips
function BigTrips() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <h2
        class="sc-532c7acc-12 gtbLNO"
        style={{
          fontSize: "39px",
          color: "rgb(99 167 205)",
          borderBottom: "4px solid rgb(99 167 205)",
          width:" 291px",
          margin: "auto",
          paddingTop: "3rem",
        }}
      >
        #SomeWhere
      </h2>
      {/* <div className="cards">
        <div className="cardpro">
          <img src={Trip1} alt={"img_1"} style={{ height: "48%" }} />

          <h4 className="head">Bali Land Package Only </h4>
          <div className="day">
            <div className="days">
              <i class="fa-solid fa-clock"></i>
              6N/7D
            </div>
            <div className="Place">
              <i class="fa-solid fa-location-dot"></i>
              Denpasar- Denpasar
            </div>
          </div>
          <div className="Date">
          <i
              className="fa fa-calendar"
              aria-hidden="true"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            ><button>01/01/2023</button></i>
          </div>
          <div className="explore">
            <div className="Price">
              ₹44,999/-<span>Onwards</span>
            </div>
            <NavLink to="trip-details" className="exbtn btn-dark">
              Explore
            </NavLink>
          </div>
        </div>

        <div className="cardpro">
          <img src={Trip2} alt={"img_1"} style={{ height: "48%" }} />
          <h4 className="head">Bali Land Package Only </h4>
          <div className="day">
            <div className="days">
              <i class="fa-solid fa-clock"></i>
              6N/7D
            </div>
            <div className="Place">
              <i class="fa-solid fa-location-dot"></i>
              Denpasar- Denpasar
            </div>
          </div>
          <div className="Date">
          <i
              className="fa fa-calendar"
              aria-hidden="true"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            ><button>01/01/2023</button></i>
          </div>
          <div className="explore">
            <div className="Price">
              ₹44,999/-<span>Onwards</span>
            </div>
            <NavLink to="trip-details" className="exbtn btn-dark">
              Explore
            </NavLink>
          </div>
        </div>

        <div className="cardpro">
          <img src={Trip3} alt={"img_1"} style={{ height: "48%" }} />
          <h4 className="head">Bali Land Package Only </h4>
          <div className="day">
            <div className="days">
              <i class="fa-solid fa-clock"></i>
              6N/7D
            </div>
            <div className="Place">
              <i class="fa-solid fa-location-dot"></i>
              Denpasar- Denpasar
            </div>
          </div>
          <div className="Date">
            <i
              className="fa fa-calendar"
              aria-hidden="true"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            ><button>01/01/2023</button></i>
          </div>

          <div className="explore">
            <div className="Price">
              ₹44,999/-<span>Onwards</span>
            </div>
            <NavLink  to="/trip-details" className="exbtn btn-dark">
              Explore
            </NavLink>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body Calendar">
                <TripDetails />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Calendar/>
    </>
  );
}

export default BigTrips;

