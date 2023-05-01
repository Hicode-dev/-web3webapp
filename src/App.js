import logo from './logo.svg';
import './App.css';
import './App.css'
import Body from './components/Body1'
import Box from './components/Box'
import Box2 from './components/Box2.'
import Card from './components/Card'
import Companies from './components/Companies'
import CryptoProfile from './components/CryptoProfile'
import Footer from './components/Footer'
import Fot from './components/Fot'
import Getstarted from './components/Getstarted'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Slider from './components/Slider'
import AOS from 'aos'
import 'aos/dist/aos.css'
function App() {
  AOS.init({
    duration: 2000, // values from 0 to 3000, with step 50ms
    // easing: 'ease',
  });
  return (
   <>
<div className="bg-[#010725] overflow-hidden">
<Navbar />
<Body />
<Companies />
<CryptoProfile />
<Box />
<Box2 />
<Newsletter />
<Slider />
<Getstarted />
<Card />
<Footer />
<Fot />
</div>
   </>
  )
}

export default App;
