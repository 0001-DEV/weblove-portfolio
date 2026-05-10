import { useEffect, useState } from 'react'
import gsap from 'gsap'
import '../styles/modal.css'

export default function Modal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      gsap.from('.modal-popup', {
        duration: 0.6,
        x: 400,
        y: 400,
        opacity: 0,
        ease: 'back.out'
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      const modalPopup = document.querySelector('.modal-popup')
      
      if (heroSection && modalPopup && isVisible) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const currentScroll = window.scrollY

        // Show modal only while completely within hero section
        if (currentScroll < heroBottom) {
          gsap.to(modalPopup, {
            opacity: 1,
            pointerEvents: 'auto',
            duration: 0.3
          })
        } else {
          gsap.to(modalPopup, {
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.3
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  const closeModal = () => {
    gsap.to('.modal-popup', {
      duration: 0.4,
      x: 400,
      y: 400,
      opacity: 0,
      ease: 'back.in',
      onComplete: () => setIsVisible(false)
    })
  }

  if (!isVisible) return null

  return (
    <div className="modal-popup">
      <button className="modal-close" onClick={closeModal}>✕</button>
      <img src="/PORTFOLIO-WHATSAPP.png" alt="Portfolio WhatsApp" className="modal-image" />
    </div>
  )
}
