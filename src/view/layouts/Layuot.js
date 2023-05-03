import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";
const Layuot = () => {
  return (
    <div className="container" style={{}}>
      <div className="title" style={{ backgroundColor: "aqua" }}>
        <div>
          <h2 className="text_title">Mardi Migrasi Buulolo</h2>
        </div>
        <div className="navLink">
          <div className="nav_1">
            <ul>
              <Link className="link" to="/">
                Home
              </Link>
            </ul>
            <ul>
              <Link className="link" to="/ProfilScreen">
                Tentang kami
              </Link>
            </ul>
          </div>
          <div className="nav_1">
            <ul>
              <Link className="link" to="/Layanan">
                Layanan
              </Link>
            </ul>
            <ul>
              <Link className="link" to="/Portofolio">
                Portofolio
              </Link>
            </ul>
          </div>
          <div className="nav_1">
            <ul>
              <Link className="link" to="/Contact">
                Contact
              </Link>
            </ul>
            <ul>
              <Link className="link" to="/Blogs">
                Blogs
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layuot;
