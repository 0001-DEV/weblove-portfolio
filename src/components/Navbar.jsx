import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../styles/navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && menuRef.current && isOpen) {
        if (!navRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
          setIsOpen(false)
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="/icon-_2_.ico" alt="weblove" className="logo-icon" />
        </div>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`} ref={menuRef}>
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://wa.me/2348149706739" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Let's Talk</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
