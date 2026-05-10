import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/work.css'

gsap.registerPlugin(ScrollTrigger)

export default function Work() {
  const sectionRef = useRef(null)
  const projectsRef = useRef([])
  const titleRef = useRef(null)

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 80%',
        scrub: 0,
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4
          })
        }
      },
      opacity: 0,
      y: 30,
      duration: 0.4,
      immediateRender: false
    })

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
              duration: 0.3,
              delay: index * 0.1
            })
          }
        },
        opacity: 0,
        y: 60,
        duration: 0.3,
        immediateRender: false
      })

      project.addEventListener('mouseenter', () => {
        gsap.to(project, {
          boxShadow: '0 30px 60px rgba(0, 217, 255, 0.3)',
          duration: 0.3
        })
        gsap.to(project.querySelector('.project-image'), {
          scale: 1.1,
          duration: 0.3
        })
        gsap.to(project.querySelector('.project-content'), {
          y: -10,
          duration: 0.3
        })
      })

      project.addEventListener('mouseleave', () => {
        gsap.to(project, {
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          duration: 0.3
        })
        gsap.to(project.querySelector('.project-image'), {
          scale: 1,
          duration: 0.3
        })
        gsap.to(project.querySelector('.project-content'), {
          y: 0,
          duration: 0.3
        })
      })
    })
  }, [])

  const projects = [
    {
      title: 'Pixlure',
      description: 'Full-stack image marketplace with advanced filtering, secure payment integration, and real-time notifications.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🖼️',
      color: 'gradient-1',
      link: 'https://github.com/0001-DEV/Pixlure'
    },
    {
      title: 'Real-time Chat App',
      description: 'Interactive chat application with WebSocket integration, real-time notifications, and user authentication.',
      tech: ['React', 'Express.js', 'Socket.io', 'PostgreSQL'],
      image: '💬',
      color: 'gradient-2',
      link: 'https://github.com/0001-DEV/company-app'
    },
    {
      title: 'Task Management Dashboard',
      description: 'Collaborative task management with drag-and-drop, real-time updates, and team collaboration features.',
      tech: ['React', 'Node.js', 'GSAP', 'Firebase'],
      image: '✓',
      color: 'gradient-3',
      link: 'https://github.com/0001-DEV/company-app'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts, real-time updates, and custom analytics.',
      tech: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
      image: '📊',
      color: 'gradient-1',
      link: 'https://github.com/0001-DEV/company-app'
    },
    {
      title: 'Quick Map',
      description: 'Bulk vCard and QR code generation tool for mapping and contact distribution.',
      tech: ['React', 'Node.js', 'QR Code', 'vCard'],
      image: '🗺️',
      color: 'gradient-2',
      link: 'https://github.com/0001-DEV/quick-map'
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
        <h2 ref={titleRef} className="section-title">
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
                <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="project-link">
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
