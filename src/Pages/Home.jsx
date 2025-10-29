import React from 'react'
import HeroSection from '../components/Hero/Hero.jsx'
import Info from '../components/Info'
import ActionCards from '../components/Cards/cards'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Info/>
      <ActionCards/> 
    </div>
  )
}

export default HomePage

