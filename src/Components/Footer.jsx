import React from "react";
import { FaPhone, FaEnvelope, FaAt } from "react-icons/fa";
// import { MdAlternateEmail } from "react-icons/md";
import RotateText from "./RotateText";
import MyMap from "./MyMap";

// footer component renders Layout footer for the website
const Footer = () => {
  return (
    <div className="footer">
      {/*---------------------- upper footer */}
      <div id="footer-box">
        {/* ----------------------left-contact info */}
        <div id="footer-left">
          {/* ---------address */}
          <div className="left-info footer-address">
            <FaEnvelope className="footer-icon address-icon" />
            <div className="footer-address-text">
              <p>UNCORK WINE ART STUDIO</p>
              <small>294, Barry Hertzog Ave, Randburg, Gauteng</small>
            </div>
          </div>

          {/* ---------email*/}
          <div className="left-info footer-email">
            <FaAt className="footer-icon email-icon" />
            <p className="footer-email-text">uncork@office.com</p>
          </div>
          {/* ---------phone*/}
          <div className="left-info footer-phone">
            <FaPhone className="footer-icon phone-icon" />
            <p className="footer-phone-text">+27 11 646 8740</p>
          </div>
        </div>

        {/* -------------------- right-map */}
        <div id="footer-right">
          <MyMap />
        </div>
      </div>
      {/* ----------------- lower footer-copyrights*/}
      <div id="copy-rights">
        &copy; {new Date().getFullYear()} Web Art Forge
      </div>
    </div>
  );
};

export default Footer;
