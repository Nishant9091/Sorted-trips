import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ItenaryTabDetails.css";
import Image1 from "../assets/img.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image2 from "../assets/vietnam_desktop.jpg";
import TravelBookForm from "./TravelBookForm";

const ItenaryTabDetails = () => {
  const [activeTab, setActiveTab] = useState("one"); // Set the default active tab

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const singlePopularTour = {
    // padding: "5px",
    background: "#ffffff none repeat scroll 0 0",
    boxShadow: "-1px 3px 10px 0 rgba(0, 0, 0, 0.06)",
    marginTop: "30px",
    height: "100%",
    position: "relative",
    top: "1rem",
  };
  const popularImage = {
    background: "#111 none repeat scroll 0 0",
    display: "block",
    maxWidth: "100%",
    WebkitPerspective: "1200px",
    perspective: "1200px",
    WebkitTransform: "translate3d(0px, 0px, 300px)",
    transform: "translate3d(0px, 0px, 300px)",
    transition:
      "opacity 0.35s ease 0s, transform 0.35s ease 0s, WebkitTransform 0.35s ease 0s",
  };
  const popularImg1 = {
    top: "-8.7rem",
    position: "absolute",
    background: "#111 none repeat scroll 0 0",
    display: "block",
    width: "100%",
    overflow: "hidden",
    // WebkitTransform: "scale(1.2)",
    // transform: "scale(1.2)",
    WebkitTransitionDuration: "400ms",
    transitionDuration: "400ms",
    WebkitTransitionTimingFunction: "ease-out",
    transitionTimingFunction: "ease-out",
  };
  const tourDes = {
    marginTop: "11rem",
    color: "#111",
    fontFamily: "'Ubuntu', sans-serif",
    fontWeight: 500,
    fontSize: "20px",
    textTransform: "capitalize",
    letterSpacing: "0px",
    display: "inline-block",
  };
  const tourdesBtn = {
    // padding: "15px",
    borderTop: "1px solid #eee",
    display: "-webkit-box",
    display: "-ms-flexbox",
    display: "flex",
    //   WebkitBoxPack: "center",
    msFlexLinePack: "center",
    alignContent: "center",
    //   WebkitBoxAlign: "center",
    msFlexAlign: "center",
    alignItems: "center",
  };
  const enquirNow = {
    display: "inline-block",
    padding: "10px 20px",
    background: "#ff6d34 none repeat scroll 0 0",
    color: "#fff",
    borderRadius: "25px",
    textTransform: "capitalize",
    fontWeight: 600,
  };
  const textStyle = {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "16px",
  };
  return (
    <>
      <Navbar />
      <div className="img2">
        <img src={Image2} alt="img2" />
        <div
          className="container"
          style={{
            flexDirection: "row",
            display: "flex",
            /* align-items: center; */
            /* justify-content: center; */
            marginTop: "3rem",
          }}
        >
          <div className="col-md-8">
            <div className="tabbing tabbing-box mb-40">
              <ul className="nav nav-tabs" id="carTab" role="tablist">
                <li>
                  <div style={{ margin: "11px" }}>
                    <NavLink
                      to="/"
                      className="bton"
                      style={{
                        color: "black",
                        padding: "10px 20px 10px 20px;",
                      }}
                    >
                      <i
                        class="fa fa-arrow-left"
                        aria-hidden="true"
                        style={{ marginYTop: "1rem" }}
                      ></i>
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "one" ? "active show" : ""
                    }`}
                    id="one-tab"
                    data-toggle="tab"
                    href="#one"
                    role="tab"
                    aria-controls="one"
                    aria-selected={activeTab === "one"}
                    onClick={() => handleTabChange("one")}
                  >
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "two" ? "active show" : ""
                    }`}
                    id="two-tab"
                    data-toggle="tab"
                    href="#two"
                    role="tab"
                    aria-controls="two"
                    aria-selected={activeTab === "two"}
                    onClick={() => handleTabChange("two")}
                  >
                    Inclusive/Exclusive
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "three" ? "active show" : ""
                    }`}
                    id="three-tab"
                    data-toggle="tab"
                    href="#three"
                    role="tab"
                    aria-controls="three"
                    aria-selected={activeTab === "three"}
                    onClick={() => handleTabChange("three")}
                  >
                    Itinerary
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "four" ? "active show" : ""
                    }`}
                    id="four-tab"
                    data-toggle="tab"
                    href="#four"
                    role="tab"
                    aria-controls="four"
                    aria-selected={activeTab === "four"}
                    onClick={() => handleTabChange("four")}
                  >
                    Terms &amp; Condition
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "one" ? "active show" : ""
                  }`}
                  id="one"
                  role="tabpanel"
                  aria-labelledby="one-tab"
                >
                  <div className="car-description mb-50">
                    <ul className="tour-offer clearfix">
                      <li style={{ listStyleType: "none" }}>
                        <p></p>
                        <ol>
                          <li>
                            <strong>
                              2 Nights In South Goa &amp;&nbsp;2 Nights In North
                              Goa
                            </strong>
                          </li>
                          <li>
                            <strong>
                              Return Airfare Ex Delhi / Ex Chandigarh / Ex
                              Mumbai / Ex Lucknow any many more locations&nbsp;
                            </strong>
                          </li>
                          <li>
                            <strong>Daily Buffet Breakfast</strong>
                          </li>
                          <li>
                            <strong>Airport / Station Transfers</strong>
                          </li>
                          <li>
                            <strong>Water Activities with Scuba Diving</strong>
                          </li>
                          <li>
                            <strong>Two Days Goa Sightseeing</strong>
                          </li>
                          <li>
                            <strong>One DJ Night&nbsp;</strong>
                          </li>
                          <li>
                            <strong>
                              All presently applicable Hotel Taxes
                            </strong>
                          </li>
                        </ol>
                        <p></p>
                      </li>
                      <li style={{ listStyleType: "none" }}>
                        <span style={textStyle}>Hotel Details</span>
                        <br />
                        <span
                          style={{
                            fontWeight: "bold",
                            textDecoration: " underline",
                          }}
                        >
                          Hotel Name{" "}
                        </span>
                        4 Star Hotels <br />
                        <span
                          style={{
                            fontWeight: "bold",
                            textDecoration: "underline",
                          }}
                        >
                          Room Category{" "}
                        </span>
                        Deluxe&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; <br />
                        <span
                          style={{
                            fontWeight: "bold",
                            textDecoration: "underline",
                          }}
                        >
                          Meal Plan{" "}
                        </span>
                        Buffet Breakfast&nbsp;&amp; Dinner <br />
                      </li>

                      <li style={{ listStyleType: "none" }}>
                        <span
                          style={{
                            fontStyle: "italic",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          Flight/Bus/Train Details
                        </span>
                        <br />
                        <span
                          style={{
                            fontWeight: "bold",
                            textDecoration: "underline",
                          }}
                        >
                          Onwards{" "}
                        </span>
                        Delhi - Goa | Chandigarh - Goa | Mumbai - Goa | Lucknow
                        - Goa <br />{" "}
                        <span
                          style={{
                            fontWeight: "bold",
                            textDecoration: "underline",
                          }}
                        >
                          Return{" "}
                        </span>{" "}
                        Goa - Delhi | Goa - Chandigarh | Goa - Mumbai | Goa -
                        Lucknow{" "}
                      </li>

                      <li style={{ listStyleType: "none" }}>
                        <span>Destination </span>Goa
                      </li>
                      <li style={{ listStyleType: "none" }}>
                        <span>Duration </span>4 Nights / 5 Days
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "two" ? "active show" : ""
                  }`}
                  id="two"
                  role="tabpanel"
                  aria-labelledby="two-tab"
                >
                  <div className="features-info">
                    <div className="row">
                      <div className="col-md-12">
                        <ul className="tour-offer clearfix">
                          <li>
                            <span>Destination </span>Goa
                          </li>
                          <li>
                            <span>What´s Included</span>
                            <ul style={{listStyleType:"none"}}>
                              <li>
                                <i className="fa fa-check-circle"></i> 4 Night
                                Stay at 4* Hotels
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i> Daily
                                Buffet Breakfast &amp; Dinner
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i> Return
                                Aiport/Station Transfers
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i> South Goa
                                Sight Seeing ( SIC )
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i> North Goa
                                Sight Seeing ( SIC )
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i> Free
                                Wi-fi in all hotels
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>{" "}
                                Complementary use of Swimming pool with own
                                proper swimming costumes
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i> All
                                Applicable Fee &amp; Taxes
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i> Return
                                Airfare
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span>Not Included</span>
                            <ul style={{listStyleType:"none"}}>
                              <li>
                                <i className="fa fa-times-circle"></i> Anything
                                not mentioned under
                              </li>
                              <li>
                                <i className="fa fa-times-circle"></i> Early
                                Check inn &amp; Late Check out.
                              </li>
                              <li>
                                <i className="fa fa-times-circle"></i> All
                                personal expenses, optional tours and extra
                                meals.
                              </li>
                              <li>
                                <i className="fa fa-times-circle"></i> Entance
                                Tickets of any Activities or Monuments.
                              </li>
                              <li>
                                <i className="fa fa-times-circle"></i> Camera
                                fees, alcoholic/non-alcoholic beverages and
                                starters
                              </li>
                              <li>
                                <i className="fa fa-times-circle"></i> Any
                                Scooty or Self Driven Vehicle{" "}
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "three" ? "active show" : ""
                  }`}
                  id="three"
                  role="tabpanel"
                  aria-labelledby="three-tab"
                >
                  <div className="features-info">
                    <div className="row">
                      <div className="col-md-12">
                        <ul className="tour-offer clearfix">
                          <li>
                            <i className="fa fa-fighter-jet"></i> Day 1 -
                            Arrival at Goa{" "}
                          </li>
                          You will get a warm welcome by our representative when
                          you arrive at Goa Airport/Railway station/Bus stop.
                          You will then escorted to your pre-booked hotel for
                          Initial check-in process. After some relaxation you
                          may self-explore the beaches/market area nearby your
                          hotel and then overnight stay at your hotel. <br />
                          <li>
                            <i className="fa fa-fighter-jet"></i> Day 2 - North
                            Goa Sightseeing (09:30 AM-05:00 PM){" "}
                          </li>
                          This morning, you have your Breakfast and then start
                          driving towards North Goa, don't forget to carry your
                          sun-screac, Sun glasses, hat and most importantly your
                          camera. North Goa is dotted with some of the most
                          beautiful beaches of Goa Vagator beach, Baga Beach,
                          Calangute Beach, Candolim Beach and Sinquerim Beach
                          are popular beaches of Goa with plenty options of
                          watersport activities along with delightful famous sea
                          food of Goa. Post lunch and some shopping from local
                          markets move ahead further to complete your journey,
                          as north Goa is home to a number of tourist
                          attractions like Shri Shantadugra Temple &amp; Agauda
                          Fort which will complete your first day of sightseeing
                          with some lovely memories. Points to be covered: - •
                          Dolphin Trip (Entry ticket at own cost) • Fort Agauda
                          • Candolim Beach • Calangute Beach • Snow Park (Entry
                          ticket at own cost) • Lunch Break at Goa Restaurant •
                          Anjuna Beach • Vagator Beach/Copra Fort Note : 1.
                          Charges such as Entry fee of any monuments/Museums
                          need to be bear by traveler him-self. Evening DJ night
                          at The Best Preffered Location or Hotel <br />
                          <li>
                            <i className="fa fa-fighter-jet"></i> Day 3 - South
                            Goa Sightseeing (10:30 AM-06:00 PM){" "}
                          </li>
                          "This morning, you have your Breakfast at Hotel and
                          after some leisure depart for South Goa Tour. What a
                          better way to start your spiritual journey with South
                          Goa with some iconic and peaceful places to visit on
                          this day. Without any doubt Miramar beach famous of
                          its quietness beauty away from city rush, this is the
                          place where you can also enjoy Dolphin Spotting. Move
                          ahead, and you will find yourself experiencing the
                          stunning view on Dona Paula Bay followed by famous one
                          of the famous church of Goa the Basilica of Bom
                          Jesus&amp;Se cathedral. There will be lunch halt at
                          old Goa for you to experience the best cuisines of
                          Goa, we highly recommend to have your lunch inside the
                          sack on beach side to make it more memorable
                          experience in Goa. Then move ahead and finish your
                          journey with rest of popular places such as , Mangeshi
                          Temple and at last enjoy the evening at Boat cruise.
                          Points to be covered: - • Boat cruise ( Entry ticket
                          at own cost) • Panjim City Churches • Miramar Beach •
                          Basilica of Bomjesus • TirupatiBalaji Temple •
                          Mangeshi Temple • Sahakari Spice Farm (Entry ticket at
                          own cost) • Boat Cruise at Mandovi River (06 PM to 07
                          PM, Entry Ticket at own cost) (Additional sight seeing
                          Big foot and dauna paula ) Note : 1. Charges such as
                          Entry fee of any monuments/Museums need to be bear by
                          traveler him/her-self. <br />
                          <li>
                            <i className="fa fa-fighter-jet"></i> Day 4 - Full
                            Days for Watersports &amp; Scuba Diving (08:00 AM -
                            05:00 PM{" "}
                          </li>
                          Includes ✔ Pickup and drop Ac Transfer ✔ Approx 15-20
                          mins Scuba Dive ✔ Jetski, Bumper Ride, Banana Ride,
                          Speed Boat, &amp; Kayaking, ✔ Basic Training ✔
                          Equipments Rental included ✔ Breakfast and Lunch Other
                          Benefits 📸 Pics and Video( On Direct Chargeable
                          basis) <br />
                          <li>
                            <i className="fa fa-fighter-jet"></i> Day 5 -
                            DEPARTURE FROM GOA{" "}
                          </li>
                          Check-out the hotel after breakfast, our
                          representative will escort you to Airport/Railway
                          station/Bus stop, then you will leave Goa with sweet
                          &amp; memorable memories which will be remember even
                          after decay. <br />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "four" ? "active show" : ""
                  }`}
                  id="four"
                  role="tabpanel"
                  aria-labelledby="four-tab"
                >
                  <div className="features-info">
                    <div className="row">
                      <div className="col-md-12 termscondition">
                        <ol className="tour-offer clearfix">
                          <li>
                            <strong>Payment Policy</strong>
                            <ol>
                              <li>
                                80% advance to be deposited at the time of
                                booking confirmation.
                              </li>
                              <li>
                                Balance 20%&nbsp;pay&nbsp; can be paid at least
                                20 days prior to your date of departure from
                                your city/country.
                              </li>
                              <li>
                                Rooms holding shall be for a period of 72 hours
                                only.
                              </li>
                              <li>
                                We hold the right to decide upon the amount to
                                be paid as an advance payment, based on the
                                nature of services and the time left for the
                                commencement of the services.
                              </li>
                              <li>
                                The above rates are applicable strictly for
                                resident Indian citizens only.
                              </li>
                            </ol>
                          </li>

                          <br />
                          <li>
                            <strong>Installment Terms</strong>
                            <ol>
                              <li>
                                Installment dates specified as per communication
                                between client and the sales person of the tour
                                package, client must be aware and shall check
                                all the installments dates before making the
                                initial payment, once the invoice is generated
                                installment dates will strictly fallow by the
                                client. In case of payment delay, traveler must
                                need to inform their sales person.
                              </li>
                            </ol>
                          </li>

                          <br />
                          <li>
                            <strong>Cancellation Policy</strong>
                            <p>
                              <strong>
                                The cancellation charges applicable are as per
                                the published cancellation policy.
                              </strong>
                            </p>
                            <ol>
                              <li>
                                70 days or more before date of departure: 20%
                                will be deducted of total cost.
                              </li>
                              <li>
                                50 days or more before date of departure: 40%
                                will be deducted of total cost.
                              </li>
                              <li>
                                30 days or more before date of departure: 60%
                                will be deducted of total cost.
                              </li>
                              <li>
                                29 - 20 days before date of departure: 80% will
                                be deducted of total cost.
                              </li>
                              <li>
                                19 days or less before date of departure: 100%
                                will be deducted of total cost.
                              </li>
                              <li>
                                <strong>
                                  The Advance Token Amount i.e. First
                                  Installment&nbsp;in Any Case will be Non –
                                  Refundable / Transferable&nbsp;
                                </strong>
                              </li>
                              <li>
                                Cancellation Due to any
                                Natural/Epidemic/Pendamic/ Issue Stands to be
                                Purely Non refundable (Re-Scheduling Can be done
                                with the amendmend Policy Given Below.
                              </li>
                              <li>
                                Apart from Cancellation amount, Extra 10% of the
                                total amount will be charged extra as files
                                charges if any guest cancels their trip before
                                the cancellation period. One time
                                Re-Scheduling/Amendment charges INR 2000/- per
                                adults &amp; Land Package difference as per
                                seasonality rates.
                              </li>
                            </ol>

                            <p>
                              <strong>Important</strong>: The booking stands
                              liable to be cancelled if 100% payment is not
                              received less than 20 days before date of
                              departure.
                            </p>
                          </li>

                          <br />
                          <li>
                            <strong>Refund</strong>
                            <ol>
                              <li>
                                The refund on fully unutilized domestic tour
                                bookings is processed within 7 – 14 woking days
                                of receiving the refund request from
                                Traveller.&nbsp;
                              </li>
                              <li>
                                Advance / First installment payed at the time of
                                Booking is purely Non-Refundable / Transferable
                              </li>
                              <li>
                                The refund is processed back into the same
                                account from which the payment was originally
                                received.
                              </li>
                              <li>
                                An email/SMS is sent out to confirm the same.
                                Banks, however, can take up to 10 working days
                                to process the credit back into your account, if
                                the payment was made using a credit/debit card.
                              </li>
                              <li>
                                In case the payment was made through Net
                                Banking, the bank can take up to 14 working days
                                to credit the amount.
                              </li>
                            </ol>
                          </li>

                          <br />
                          <li>
                            <strong>
                              Policy&nbsp;(Adventure Activities &amp; Camping):
                            </strong>
                            <ol>
                              <li>
                                It is not advisable to join for rafting
                                if&nbsp;you&nbsp;are under any medical treatment
                                (like Diabetic, Fit, high &amp; low B.P.,
                                vertigo, Asthmatics, Heart problem any surgery
                                &amp; tribal will be your own responsibility
                              </li>
                              <li>
                                The management is not being responsible for any
                                type of hazard, accident happened inside or
                                outside of camp premises.
                              </li>
                              <li>
                                We do not have any
                                insurance&nbsp;policy&nbsp;covering the expenses
                                for accident , sickness, loss due to theft or
                                any other reason, guests are advised to seek
                                such insurance arrangements in their home
                                country.
                              </li>
                              <li>
                                We shall not be responsible for any delays &amp;
                                alterations in the programme or expenses
                                incurred- directly or indirectly due to natural
                                hazards, accident, breakdown of
                                machinery,&nbsp;equipment’s, transport, traffic
                                situation weather&nbsp;condition, sickness,
                                landslides, political closure or any untoward
                                incidents.
                              </li>
                              <li>
                                Numerous factors such as weather, road
                                conditions, the physical ability of participants
                                etc. may dictate&nbsp;itinerary&nbsp;change. We
                                reserve the&nbsp;rights
                                to&nbsp;change&nbsp;any&nbsp;schedule&nbsp;in
                                the interest of safety, comfort &amp; general
                                well being.
                              </li>
                              <li>
                                We reserve the rights for the cancel of
                                particular person not following the instructions
                                of our guide during any activity.
                              </li>
                              <li>
                                We reserve to rights for cancellation of the
                                person such as alcoholic, misbehaved. Such
                                persons are strictly prohibited.
                              </li>
                            </ol>
                          </li>

                          <br />
                          <li>
                            <strong>Hotel Policy</strong>
                            <ol>
                              <li>
                                Availability of Hotel is subject to
                                availability.
                              </li>
                              <li>
                                Any Special Request Such As
                                <ol>
                                  <li>
                                    Room on the Same Floor, King Size / Double
                                    Bed,
                                  </li>
                                  <li>
                                    Early Check In, Late Check Out, Non/Smoking
                                    Room, Etc.
                                  </li>
                                </ol>
                              </li>
                            </ol>

                            <p>
                              (Subject To Availability upon Check-In Of the
                              Guest and Is At the Hotel's Discretion. We Will
                              Request This For You As Priority )
                            </p>

                            <ol>
                              <li>
                                Rates are subject to availability of the Rooms
                                on the date of booking it May change if
                                categories changes.
                              </li>
                              <li>
                                In Case the Given hotel is sold-out. We will
                                provide similar Category of hotel.
                              </li>
                            </ol>
                          </li>

                          <br />
                          <li>
                            <strong>Flight Policy</strong>
                            <ol>
                              <li>
                                For Flights booking you have to deposit full
                                Airfare Cost in First Installment .
                              </li>
                              <li>
                                For Flights Booking if there will be any
                                Increase in Airfare an the Time of Booking will
                                be payed by customer.
                              </li>
                              <li>
                                Any mistake After the Booking of Flights in the
                                Names or DOB Given &amp; Confirmed by the Person
                                who Gives details will be Totally Responsible
                              </li>
                              <li>
                                Any Cancellation / Rescheduling by the carrier
                                against any particular issued air ticket will be
                                carrier’s responsibility for providing any
                                alternative options or compensation. Hence, not
                                Travel Surity will not liable to pay any
                                compensation regarding this.
                              </li>
                              <li>
                                Please refer the airline website for Baggage
                                Allaowance, Cancalation / Rescheduling Charges
                                etc. or if required Traveller can ask any
                                details from the sales Person themselves
                                afterwards Any sales person / Travel surity will
                                not be responsible for any charges
                              </li>
                              <li>
                                For Any type of Cancelations / Rescheduling
                                please refer to airlines 24X7 Support or If Any
                                of these services Taken from Travel Surity will
                                be Charged Rs.500/- Per Person / Per Way as a
                                service Charge
                              </li>
                              <li>
                                For Any type of Cancelations / Rescheduling /
                                Names Change Charges as per the Airlines + Real
                                time Fare Difference Has to be Payed By the
                                Traveller
                              </li>
                            </ol>
                          </li>
                          <br />
                          <li>
                            <strong>
                              Please Note : Rules For Car/Scooty Etc. Rentals
                            </strong>
                            <ol>
                              <li>
                                While taking the scooty/car etc. from the vendor
                                please check the Scooty for any types of
                                scratches or any major/minor problem at the time
                                of doing enrtry
                              </li>
                              <li>
                                Any problem if takes place at any time after the
                                entry, Travel Surity will not be responsible for
                                any type of problem faced.
                              </li>
                              <li>
                                Scooty/car etc. will be issued only of 24 hours
                                from the starting time or the guest have to pay
                                the extra time charges directly to the vendor
                              </li>
                              <li>
                                Time Limits WHILE TAKING 09:00 am | Returning
                                Next Day : 09:00 am Strictly or Full day charges
                                will be charged&nbsp;
                              </li>
                              <li>
                                Only scooty/car etc. will be given to guest,
                                Here after any Petrol or any type of
                                Miscellaneous charges Refers to the Guest only.
                              </li>
                              <li>
                                Scooty/car etc. will be only handed over to the
                                valid Indian Driver’s license holder only
                              </li>
                              <li>
                                All safety precautions to be taken during
                                Scooty/car etc. ride, Travel Surity will not be
                                responsible in any case if any Tragedy takes
                                place in nature of Any Injury, Death, Vehicle
                                crash the Losses have to be cleared with the
                                vendor.
                              </li>
                            </ol>
                          </li>

                          <li>
                            <strong>Transfer</strong>
                            <ul>
                              <li>
                                <strong>SIC</strong> means SEAT IN COACH&nbsp;–
                                you will be provided a seat in a coach where
                                other passengers will be travelling along with
                                you. SIC will have&nbsp; fixed timings which
                                have to be strictly followed as there are other
                                passengers in the coach. Also since the coach
                                will collect other passengers from different,
                                you may have to wait for 10 - 15 minutes for the
                                pick- up. If you miss the coach for the
                                sightseeing or the service will be considered as
                                NO SHOW and non-refundable.
                              </li>
                              <li>
                                <strong>Private</strong> transfer’s&nbsp;means a
                                separate vehicle with / without guide, for that
                                particular sightseeing or transfer. Private
                                transfers doesn’t mean car at disposal, just
                                like SIC this will again be following fixed
                                timings and if you are not present in time the
                                same will be considered as a no show and is
                                non-refundable. You will be taken directly to
                                and from your accommodation without any detour.
                              </li>
                            </ul>

                            <p>
                              <strong>
                                The schedule for all sightseeing tours are
                                indicative and the exact date for the same will
                                be reconfirmed when we give the final itinerary
                                at the time of handover.
                              </strong>
                              &nbsp;
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="itenary col-md-4"
            style={{
              paddingLeft: "3rem",
              marginop: "5.8rem",
              height: " -webkit-fill-available",
            }}
          >
            <div className="single-popular-tour" style={singlePopularTour}>
              <div className="popular-tour-image" style={popularImage}>
                <img src={Image1} alt="Popular Tours" style={popularImg1} />
              </div>
              <div className="popular-tour-desc">
                <div className="tour-desc-top" style={tourDes}>
                  <h3>Goa Monsoon Special Offer</h3>

                  <div className="tour_duration inclusions">
                    <p
                      style={{
                        color: " #686161",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        fontWeight: " 600",
                        textAlign: "start",
                        display: "flex",
                        alignItems: "center",
                        gap: " 5px",
                      }}
                    >
                      <i className="fa fa-hourglass-half"></i>
                      Duration: 3 Nights / 4 Days
                    </p>
                    <p
                      style={{
                        color: " #686161",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        fontWeight: " 600",
                        textAlign: "start",
                        display: "flex",
                        alignItems: "center",
                        gap: " 5px",
                      }}
                    >
                      <i className="fa fa-rupee"></i>
                      Starts @ 8999/- for Adult
                    </p>
                  </div>
                </div>
                <div className="tour-desc-bottom" style={tourdesBtn}>
                  <div
                    className="tour-details"
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  ></div>
                </div>
                <div>
                  <ul className="butoon">
                    <li>
                      <NavLink to="TravelBookForm">
                        <button type="button" className="btn btn-primary">
                          Book Now
                        </button>
                      </NavLink>
                    </li>
                    <li>
                      <button type="button" className="btn btn-warning">
                        Contact Us
                      </button>
                    </li>
                    <li>
                      <button type="button" className="btn btn-light">
                        T & C
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItenaryTabDetails;
