import React from "react";
import { screenHeight } from "../Global";

export function Row({ children, height, backgroundColor, width, classes }) {
  return (
    <div
      className={classes}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(315px, 1fr))",
        height: height !== undefined ? height : "fit-content",
        backgroundColor:
          backgroundColor !== undefined ? backgroundColor : "rgba(0,0,0,0)",
        boxSizing: "border-box",
        width: width !== undefined ? width : "auto",
        gap: "1em",
      }}
    >
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
}
