import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Work from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
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
