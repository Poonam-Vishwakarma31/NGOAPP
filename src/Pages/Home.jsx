import React from 'react'
import HeroSection from '../components/Hero/Hero.jsx'
import Info from '../components/Info'
import ActionCards from '../components/Cards/cards'
import Donate from '../components/Donate/Donate.jsx'
import DonatePopup from '../components/DonateForm'
import { useState } from 'react';



const HomePage = () => {
   const [showDonatePopup, setShowDonatePopup] = useState(false);
  return (
    <div>
      <HeroSection/>
      <Info/>
      <ActionCards onDonateClick={() => setShowDonatePopup(true)} /> 
      <Donate onDonateClick={() => setShowDonatePopup(true)} />
      {/* ✅ Conditionally render popup */}
      {showDonatePopup && (
        <DonatePopup onClose={() => setShowDonatePopup(false)} />
      )}
    </div>
  )
}

export default HomePage

