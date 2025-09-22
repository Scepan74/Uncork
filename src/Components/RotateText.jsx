import React from "react";

//custom React component for text to be rotated
const RotateText = ({ text }) => {
  // transforms string from text argument into an array of characters
  const textArray = Array.from(text);

  return (
    <>
      {/* returns the text from iterated array of characters, styled with animation */}
      {textArray.map((char, index) => (
        <h2
          key={index}
          style={{
            display: "inline-block",
            animation: "text-rotate 1s 1.5s",
          }}
        >
          {char}
        </h2>
      ))}
    </>
  );
};

export default RotateText;
