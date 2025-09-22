import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="container">
      <div
        className="back layer"
        style={{ transform: `translateY(${offset * 0.7}px)` }}
      ></div>
      <div
        className="front layer"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      ></div>
      <div
        className="text"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      >
        <h1>neki text</h1>
      </div>
    </section>
  );
};

export default App;
