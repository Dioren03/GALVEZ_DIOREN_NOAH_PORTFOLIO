
import './App.css'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection'
import NavBarSection from './components/NavBarSection'
import FooterSection from './components/FooterSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSetion'



function App() {

  return (
    <>  
      <NavBarSection/>
      <HeroSection/>
      <SkillsSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection />
      <FooterSection/>
    </>
  )
}

export default App
