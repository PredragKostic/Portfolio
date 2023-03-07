import React from "react";
import ResponsiveAppBar from "./components/Navbar";
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import About from './components/About';
import CV from './components/CV';
// import { Home } from "@mui/icons-material";

function App() {
    return (
        <div>
          <ResponsiveAppBar />
          <Routes>
          
            <Route path="/Home" element={<Home />} />
            <Route path="/Technologies" element={<Technologies />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/About" element={<About />} />
            <Route path="/CV" element={<CV />} />
          </Routes>
          
        </div>
      );
}

export default App;