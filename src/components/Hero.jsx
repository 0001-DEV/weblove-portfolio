import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../styles/hero.css'

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    // Floating animation for title only
    gsap.to(titleRef.current, {
      duration: 5,
      y: -15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // Animate background elements
    gsap.to('.hero-bg-element-1', {
      duration: 20,
      x: 50,
      y: -50,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    gsap.to('.hero-bg-element-2', {
      duration: 25,
      x: -50,
      y: 50,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }, [])

  return (
    <section id="hero" className="hero section">
      <div className="hero-bg-element hero-bg-element-1"></div>
      <div className="hero-bg-element hero-bg-element-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div ref={badgeRef} className="hero-badge">
            <span>✨ Welcome to my portfolio</span>
          </div>

          <h1 ref={titleRef} className="hero-title">
            I Build Digital
            <br />
            <span>Experiences</span>
          </h1>

          <p ref={subtitleRef} className="hero-subtitle">
            Full-stack developer crafting beautiful, performant web applications with React, Node.js & Express.js. Specializing in smooth animations and seamless user experiences.
          </p>

          <div ref={ctaRef} className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={() => {
                document.getElementById('work').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>View My Work</span>
              <span className="btn-arrow">→</span>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>Get In Touch</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">⚛️</div>
            <div className="card-text">React Expert</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🚀</div>
            <div className="card-text">Performance</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">✨</div>
            <div className="card-text">Animations</div>
          </div>
          <div className="floating-card card-4">
            <div className="card-icon">💻</div>
            <div className="card-text">Full Stack</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-icon">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  )
}
