import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/about.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'top bottom',
        scrub: 0,
        onEnter: () => {
          gsap.to(contentRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.2
          })
        }
      },
      opacity: 0,
      x: -100,
      duration: 0.2,
      immediateRender: false
    })

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'top bottom',
        scrub: 0,
        onEnter: () => {
          gsap.to(imageRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.2
          })
        }
      },
      opacity: 0,
      x: 100,
      duration: 0.2,
      immediateRender: false
    })
  }, [])

  return (
    <section id="about" ref={sectionRef} className="about section">
      <div className="container about-container">
        <div ref={contentRef} className="about-content">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="about-text">
            I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless digital experiences. With 5+ years of experience, I've worked with startups and enterprises to build scalable web applications that combine stunning interfaces with robust backend architecture.
          </p>

          <p className="about-text">
            My expertise spans across React, Node.js, Express.js, and modern web technologies. I'm obsessed with performance optimization, clean code, and creating animations that delight users. Every project I work on is an opportunity to push boundaries and explore new possibilities.
          </p>
        </div>

        <div ref={imageRef} className="about-visual">
          <div className="cube-container">
            <div className="cube">
              <div className="cube-face front">
                <div className="face-content">
                  <div className="face-icon">⚛️</div>
                  <p>React</p>
                </div>
              </div>
              <div className="cube-face back">
                <div className="face-content">
                  <div className="face-icon">🔧</div>
                  <p>Backend</p>
                </div>
              </div>
              <div className="cube-face right">
                <div className="face-content">
                  <div className="face-icon">✨</div>
                  <p>Animations</p>
                </div>
              </div>
              <div className="cube-face left">
                <div className="face-content">
                  <div className="face-icon">🚀</div>
                  <p>Performance</p>
                </div>
              </div>
              <div className="cube-face top">
                <div className="face-content">
                  <div className="face-icon">💻</div>
                  <p>Full Stack</p>
                </div>
              </div>
              <div className="cube-face bottom">
                <div className="face-content">
                  <div className="face-icon">🎨</div>
                  <p>Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
