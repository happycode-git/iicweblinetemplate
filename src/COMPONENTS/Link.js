import React from "react";

export function Link1({ text, size, font, onClick, classes }) {
  return (
    <button
      onClick={() => {
        onClick !== undefined ? onClick() : console.log("No click events");
      }}
      className={`${classes} bg_clear ${font} pointer`}
      style={{
        border: "0",
        fontSize: size,
      }}
    >
      {text}
    </button>
  );
}
