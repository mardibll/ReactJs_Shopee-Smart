import React from "react";

const Buttons = ({ action, style }) => {
  return (
    <div>
      <button style={style}>{action}</button>
    </div>
  );
};

export default Buttons;
