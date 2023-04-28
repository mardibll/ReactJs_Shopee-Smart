import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logoshopee from "../asset/logoshopee.png";
import Buttons from "../component/Button";
import TextInputs from "../component/TextInput";
import { IoIosSearch } from "react-icons/io";
const Layout = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <nav
        style={{
          flex: 1,

          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "blue",
          alignItems: "center",
          paddingRight: 30,
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logoshopee}
            alt="eror"
            style={{
              height: 40,
              width: 100,
              borderRadius: 100,
            }}
          />
          <h3>Now pay later</h3>
        </div>
        <div
          style={{
            width: "30%",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Link
            style={{ color: "white", fontWeight: "500", fontSize: 19 }}
            to="/"
          >
            Inspirasi
          </Link>
          <Link
            style={{ color: "white", fontWeight: "500", fontSize: 19 }}
            to="/"
          >
            Marketplace
          </Link>
          <Link
            style={{ color: "white", fontWeight: "500", fontSize: 19 }}
            to="/ProfilScreen"
          >
            Promo
          </Link>
          <Link
            style={{ color: "white", fontWeight: "500", fontSize: 19 }}
            to="/ProfilScreen"
          >
            Pesanan
          </Link>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextInputs
            style={{
              width: 200,
              padding: 8,
              borderRadius: 15,
              // backgroundColor: "rgba(178,229,234,255)",
            }}
            containerstyle={{ paddingRight: 20 }}
          />
          {/* <Buttons
            action={"SignUp"}
            style={{
              width: 100,
              padding: 6,
              borderRadius: 5,
              backgroundColor: "red",
              fontSize: 16,
            }}
          /> */}
        </div>
        {/* <IoIosSearch /> */}
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
