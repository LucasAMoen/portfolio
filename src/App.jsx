import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
