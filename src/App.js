import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layuot from "./view/layouts/Layuot";
import Home from "./view/homeScreen";
import ProfilScreen from "./view/profilScreen/index";
import Blogs from "./view/blog";
import Layanan from "./view/layanan";
import Portofolio from "./view/portofolio";
import Contact from "./view/contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<Home />} />
          <Route path="ProfilScreen" element={<ProfilScreen />} />
          <Route path="Layanan" element={<Layanan />} />
          <Route path="Portofolio" element={<Portofolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
