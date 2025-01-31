import './App.css'
import React, { useState } from "react";
import Navber from './components/Navber/navber'
import Hero from './components/Hero/hero' 
import Skill from './components/skills/skill'
import Job from './components/Job/job'
import Portfolio from './components/portfolio/portfolio'
import Number from './components/Number/number'
import Biz from './components/biz/biz'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import AnimatedCursor from 'react-animated-cursor'
import PortfolioPage from './components/Pages/PortfolioPage/PortfolioPage'
import SkillsPage from './components/Pages/SkillPage/SkillsPage';
function App() { 
  const [page, setPage] = useState(null); // State to manage page selection

  return (
    <> 
     <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <Navber page={page} setPage={setPage} />

    {/* Conditionally Render Pages */}
    {
        page === "portfolioPage" ? <PortfolioPage /> :
        page === "SkillsPage" ? <SkillsPage /> :
          page === "HomePage" ? (
            <>
              <Hero />
              <Skill />
              <Job />
              <Portfolio />
              <Number />
              <Biz />
              <Contact />
              <Footer />
            </>
          ) : <>
            <Hero />
            <Skill />
            <Job />
            <Portfolio />
            <Number />
            <Biz />
            <Contact />
            <Footer />
          </>}

      {/* <Navber /> 
      <Hero />
      <Skill />
      <Job />
      <Portfolio />
      <Number />
      <Biz />
      <Contact /> 
      <Footer /> */}
    </>
  )
}

export default App
