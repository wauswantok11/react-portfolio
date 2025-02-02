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
// import AnimatedCursor from 'react-animated-cursor'
import PortfolioPage from './components/Pages/PortfolioPage/PortfolioPage'
import SkillsPage from './components/Pages/SkillPage/SkillsPage';
function App() {
  const [page, setPage] = useState("HomePage"); // State to manage page selection
  const [language, setLanguage] = useState("thai");
  return (
    <> 
      <Navber page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
      {
        page === "portfolioPage" ? <PortfolioPage language={language} /> :
          page === "SkillsPage" ? <SkillsPage /> :
            page === "HomePage" ? (
              <>
                <Hero language={language} />
                <Skill language={language}/>
                <Job language={language} />
                <Portfolio language={language}/>
                <Number language={language}/>
                <Biz language={language}/>
                <Contact language={language}/>
                <Footer />
              </>
            ) : <>
              <Hero language={language} />
              <Skill language={language}/>
              <Job language={language}/>
              <Portfolio language={language}/>
              <Number language={language}/>
              <Biz language={language}/>
              <Contact language={language}/>
              <Footer />
            </>
      }

    </>
  )
}

export default App
