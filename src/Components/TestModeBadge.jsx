import React from "react";
import badge from "../assets/img/badgeGreen.png";
import "../css/TestModeBadge.css";

const TestModeBadge = ({ className: classPassed }) => {
  return (
    <img
      className={classPassed}
      src={badge}
      alt="badge"
      title="This website is in TEST MODE. No real transactions will be made."
    />
  );
};

export default TestModeBadge;
