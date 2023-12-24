import React from "react";

export function Clickable({ children, onClick, classes }) {
  return (
    <div
      onClick={() =>
        onClick !== undefined ? onClick() : console.log("No click events.")
      }
      style={{ cursor: "pointer", border: "0", width: "fit-content", height: "fit-content" }}
      className={`bg_clear ${classes}`}
    >
      {children}
    </div>
  );
}
