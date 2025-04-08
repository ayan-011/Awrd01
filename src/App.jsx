import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const [count, setCount] = useState(0)

const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
      <div className="bg-zinc-900 w-full min-h-screen text-white select-none pointer-events-none  ">
        <Navbar/>
        <LandingPage />
        <Marquee/>
        <About/>
        <Eye/>
        <Featured/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App



// npm install framer-motion
// npm install locomotive-scroll@beta