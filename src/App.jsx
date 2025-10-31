import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNavbar from './Navbar'
import HeroSection from './components/Hero/Hero.jsx'
import Info from './components/Info'
import ActionCards from './components/Cards/cards'
import Footer from './Footer/footer.jsx'
import { Home } from 'lucide-react'
import HomePage from './Pages/Home.jsx'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className="App  dark:bg-[#FDFCFB] dark:text-white min-h-screen">
      <MyNavbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
