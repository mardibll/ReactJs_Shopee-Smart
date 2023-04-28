import React from "react";

const TextInputs = ({ style, containerstyle }) => {
  return (
    <div style={containerstyle}>
      <input style={style} type="text" name="name" />
    </div>
  );
};

export default TextInputs;
