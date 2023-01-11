import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  // const [theme, setTheme] = useState(localStorage.theme);
  // const colorTheme = theme === "dark" ? "light" : "dark";
  return (
    <div className='flex flex-col items-center overflow-x-hidden background-color text-color'>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
