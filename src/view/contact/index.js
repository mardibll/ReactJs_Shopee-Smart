import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [widths, setwidths] = useState('')
  console.log(widths);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      setwidths([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [widths]);

  return (
    <div>
      <h2>Width: {windowSize[0]}</h2>

      <h2>Height: {windowSize[1]}</h2>
      <img
      width={widths}
// style={{width:widths}}
            src="https://media.istockphoto.com/id/179517389/id/foto/siswa-belajar-dengan-laptop-di-ruang-kelas.jpg?s=170667a&w=0&k=20&c=Yyr8mAMuRPp-mpRoWAOMHd4oroy6UD6ZaslJd73GesU="
          />
             <h2>Height: {widths}</h2>
    </div>
  );
};

export default Contact;
