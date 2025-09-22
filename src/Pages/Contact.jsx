import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Components/Context";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialPintarest,
  SlSocialSkype,
} from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";

//renders the contact page component
const Contact = () => {
  const { navbarRef, headerRef, contactRef } = useGlobalContext();
  // state for form subscription details
  const [details, setDetails] = useState({ email: "", message: "" });
  //handles form details onChange
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  // handles subscription form submission
  const handleSubscribe = () => {
    // case when fields are empty
    if (!details.message.trim() || !details.email.trim()) {
      alert("Please fill in all fields");
      return;
    }
    // alerts success msg
    alert(" Thank you for your interest");
  };
  //scroll to the top whenever page changes, so that coming back to previous page returns viewport to the top. Focus on the contact form on render.Styles header responsively
  useEffect(() => {
    window.scrollTo(0, 0);
    contactRef.current.focus();
    const header = headerRef.current;
    const navbar = navbarRef.current;

    if (header) {
      header.style.background = "black";
    }
    if (navbar) {
      navbar.style.width = "90vw";
      navbar.style.fontSize = "0.8rem";
      navbar.style.lineHeight = "100%";
      navbar.style.transform = "translate(-50%, -6vh)";
    }
  }, [headerRef, navbarRef]);
  return (
    <main className="news">
      <div className="news-letter">
        <p>News letter</p>
        <form
          className="news-form"
          // on submission, form sends email to bar@office.com with subject "New Subscription"
          action="mailto:bar@office.com?subject='New Subscription'"
          method="post"
          encType="text/plain"
        >
          <textarea
            ref={contactRef}
            id="message"
            name="message"
            value={details.message}
            placeholder="Please let us know of your inquiry, suggestion or comment."
            onChange={(e) => {
              handleChange(e);
            }}
            required
          ></textarea>
          <br />
          <input
            type="email"
            id="email1"
            name="email"
            value={details.email}
            placeholder="email"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />

          <br />
          {/* subscription button */}
          <button
            className="sub-btn btn"
            type="submit"
            onClick={(e) => handleSubscribe(e)}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* social media icons */}
      <div className="icon-container">
        <div className="social social1 ">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialFacebook className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialInstagram className="social-icon" />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialPintarest className="social-icon" />
          </a>
        </div>

        <div className="social social2">
          <a
            href="https://www.x.com"
            target="_blank"
            className="social-icon"
            rel="noopener noreferrer"
          >
            <PiXLogo />
          </a>
          <a
            href="https://www.skype.com/en/"
            target="_blank"
            className="social-icon"
            rel="noopener noreferrer"
          >
            <SlSocialSkype />
          </a>
          <a
            href="https://telegram.org/"
            target="_blank"
            className="social-icon"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>
    </main>
  );
};
export default Contact;
