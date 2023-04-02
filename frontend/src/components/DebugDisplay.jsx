import React from 'react';

function DebugDisplay({ data }) {
  return (
    <div
    style={{
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f5f5f5",
    }}
    >
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
    </div>
  );
}

export default DebugDisplay;