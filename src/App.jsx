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
import NewsLetter from './components/NewsLetter/NewsLetter'
import Footer from './components/Footer/Footer'
import ThemeSwitch from './components/ThemeSwitch'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <div className="wrap">
        {/* <ThemeSwitch /> */}
        <Navbar />
        <Header />
      </div>
      <Purpose />
      <WorkFlow />
      <AboutMe />
      {/* <Testimonial /> */}
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
