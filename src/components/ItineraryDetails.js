import React from "react";
import itinerary from "../assets/itinerary.jpeg";
import "../components/itinerarydetails.css";
import { NavLink } from "react-router-dom";
import NewLogin from "./NewLogin";

const ItineraryDetails = () => {
  return (
    <div>
   
      <div className="container">
      
        <div className="row">
          <div className="col-md-8">
          <NavLink to="/" className="btn btn-secondary">Go Back</NavLink>
            <h2>Itinerary</h2>
            <div className="d-flex align-items-start flex-wrap mt-1">
              <div className="col-lg-1 col-md-12">
                <p className="p-text-2 text-brown-shade mb-0 trips_dates">
                  Day 1
                </p>
              </div>
              <div className="col-lg-11 col-md-12">
                <p className="p-text-2 mb-0 ">
                  <b>Drive from Rishikesh to Karchi</b>
                </p>
                <div className="p-text-small text-dark mb-2">
                  <p>
                    <strong>Drive distance: </strong>255 km |{" "}
                    <strong>Drive Duration:</strong> 9-10 hours |{" "}
                    <strong>Pick up point for Indiahikes trekkers: </strong>
                    <a href="https://goo.gl/maps/vLg5KtNwTt6x1fU66">
                      Live Free Hostel, Rishikesh
                    </a>{" "}
                    | <strong>Pick up Time: </strong>5.15 am |{" "}
                    <strong>Location of Indiahikes basecamp:</strong>&nbsp;
                    <a
                      href="https://goo.gl/maps/oESPHL7fusmaV9Qc7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Karchi
                    </a>
                  </p>
                </div>
                <div className="p-text-4">
                  <p>
                    <em>
                      Transport will be arranged at{" "}
                      <strong>5.15 AM sharp</strong>.{" "}
                    </em>
                    The<em> </em>costs Rs 8000 per vehicle (5-6 seater) and Rs
                    12,000 per Tempo Traveller (12 seater)for the journey from
                    Rishikesh to Karchi. The return journey will cost Rs 8,000
                    for the 5-6 seater and Rs 12,000 per Tempo Traveller to
                    Rishikesh.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-start flex-wrap mt-1">
              <div className="col-lg-1 col-md-12">
                <p className="p-text-2 text-brown-shade mb-0 trips_dates">
                  Day 2
                </p>
              </div>
              <div className="col-lg-11 col-md-12">
                <p className="p-text-2 mb-0">
                  <b>Trek from Karchi to Akhrotghetta</b>
                </p>
                <div className="p-text-small text-dark mb-2">
                  <p>
                    <strong>Trek Distance: </strong>2.75 km |{" "}
                    <strong>Duration:</strong> 5-6 hours |{" "}
                    <strong>Altitude gain: </strong>7,785 ft to 10,035 ft
                  </p>
                </div>
                <div className="p-text-4"></div>
              </div>
            </div>
            <div className="d-flex align-items-start flex-wrap mt-1">
              <div className="col-lg-1 col-md-12">
                <p className="p-text-2 text-brown-shade mb-0 trips_dates">
                  Day 2
                </p>
              </div>
              <div className="col-lg-11 col-md-12">
                <p className="p-text-2 mb-0">
                  <b>Trek from Karchi to Akhrotghetta</b>
                </p>
                <div className="p-text-small text-dark mb-2">
                  <p>
                    <strong>Trek Distance: </strong>2.75 km |{" "}
                    <strong>Duration:</strong> 5-6 hours |{" "}
                    <strong>Altitude gain: </strong>7,785 ft to 10,035 ft
                  </p>
                </div>
                <div className="p-text-4"></div>
              </div>
            </div>
            <div className="d-flex align-items-start flex-wrap mt-1">
              <div className="col-lg-1 col-md-12">
                <p className="p-text-2 text-brown-shade mb-0 trips_dates">
                  Day 4
                </p>
              </div>
              <div className="col-lg-11 col-md-12">
                <p className="p-text-2 mb-0">
                  <b>Trek from Khullara to Tali via Kuari Pass</b>
                </p>
                <div className="p-text-small text-dark mb-2">
                  <p>
                    <strong>Trek Distance:</strong> 7.65 km |{" "}
                    <strong>Trek Duration:</strong> 8-9 hours |{" "}
                    <strong>Altitude gain and loss: </strong>11,014 ft to 11,053
                    ft via 12,516 ft
                  </p>
                </div>
                <div className="p-text-4"></div>
              </div>
            </div>
            <div className="d-flex align-items-start flex-wrap mt-1">
              <div className="col-lg-1 col-md-12">
                <p className="p-text-2 text-brown-shade mb-0 trips_dates">
                  Day 5
                </p>
              </div>
              <div className="col-lg-11 col-md-12">
                <p className="p-text-2 mb-0">
                  <b>Trek from Tali to Auli.</b>
                </p>
                <div className="p-text-small text-dark mb-2">
                  <p>
                    <strong>Trek Distance: </strong>8.10 km |{" "}
                    <strong>Trek Duration: </strong>7-8 hours |{" "}
                    <strong>Altitude loss: </strong>11,053 ft to 8,546 ft
                  </p>
                </div>
                <div className="p-text-4"></div>
              </div>
            </div>
            <div className="d-flex align-items-start flex-wrap mt-1">
              <div className="col-lg-1 col-md-12">
                <p className="p-text-2 text-brown-shade mb-0 trips_dates">
                  Day 6
                </p>
              </div>
              <div className="col-lg-11 col-md-12">
                <p className="p-text-2 mb-0">
                  <b>Depart from Auli and reach Rishikesh</b>
                </p>
                <div className="p-text-small text-dark mb-2">
                  <p>
                    <strong>Drive distance:</strong> 263 km |
                    <strong> Drive Duration:</strong> 9-10 hours |{" "}
                    <strong>Drop off point:</strong>{" "}
                    <a href="https://goo.gl/maps/vLg5KtNwTt6x1fU66">
                      Live Free Hostel, Rishikesh
                    </a>{" "}
                    | <strong>Drop off Time: </strong>7 pm
                  </p>
                </div>
                <div className="p-text-4">
                  <p>
                    <em>
                      You are expected to be back in Rishikesh by 7.00 pm. This
                      transport cost has to be borne by trekkers and paid
                      directly to the driver. Cost of the cab – Rs .8000 per
                      vehicle, shared among 5-6 trekkers and Rs 12,000 for a
                      Tempo Traveler
                    </em>
                  </p>
                  <p>
                    <em>
                      <strong>Please note: </strong>The distance between
                      campsites may vary by 100 meters depending the weather
                      conditions and the route you take. The altitude may also
                      vary by 100 feet for similar reasons.
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-4"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              listStyle: "none",
            }}
          >
            {/* <img
              src="https://images.prismic.io/indiahike/0ee41b7d-4371-4376-ad97-976b4bdd6d59_Indiahikes_Kuari-Pass-Trek-Map.jpg?auto=compress,format"
              alt="img"
            /> */}

            <ul className="butoon">
              <li>
                <img
                  src={itinerary}
                  alt="img"
                  style={{ width: "100%"}}
                />
              </li>
              <li>
                {/* <button type="button" className="btn btn-tertiary">
                  Book Now
                </button> */}
                <button
            type="button"
            class="btn view btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
          >
            Book Now
          </button>

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
                <div class="modal-body"> <NewLogin/> </div>
              </div>
            </div>
          </div>

              </li>
              <li>
                <button type="button" className="btn btn-tertiary">
                  Contact Us
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-tertiary">
                  T & C
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;
