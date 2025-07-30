import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Navbar from "./assets/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./assets/components/Footer";

function App() {
  return (
    // Routing (Navlink and Link)
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="home"
            element={<Home fname="Suvedha" sname="Pillai" />}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
