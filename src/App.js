import { BackgroundBeamsDemo } from './components/HeroSection/BackgroundBeamsDemo.js';
import { HeroHighlightDemo } from './components/HeroSection/Hero';
import Navbar from './components/Navbar/Navbar.js';
function App() {
  return (
    <>
      <Navbar />
      <HeroHighlightDemo />
      <BackgroundBeamsDemo />
    </>
  );
}

export default App;
