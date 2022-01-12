import React from "react";
import "./App.css";

import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Portfolio />
        <Resume /> 
        <Skills />    
        <Contact />
        <Footer />
    </main>
  
  );
}

export default App;