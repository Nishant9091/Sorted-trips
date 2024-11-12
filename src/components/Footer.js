import { Link } from "react-router-dom";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer">
            <h5 className="footer-heading">Find Us</h5>

            
            <p><FontAwesomeIcon icon={<i class="fa-solid fa-location-dot"></i>} /> 9878/25 sec 9 rohini 35</p>
            <p><FontAwesomeIcon icon={<i class="fa-solid fa-location-dot"></i>} /> +91-9999878398</p>
            <p><FontAwesomeIcon icon={<i class="fa-solid fa-location-dot"></i>} /> SortedTrips@gmail.com</p>
          </div>
          <div className="col-md-4 footer">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="http://webenlance.com">Image Rectoucing</a></li>
              <li><a href="http://webenlance.com">Clipping Path</a></li>
              {/* Add more quick links */}
            </ul>
          </div>
          <div className="col-md-4 footer">
            <h5 className="footer-heading">Follow Us</h5>
            <ul className="social-icons">
              <li><a href="http://webenlance.com"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="http://webenlance.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="http://webenlance.com"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="http://webenlance.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="text-center">
            Copyright @2023 | Designed With by SortedTrips
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
