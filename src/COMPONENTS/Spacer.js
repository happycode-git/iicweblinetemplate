import React from "react";

export function Spacer({ height }) {
  return <div style={{ height: height !== undefined ? height : "10vh" }}></div>;
}
