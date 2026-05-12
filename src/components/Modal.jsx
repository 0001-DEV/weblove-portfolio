import { useEffect, useState } from 'react'

export default function Modal() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    console.log('Modal mounted, isVisible:', isVisible)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const currentScroll = window.scrollY
        
        // Show modal only while in hero section
        if (currentScroll < heroBottom) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`modal-popup ${isVisible ? 'visible' : 'hidden'}`}>
      <button className="modal-close" onClick={() => setIsVisible(false)}>✕</button>
      <img src="/PORTFOLIO-WHATSAPP.png" alt="Portfolio WhatsApp" className="modal-image" />
    </div>
  )
}
