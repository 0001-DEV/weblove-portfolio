import { useEffect, useState } from 'react'

export default function Modal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show modal after 2 seconds on page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`modal-popup ${isVisible ? 'visible' : 'hidden'}`}>
      <button className="modal-close" onClick={() => setIsVisible(false)}>✕</button>
      <img src="/PORTFOLIO-WHATSAPP.png" alt="Portfolio WhatsApp" className="modal-image" />
    </div>
  )
}
