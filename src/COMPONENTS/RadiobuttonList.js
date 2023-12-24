import React from "react";

export function RadiobuttonList({
  id,
  isVertical,
  options,
  name,
  setter,
  classes,
}) {
  function onThing() {
    const radioButtons = document.querySelectorAll(
      `#${id} input[type='radio']:checked`
    );
    const checkedValues = Array.from(radioButtons).map((radio) => radio.value);
    setter(checkedValues);
  }

  return (
    <div
      className={`${classes}`}
      style={{
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        gap: "0.5em",
      }}
    >
      {options.map((opt, i) => {
        return (
          <div id={id} style={{ display: "flex" }} key={i}>
            <input type="radio" name={name} value={opt} onChange={onThing} />
            <p style={{ margin: 0 }}>{opt}</p>
          </div>
        );
      })}
    </div>
  );
}
