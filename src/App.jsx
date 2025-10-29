import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNavbar from './Navbar'
import HeroSection from './Hero/Hero'
import Info from './components/Info'
import ActionCards from './components/Cards/cards'
import Footer from './components/Footer/footer'

function App() {


  return (
    <div className="App  dark:bg-[#FDFCFB] dark:text-white min-h-screen">
      <MyNavbar />
      <HeroSection/>
      <Info/>
      <ActionCards/>
      <Footer/>
    </div>
  )
}

export default App
