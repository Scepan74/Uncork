import React from "react";
import { useGlobalContext } from "./Context";
import TestModeBadge from "./TestModeBadge";

// Modal component shows either wine details or booking confirmation.
const Modal = () => {
  //context provider values containing details for modal rendering and closing function
  const { modalProps, closeModal } = useGlobalContext();
  const {
    persons,
    date,
    time,
    email,
    image,
    name,
    region,
    vintage,
    price,
    text,
  } = modalProps.modalDetails;

  // Modal content based on the event target
  return (
    <div className="modal">
      {/*ternary operator to render wine details or booking confirmation checks target class  and renders modal accordingly*/}
      {modalProps.eventTarget.includes("wine-card") ? (
        <div className="wine-modal wine-grid">
          <img id="img" src={image} alt={name} height="50%" />
          <h3 id="name">{name}</h3>
          <p id="reg">{region}</p>
          <p id="vin">{vintage}</p>
          <p id="price">${price}</p>
          <p id="text">{text}</p>
        </div>
      ) : (
        <div className="booking-modal">
          <TestModeBadge className="modal-test-badge" />
          <h4>you have a booking</h4>
          <br />
          <p>for:</p>
          <br />
          <p className="booking-entry"> {persons} </p>

          <p>on:</p>
          <br />
          <p className="booking-entry"> {date}</p>

          <p>at:</p>
          <br />
          <p className="booking-entry"> {time}</p>

          <p>by: </p>
          <br />
          <p className="booking-entry">{email}</p>
          <br />
          <br />
          <p>please let us know of any changes at least 2h prior to arrival.</p>
        </div>
      )}
      {/* closing modal and resetting state */}
      <button className="btn" type="button" onClick={(e) => closeModal(e)}>
        close
      </button>
    </div>
  );
};

export default Modal;
