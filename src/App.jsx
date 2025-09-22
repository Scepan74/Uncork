import { Routes, Route } from "react-router-dom";
import "./Css/App.css";
import "./Css/phone.css";
import "./Css/tablet.css";
import "./Css/laptop.css";
import "./Css/desktop.css";
import "./Css/big.css";

import { useEffect } from "react";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Wines from "./Pages/Wines";
import Boards from "./Pages/Boards.jsx";
import Events from "./Pages/Events";

// App component renders the routes

const App = () => {
  //scroll to the top whenever page changes, so that coming back to previous page returns viewport to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home page */}
        <Route index element={<Home />} />

        {/* Wines page */}
        <Route path="wines" element={<Wines />} />

        {/* Boards page */}
        <Route path="boards" element={<Boards />} />

        {/* Events page */}
        <Route path="events" element={<Events />} />

        {/* Contact page */}
        <Route path="contact" element={<Contact />} />

        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
