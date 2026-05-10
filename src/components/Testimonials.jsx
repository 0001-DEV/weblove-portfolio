import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/testimonials.css'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const sectionRef = useRef(null)
  const testimonialsRef = useRef([])

  useEffect(() => {
    testimonialsRef.current.forEach((testimonial, index) => {
      gsap.from(testimonial, {
        scrollTrigger: {
          trigger: testimonial,
          start: 'top bottom',
          end: 'top bottom',
          scrub: 0,
          onEnter: () => {
            gsap.to(testimonial, {
              opacity: 1,
              x: 0,
              duration: 0.2
            })
          }
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.2,
        immediateRender: false
      })
    })
  }, [])

  const testimonials = [
    {
      text: 'Weblove delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and performance optimization was outstanding.',
      author: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      avatar: '👩‍💼'
    },
    {
      text: 'Working with Weblove was a game-changer. The animations and UX design transformed our product. Highly recommended for any serious project.',
      author: 'Michael Chen',
      role: 'Product Manager, Digital Co',
      avatar: '👨‍💼'
    },
    {
      text: 'The backend architecture and API design were top-notch. Weblove understood our requirements perfectly and delivered on time.',
      author: 'Emma Davis',
      role: 'CTO, Innovation Labs',
      avatar: '👩‍💻'
    }
  ]

  return (
    <section ref={sectionRef} className="testimonials section">
      <div className="container">
        <h2 className="section-title">
          What Clients <span className="gradient-text">Say</span>
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              ref={el => testimonialsRef.current[idx] = el}
              className="testimonial-card"
            >
              <div className="testimonial-stars">
                {'⭐'.repeat(5)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
