import './App.css'
import Navber from './components/Navber/navber'
import Hero from './components/Hero/hero' 
import Skill from './components/skills/skill'
import Job from './components/Job/job'
import Portfolio from './components/portfolio/portfolio'
import Number from './components/Number/number'
import Biz from './components/biz/biz'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
function App() { 
  return (
    <> 
      <Navber /> 
      <Hero />
      <Skill />
      <Job />
      <Portfolio />
      <Number />
      <Biz />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App
