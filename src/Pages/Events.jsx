import React, { useEffect } from "react";
import { useGlobalContext } from "../Components/Context";
import RotateText from "../Components/RotateText";
import { NavLink } from "react-router-dom";
import wineNotes from "../assets/img/events/wine-notes.webp";
import wineDinner from "../assets/img/events/wine-dinner.webp";
import wineParty from "../assets/img/events/wine-party.webp";

//component renders the events page advertising upcoming events and offering link to contact page for more information.

const Events = () => {
  const { navbarRef, headerRef } = useGlobalContext();

  //scroll to the top whenever page changes, so that coming back to previous page returns viewport to top
  useEffect(() => {
    window.scrollTo(0, 0);
    const header = headerRef.current;
    const navbar = navbarRef.current;
    //styling header responsively
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
    <>
      {/* title processed by RotateText component */}
      <div id="events-title" className="title-text">
        <div className="title-text-box">
          <div>
            <RotateText text=" UPCOMING" />
          </div>
          <div>
            <RotateText text=" " />
          </div>
          <div>
            <RotateText text="EVENTS" />
          </div>
        </div>
      </div>
      <div className="events-box">
        <div className="event">
          <div className="event-content">
            <h4>wine tastings</h4>
            <p>monday tasting</p>
            <br />

            <div className="img-container">
              <img className="event-img" src={wineNotes} alt="walkaround" />
            </div>

            <br />
            <br />

            <small>
              Once a week, our loyalty club enjoys informal wine gathering
              hosted by one of our sommeliers eager to present wines of
              designation... geographical, vintage, producer... whatever the
              theme is that monday
            </small>
          </div>
        </div>
        <div className="event">
          <div className="event-content">
            <h4>wine dinners</h4>
            <p>monthly wine dinner</p>
            <br />

            <div className="img-container">
              <img className="event-img" src={wineDinner} alt="walkaround" />
            </div>
            <br />
            <br />

            <small>
              Once a month, on second tuesday, we dine under candles in company
              of the Chef and Head Sommalier who do their wine & food pairing
              magic around table sharing tips and tricks while slow courses
              arrive followed by matching wines
            </small>
          </div>
        </div>
        <div className="event">
          <div className="event-content">
            <h4>celebrations</h4>
            <p>Any occasion is good enough excuse for having some wine</p>
            <br />

            <div className="img-container">
              <img className="event-img" src={wineParty} alt="bubbly" />
            </div>
            <br />
            <br />

            <small>
              Office happy hour, parties and celebrations, professional or
              family gatherings always match well with glass of wine
            </small>
          </div>
        </div>
      </div>
      {/* link to contact page */}
      <NavLink to="/contact" className="link">
        <h4 className="contact-link">
          Get more details in news letter or contact us directly
        </h4>
      </NavLink>
    </>
  );
};

export default Events;
