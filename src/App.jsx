import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import FeedSection from './components/FeedSection/FeedSection'
import Purpose from './components/Purpose/Purpose'
import '../src/components/FeedSection/feedSection.css'
import WorkFlow from './components/WorkFlow/WorkFlow'
import Estimate from './components/Estimate/Estimate'
import AboutMe from './components/AboutMe/AboutMe'
import Testimonial from './components/Testimonial/Testimonial'
import Work from './components/Works/Work'

function App() {

  return (
    <>
      <div className="wrap">
        <Navbar />
        <Header />
      </div>
      <FeedSection />
      <Purpose />
      <WorkFlow />
      <Estimate />
      <AboutMe />
      <Testimonial />
      <Work />
    </>
  )
}

export default App
