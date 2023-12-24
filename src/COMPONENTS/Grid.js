import React from 'react';

export function Grid({ children, gap }) {
  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: gap !== undefined ? gap : "1em"
  };

  return (
    <div style={gridStyle}>
      {children}
    </div>
  );
}
