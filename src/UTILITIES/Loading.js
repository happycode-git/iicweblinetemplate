import React from "react";

export default function Loading({classes}) {
  return (
    <div
    className={`separate_vertical ${classes}`}
      style={{
        backgroundColor: "rgba(0,0,0,0.7)",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "100vh",
        width: "100vw",
        zIndex: 1500,
      }}
    >
      <div></div>
      <div>
        <h2 className="center_text" style={{fontSize: "2em", color: "white"}}>Loading...</h2>
      </div>
      <div></div>
    </div>
  );
}
