import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/services.css'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'top bottom',
          scrub: 0,
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.2
            })
          }
        },
        opacity: 0,
        y: 50,
        duration: 0.2,
        immediateRender: false
      })
    })
  }, [])

  const services = [
    {
      icon: '⚛️',
      title: 'Frontend Development',
      description: 'Building responsive, interactive UIs with React, TypeScript, and modern CSS. Focused on performance and user experience.'
    },
    {
      icon: '🔧',
      title: 'Backend Development',
      description: 'Creating scalable APIs with Node.js and Express.js. Database design, authentication, and real-time features.'
    },
    {
      icon: '✨',
      title: 'Animation & Interactions',
      description: 'Crafting smooth, engaging animations with GSAP. Micro-interactions that delight users and enhance UX.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your site looks perfect on all devices. Optimized for all screen sizes.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Optimizing load times, reducing bundle size, and improving Core Web Vitals for better SEO.'
    },
    {
      icon: '🚀',
      title: 'Deployment & DevOps',
      description: 'Setting up CI/CD pipelines, Docker containerization, and cloud deployment on AWS or similar platforms.'
    }
  ]

  return (
    <section id="services" ref={sectionRef} className="services section">
      <div className="container">
        <h2 className="section-title">
          What I <span className="gradient-text">Offer</span>
        </h2>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
