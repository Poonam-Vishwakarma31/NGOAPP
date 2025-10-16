import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNavbar from './Navbar'
import HeroSection from './Hero/Hero'
import Info from './components/Info'

function App() {


  return (
    <div className="App  dark:bg-gray-50 dark:text-white min-h-screen">
      <MyNavbar />
      <HeroSection/>
      <Info/>
    </div>
  )
}

export default App
