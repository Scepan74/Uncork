import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useGlobalContext } from "./Context";

// layout component renders the entire layout of the app, including the header, outlet - main content, footer, and vertical lines feature.

const Layout = () => {
  const { headerRef } = useGlobalContext();

  return (
    <div id="overlay">
      <div id="layout">
        {/* The header element is a container for the Navbar component. */}
        <header id="header" ref={headerRef}>
          <Navbar />
        </header>

        {/* The main element is a container for the Outlet component. */}
        <main className="outlet">
          <Outlet />
        </main>

        {/* The footer element is a container for the Footer component. */}
        <Footer />

        {/* Container for 3 vertical lines upon each travel their respective glimpse element with a delay to each other. */}
        <div className="vertical-lines-container">
          {/* The first vertical line is a containers for the vertical line and the glimpse element. */}
          <div className="vertical-line">
            {/* The glimpse element is a small white line that moves up and down the line. */}
            <div className="glimpse"></div>
          </div>

          {/* The second vertical line*/}
          <div className="vertical-line">
            {/* This glimpse element moves on second line with a delay. */}
            <div className="glimpse delay1"></div>
          </div>

          {/* The third vertical line*/}
          <div className="vertical-line">
            {/* The glimpse element delayed to others. */}
            <div className="glimpse delay2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
