import React from "react";

export function Group({
  children,
  height,
  backgroundColor,
  width,
  maxWidth,
  padding,
  classes,
}) {
  return (
    <div
      className={classes}
      style={{
        backgroundColor:
          backgroundColor !== undefined ? backgroundColor : "rgba(0,0,0,0)",
        width: width !== undefined ? width : "100%",
        height: height !== undefined ? height : "100%",
        boxSizing: "border-box",
        maxWidth: maxWidth,
        padding: padding !== undefined ? padding : 0
      }}
    >
      {children}
    </div>
  );
}
