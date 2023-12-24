import React from "react";

export function Textarea({
  id,
  placeholder,
  padding,
  backgroundColor,
  borderWidth,
  borderColor,
  radius,
  width,
  minHeight, // New property for minimum height
  setter,
  onTyping,
  classes,
}) {
  function onType() {
    const text = document.querySelector(`#${id}`).value;
    setter(text);
    onTyping(text);
  }

  return (
    <textarea
      id={`${id}`}
      placeholder={placeholder}
      style={{
        padding: padding !== undefined ? padding : "1em",
        backgroundColor:
          backgroundColor !== undefined ? backgroundColor : "rgba(0,0,0,0.05)",
        borderRadius: radius !== undefined ? radius : "6px",
        border: `${borderWidth !== undefined ? borderWidth : "0"}px solid ${
          borderColor !== undefined ? borderColor : "black"
        }`,
        width: width !== undefined ? width : "100%",
        minHeight: minHeight !== undefined ? minHeight : "150px", // Set the minimum height
        boxSizing: "border-box",
      }}
      className={classes}
      onChange={() => {
        onType();
      }}
    />
  );
}
