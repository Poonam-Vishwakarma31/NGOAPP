import React from 'react'
import HeroSection from '../components/Hero/Hero.jsx'
import Info from '../components/Info'
import ActionCards from '../components/Cards/cards'
import Donate from '../components/Donate/Donate.jsx'
import DonatePopup from '../components/DonateForm'
import Adopt from './Adopt.jsx'
import AdoptPopup from '../components/AdoptForm'
import { useState } from 'react';



const HomePage = () => {
   const [showDonatePopup, setShowDonatePopup] = useState(false);
   const [showAdoptPopup, setShowAdoptPopup] = useState(false);
  return (
    <div>
      <HeroSection onAdoptClick={()=>setShowAdoptPopup(true)} />
      {/* ✅ Conditionally render popup */}
      {showAdoptPopup && (
        <AdoptPopup onClose={() => setShowAdoptPopup(false)} />
      )}
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

