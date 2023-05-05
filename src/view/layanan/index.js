import React from "react";
import UsesWindows from "../../component/UsesWindows";

const Layanan = () => {
  const windowSize = UsesWindows();
  return (
    <div>
      <h1>The breakpoint for current width is: </h1>
      <span style={{ fontSize: "30px" }}>{windowSize}</span>
    </div>
  );
};

export default Layanan;
