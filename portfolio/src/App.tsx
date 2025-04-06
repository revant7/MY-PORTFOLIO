import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./pages/Home";


function App() {

  const projectRef = useRef(null);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (

    <Router>

      <Hero />
      <Navbar onProjectClick={scrollToProjects} />
      <Routes>
        <Route path="/" element={<><Home /><About /><Projects ref={projectRef} /></>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
