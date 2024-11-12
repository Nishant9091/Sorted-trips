import "./tripdetails.css";
import { NavLink, Outlet, Link } from "react-router-dom"; // Import the Link component

import NewLogin from "./NewLogin";
// import { useState } from "react";

function TripDetails() {
  // const [showItinerary, setShowItinerary] = useState(false); // State to control showing/hiding itinerary

  // const toggleItinerary = () => {
  //   setShowItinerary(!showItinerary);
  // };
  const gtABBK = {
    fontFamily: "nexaBold",
    margin: "3rem auto 3rem auto",
    fontSize: "39px",
    color: "#22577a",
    borderBottom: "4px solid #22577a",
    width: "350px",
    padding: "10px",
  };

  return (
    <div style={{ fontFamily: "nexaBold" }}>
      <div>
        <h2 style={gtABBK}>#Upcoming Trips</h2>
      </div>

      <Outlet />
      <div className="container">
        <div className=" trip_plan">
          <div className="trip_plan1">
            <div className="dates">
              <span className="dyt">23</span> <br />
              <span>Jan'23</span>
            </div>
            <div className="title">Meghalaya</div>

            <div className="trips_btn">
              <Link
                to="/iteneararyTab"
                className="btn btn-secondary"
                // Toggle the itinerary visibility
              >
                Know More
              </Link>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className=" trip_plan">
          <div className="trip_plan1">
            <div className="dates">
              <span className="dyt">28</span> <br />
              <span>Feb'23</span>
            </div>
            <div className="title">Indonasia</div>

            <div className="trips_btn">
              <Link
                to="/iteneararyTab"
                className="btn btn-secondary"
                // Toggle the itinerary visibility
              >
                Know More
              </Link>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className=" trip_plan">
          <div className="trip_plan1">
            <div className="dates">
              <span className="dyt">18</span> <br />
              <span>Mar'23</span>
            </div>
            <div className="title">Thailand</div>

            <div className="trips_btn">
              <Link
                to="/iteneararyTab"
                className="btn btn-secondary"
                // Toggle the itinerary visibility
              >
                Know More
              </Link>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className=" trip_plan">
          <div className="trip_plan1">
            <div className="dates">
              <span className="dyt">14</span> <br />
              <span>Apr'23</span>
            </div>
            <div className="title">Hong Kong</div>

            <div className="trips_btn">
              <Link
                to="/iteneararyTab"
                className="btn btn-secondary"
                // Toggle the itinerary visibility
              >
                Know More
              </Link>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        
        <div className=" trip_plan">
          <div className="trip_plan1">
            <div className="dates">
              <span className="dyt">28</span> <br />
              <span>may'23</span>
            </div>
            <div className="title">Malasiya</div>

            <div className="trips_btn">
              <Link
                to="/iteneararyTab"
                className="btn btn-secondary"
                // Toggle the itinerary visibility
              >
                Know More
              </Link>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <NewLogin />
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
}

export default TripDetails;
