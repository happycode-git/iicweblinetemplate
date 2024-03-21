import React from "react";

export function DatePicker({ id, setter, padding, radius, classes }) {
  function onThing() {
    const thing = document.querySelector(`#${id}`).value;
    setter(thing);
  }
  return (
    <div className={`horizontal ${classes}`} style={{boxSizing: "border-box"}}>
      <input id={id} type="date" onChange={onThing} style={{borderRadius: radius !== undefined ? radius : "8px", padding: padding !== undefined ? padding : "1em", width: "100%", borderWidth: 1}}  />
    </div>
  );
}
