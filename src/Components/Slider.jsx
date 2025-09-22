import { useEffect, useState } from "react"; // Import necessary hooks from React
import wines from "../assets/data"; // Import wines data
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import icons for navigation
import { NavLink } from "react-router-dom"; // Import NavLink for routing

// Function to calculate the number of visible slides based on screen width
const getVisibleCount = () => {
  const width = window.innerWidth;
  if (width <= 478) return 3;
  if (width <= 769) return 4;
  if (width <= 1200) return 5;
  return 6;
};

const Slider = () => {
  const [index, setIndex] = useState(0); // State to track the current index of the slide
  const total = wines.length; // Total number of wines
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Function to move to the next slide
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total); // Increment index and wrap around if it exceeds total
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total); // Decrement index and wrap around if it goes negative
  };

  // Set up an interval to automatically change slides every 4 seconds
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Determine the CSS class for positioning slides
  const getPositionClass = (i) => {
    const relativeIndex = (i - index + total) % total; // Calculate relative position of slide
    return relativeIndex >= 0 && relativeIndex < visibleCount
      ? `active${relativeIndex + 1}` // Assign active class based on position
      : ""; // Empty class for non-visible slides
  };

  return (
    <div className="carousel">
      <NavLink className="nav-link" to="/wines">
        <div className="carousel-box fade-effect">
          {wines.map((wine, i) => {
            const { id, image, name, region, vintage } = wine; // Destructure wine properties
            const position = getPositionClass(i); // Get position class for current slide

            return (
              <article className={`bottle ${position}`} key={id}>
                <img src={image} alt={name} /> {/* Display wine image */}
                <h4>{name}</h4> {/* Display wine name */}
                <p>{region}</p> {/* Display wine region */}
                <p>{vintage}</p> {/* Display wine vintage */}
              </article>
            );
          })}
        </div>
      </NavLink>
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />{" "}
        {/* Left arrow button to navigate to previous slide */}
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight /> {/* Right arrow button to navigate to next slide */}
      </button>
    </div>
  );
};

export default Slider;
