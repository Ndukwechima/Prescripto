import React from 'react'
import HeroSection from '../components/HeroSection'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SpecialityMenu />
      <TopDoctors />
    </div>
  )
}

export default Home