import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./view/Layout";
import HomeScreen from "./view/homeScreen";
import ProfilScreen from "./view/profilScreen";

function App() {
  return (
    <div className="container">
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h2>Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam turpis et nibh pharetra auctor.</p>
      </section>
      <section>
        <h2>Section 2</h2>
        <p>Nullam quis sapien eu purus mattis sagittis eget ac urna. Sed imperdiet diam eu libero pretium, id luctus nibh mattis.</p>
      </section>
      <section>
        <h2>Section 3</h2>
        <p>Mauris luctus suscipit elit, non euismod velit vestibulum non. Sed non enim lacinia, malesuada odio eget, dignissim nibh.</p>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 My Website</p>
    </footer>
  </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<HomeScreen />} />
    //       <Route path="ProfilScreen" element={<ProfilScreen />} />
    //       {/* <Route path="contact" element={<Contact />} />
    //     <Route path="*" element={<NoPage />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
