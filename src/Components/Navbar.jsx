import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

// custom React component renders a navigation menu
const Navbar = () => {
  //context provider reference to #navbar node
  const { navbarRef } = useGlobalContext();
  //navigation menu items array of objects with two properties: `name` and `url` of the page
  const menuItems = [
    { name: "home", url: "/" },
    { name: "wines", url: "/wines" },
    { name: "boards", url: "/boards" },
    { name: "events", url: "/events" },
    { name: "contact", url: "/contact" },
  ];

  return (
    // context reference access to #navbar node
    <nav id="navbar" ref={navbarRef}>
      <ul>
        {/* list of menu links to pages */}
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink className="nav-link" to={item.url}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
