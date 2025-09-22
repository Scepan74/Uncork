import { useState } from "react";
import { useGlobalContext } from "./Context";

// component handles the booking form
const BookBox = () => {
  const { showModal } = useGlobalContext();
  const [details, setDetails] = useState({
    date: "",
    time: "",
    persons: "",
    email: "",
  });

  //sets details state onChange of input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  // handling  form details validation, setting state and submission to showModal
  const handleSubmit = (e) => {
    // Prevent default form submission
    e.preventDefault();
    // case when fields are empty - not valid
    if (
      !details.date.trim() ||
      !details.email.trim() ||
      !details.time.trim() ||
      !details.persons.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }
    // case when form is valid
    {
      setDetails({
        date: "",
        time: "",
        persons: "",
        email: "",
      });
      showModal(e, details);
    }
  };

  // Form to input booking details, tooltip 'validation'
  return (
    <form id="book-box">
      {/* Date input */}
      <input
        className="input-book"
        id="date"
        type="date"
        name="date"
        value={details.date}
        onChange={(e) => {
          handleChange(e);
        }}
        onClick={(e) => {
          e.target.showPicker();
        }}
        title="please choose the date "
        required
      />
      {/* Time selection */}
      <select
        className="input-book"
        id="time"
        type="time"
        name="time"
        value={details.time}
        onChange={(e) => {
          handleChange(e);
        }}
        required
        title="please choose the time "
      >
        <option value="">Time</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="22:00">22:00</option>
      </select>
      {/* Number of persons selection */}
      <select
        className="input-book"
        id="persons"
        name="persons"
        type="text"
        value={details.persons}
        onChange={(e) => {
          handleChange(e);
        }}
        required
        title="please choose the number of guests "
      >
        <option value="">Persons</option>
        <option value="1 Persons">1 Persons</option>
        <option value="2 Persons">2 Persons</option>
        <option value="3 Persons">3 Persons</option>
        <option value="4 Persons">4 Persons</option>
        <option value="6 Persons">6 Persons</option>
        <option value="8 Persons">8 Persons</option>
        <option value="function">Function</option>
      </select>
      {/* Email input */}
      <input
        className="input-book"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        value={details.email}
        onChange={(e) => {
          handleChange(e);
        }}
        required
        title="please enter email "
      />
      {/* Submit button */}
      <button
        className="input-book"
        id="submit"
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Book Now
      </button>
    </form>
  );
};

export default BookBox;
