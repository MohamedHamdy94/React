import './App.css';
import Hero from './hero';
import Skills from './skills';
import Protofolio from './protofolio';
import AboutMy from './aboutMy';
import Footre from './footer';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <AboutMy></AboutMy>
      <Skills></Skills>
      <Protofolio></Protofolio>
      <Footre></Footre>
    </div>
  );
}

export default App;
