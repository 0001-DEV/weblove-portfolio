import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'
import './styles/global.css'

function App() {
  useEffect(() => {
    // Prevent scroll on load
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
      <Modal />
    </div>
  )
}

export default App
