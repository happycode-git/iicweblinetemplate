import React from "react";

export function CheckboxList({
  id,
  isVertical,
  options,
  name,
  setter,
  classes,
}) {
  function onThing() {
    const checkedCheckboxes = document.querySelectorAll(
      `#${id} input[type='checkbox']:checked`
    );
    const checkedValues = Array.from(checkedCheckboxes).map(
      (checkbox) => checkbox.value
    );
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
            <input type="checkbox" name={name} value={opt} onChange={onThing} />
            <p style={{ margin: 0 }}>{opt}</p>
          </div>
        );
      })}
    </div>
  );
}
