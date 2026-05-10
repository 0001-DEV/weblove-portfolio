import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/work.css'

gsap.registerPlugin(ScrollTrigger)

export default function Work() {
  const sectionRef = useRef(null)
  const projectsRef = useRef([])

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top bottom',
          end: 'top bottom',
          scrub: 0,
          onEnter: () => {
            gsap.to(project, {
              opacity: 1,
              y: 0,
              duration: 0.2
            })
          }
        },
        opacity: 0,
        y: 60,
        duration: 0.2,
        immediateRender: false
      })

      project.addEventListener('mouseenter', () => {
        gsap.to(project.querySelector('.project-image'), {
          scale: 1.05,
          duration: 0.3
        })
      })

      project.addEventListener('mouseleave', () => {
        gsap.to(project.querySelector('.project-image'), {
          scale: 1,
          duration: 0.3
        })
      })
    })
  }, [])

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product filtering, cart management, and secure payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      color: 'gradient-1'
    },
    {
      title: 'Real-time Chat App',
      description: 'Interactive chat application with WebSocket integration, real-time notifications, and user authentication.',
      tech: ['React', 'Express.js', 'Socket.io', 'PostgreSQL'],
      image: '💬',
      color: 'gradient-2'
    },
    {
      title: 'Task Management Dashboard',
      description: 'Collaborative task management with drag-and-drop, real-time updates, and team collaboration features.',
      tech: ['React', 'Node.js', 'GSAP', 'Firebase'],
      image: '✓',
      color: 'gradient-3'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts, real-time updates, and custom analytics.',
      tech: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
      image: '📊',
      color: 'gradient-1'
    },
    {
      title: 'Social Media Feed',
      description: 'Dynamic social feed with infinite scroll, image optimization, and real-time notifications.',
      tech: ['React', 'Node.js', 'Redis', 'AWS S3'],
      image: '📱',
      color: 'gradient-2'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool with real-time streaming and modern API integration.',
      tech: ['React', 'Node.js', 'OpenAI API', 'Express.js'],
      image: '🤖',
      color: 'gradient-3'
    }
  ]

  return (
    <section id="work" ref={sectionRef} className="work section">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Work</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              ref={el => projectsRef.current[idx] = el}
              className={`project-card ${project.color}`}
            >
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href="#" className="project-link">
                  View Project <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
