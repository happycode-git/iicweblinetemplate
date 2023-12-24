import React from 'react'

export function Box1({width, height, backgroundColor, radius}) {
  return (
    <div style={{
        width: width !== undefined ? width : "100px",
        height: height !== undefined ? height : "10px",
        backgroundColor: backgroundColor !== undefined ? backgroundColor : "black",
        borderRadius: radius !== undefined ? radius : "0px"
    }}></div>
  )
}
