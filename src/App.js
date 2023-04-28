import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./view/Layout";
import HomeScreen from "./view/homeScreen";
import ProfilScreen from "./view/profilScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="ProfilScreen" element={<ProfilScreen />} />
          {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
