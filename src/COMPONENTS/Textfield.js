import React, { useEffect, useState } from "react";

export function Textfield({
  id,
  placeholder,
  isPassword,
  padding,
  backgroundColor,
  borderWidth,
  borderColor,
  radius,
  width,
  setter,
  onTyping,
}) {
  function onType() {
    const text = document.querySelector(`#${id}`).value;
    setter(text);
    onTyping(text);
  }

  return (
    <input
      id={`${id}`}
      type={`${isPassword ? "password" : "text"}`}
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
        boxSizing: "border-box",
      }}
      onChange={() => {
        onType();
      }}
    />
  );
}
