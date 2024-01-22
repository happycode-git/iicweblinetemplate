import React from "react";

// Block for anything inside placed as children
export function Block1({ children, padding, backgroundColor, width, classes }) {
  return (
    <div
      className={classes}
      style={{
        padding: padding !== undefined ? padding : "0",
        backgroundColor:
          backgroundColor !== undefined ? backgroundColor : "rgba(0,0,0,0)",
        width: width !== undefined ? width : "auto",
        boxSizing: "border-box"
      }}
    >
      {children}
    </div>
  );
}
// Block with a heading and children (optional)
export function Block2({
  children,
  heading,
  headingSize,
  padding,
  width,
  classes,
}) {
  return (
    <div
      className={classes}
      style={{
        padding: padding !== undefined ? padding : "2em",
        width: width !== undefined ? width : "80%",
        boxSizing: "border-box"
      }}
    >
      <h1
      className="main_title_font"
        style={{
          fontSize: headingSize !== undefined ? headingSize : "5em",
          lineHeight: "1em",
        }}
      >
        {heading}
      </h1>
      {children}
    </div>
  );
}
// Blcok with heading and text
export function Block3({
  children,
  heading,
  text,
  headingSize,
  textSize,
  padding,
  width,
  classes,
}) {
  return (
    <div
      className={classes}
      style={{
        padding: padding !== undefined ? padding : "1em",
        width: width !== undefined ? width : "100%",
        boxSizing: "border-box"
      }}
    >
      <h1
      className="main_title_font"
        style={{
          fontSize: headingSize !== undefined ? headingSize : "4em",
          lineHeight: "1em",
        }}
      >
        {heading}
      </h1>
      <p
        className="medium_text main_body_font"
        style={{
          fontSize: textSize !== undefined ? textSize : "1.3em",
        }}
      >
        {text}
      </p>
      {children}
    </div>
  );
}
// Block with image, heading, and text
export function Block4({
  image,
  heading,
  text,
  headingSize,
  textSize,
  width,
  classes,
}) {
  return (
    <div
      className={classes}
      style={{
        width: width !== undefined ? width : "100%",
        boxSizing: "border-box"
      }}
    >
      <img
        src={image}
        style={{ width: "100%", maxHeight: "40vh", borderRadius: "6px" }}
        className="cover"
      />
      <h2
      className="main_title_font"
        style={{
          fontSize: headingSize !== undefined ? headingSize : "1.6em",
        }}
      >
        {heading}
      </h2>
      <p className="main_body_font" style={{ fontSize: textSize !== undefined ? textSize : "16px" }}>
        {text}
      </p>
    </div>
  );
}
