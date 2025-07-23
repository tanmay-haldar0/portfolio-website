import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="relative w-full h-screen overflow-hidden">
        <Navbar />
        <ParticleBackground />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
