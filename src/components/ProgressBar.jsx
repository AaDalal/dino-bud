import React from 'react';

const ProgressBar = ({ progress }) => {
  const rectangles = Array.from({ length: 4 }).map((_, i) => (
    <div
      key={i}
      style={{
        height: '15px',
        width: '30px',
        backgroundColor: progress >= (i + 1) * 25 ? '#1ACF62' : '#D4D6E3',
        borderRadius: '5px',
        margin: '5px',
        display: 'inline-block',
      }}
    />
  ));

  return (
    <div style={{ display: 'flex' }}>
      {rectangles}
    </div>
  );
};

export default ProgressBar;
