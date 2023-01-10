import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/DarkMode/DarkMode';
import Switcher from './components/Switcher/Switcher';
import './App.css';
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.theme);
  // const colorTheme = theme === "dark" ? "light" : "dark";
  return (
    <div className='flex flex-col items-center overflow-x-hidden background-color text-color'>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer theme={theme} setTheme={setTheme}/>
      <Switcher />
    </div>
  );
}

export default App;
