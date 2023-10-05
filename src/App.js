
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Socials from './components/Socials';

function App() {
  return (
<>
<Navbar/>
<Hero/>
<About/>
<div className=" bg-gradient-to-b from-black via-black to-gray-500">
<Portfolio/>
</div>
<Skills/>
<Contact/>
<Socials/>


</>
  );
}

export default App;
