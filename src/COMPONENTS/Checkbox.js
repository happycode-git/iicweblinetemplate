import React from "react";

export function Checkbox({ id, setter, label, classes }) {
  function onThing() {
    const thing = document.querySelector(`#${id}`).checked;
    setter(thing);
  }
  return (
    <div className={`horizontal ${classes}`}>
      <input id={id} type="checkbox" onChange={onThing} />
      <p>{label}</p>
    </div>
  );
}
