import React from "react";

export default function Dropdown({
  id,
  options,
  padding,
  backgroundColor,
  radius,
  borderWidth,
  borderColor,
  width,
  setter,
  classes
}) {
  function onSelect() {
    const selected = document.querySelector(`#${id}`).value;
    setter(selected);
  }
  return (
    <select
      id={id}
      style={{
        padding: padding !== undefined ? padding : "1em",
        backgroundColor:
          backgroundColor !== undefined ? backgroundColor : "rgba(0,0,0,0.05)",
        borderRadius: radius !== undefined ? radius : "6px",
        border: `${borderWidth !== undefined ? borderWidth : "1"}px solid ${
          borderColor !== undefined ? borderColor : "black"
        }`,
        width: width !== undefined ? width : "100%",
        boxSizing: "border-box",
      }}
      onChange={onSelect}
      className={`${classes}`}
    >
      <option>Select One</option>
      {options.map((opt, i) => {
        return <option key={i}>{opt}</option>;
      })}
    </select>
  );
}
