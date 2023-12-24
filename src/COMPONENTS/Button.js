import React from "react";

export function Button1({
  text,
  textSize,
  textColor,
  borderWidth,
  borderColor,
  backgroundColor,
  radius,
  paddingV,
  paddingH,
  width,
  onClick,
  classes,
}) {
  return (
    <button
      className={classes}
      onClick={() => {
        onClick();
      }}
      style={{
        display: "block",
        border: `${borderWidth !== undefined ? borderWidth : "1"}px solid ${
          borderColor !== undefined ? borderColor : "black"
        }`,
        backgroundColor:
          backgroundColor !== undefined ? backgroundColor : "rgba(0,0,0,0)",
        borderRadius: radius !== undefined ? radius : "100px",
        padding: `${paddingV !== undefined ? paddingV : "1em"} ${
          paddingH !== undefined ? paddingH : "2em"
        }`,
        fontSize: textSize !== undefined ? textSize : "1.1em",
        cursor: "pointer",
        width: width !== undefined ? width :"fit_content",
        color: textColor !== undefined ? textColor : "black"
      }}
    >
      {text}
    </button>
  );
}
export function Button2({
  children,
  borderWidth,
  borderColor,
  backgroundColor,
  radius,
  paddingV,
  paddingH,
  width,
  onClick,
  classes,
}) {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className={classes}
      style={{
        border: `${borderWidth !== undefined ? borderWidth : "1"}px solid ${
          borderColor !== undefined ? borderColor : "black"
        }`,
        backgroundColor:
          backgroundColor !== undefined ? backgroundColor : "rgba(0,0,0,0)",
        borderRadius: radius !== undefined ? radius : "100px",
        padding: `${paddingV !== undefined ? paddingV : "1em"} ${
          paddingH !== undefined ? paddingH : "2em"
        }`,
        cursor: "pointer",
        width: width !== undefined ? width : "fit-content",
        
      }}
    >
      {children}
    </div>
  );
}
