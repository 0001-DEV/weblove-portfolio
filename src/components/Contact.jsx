import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'

gsap.registerPlugin(ScrollTrigger)

// Initialize EmailJS - Replace with your actual PUBLIC_KEY
emailjs.init('YOUR_PUBLIC_KEY_HERE')

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'top bottom',
        scrub: 0,
        onEnter: () => {
          gsap.to(formRef.current, {
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
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    try {
      const response = await emailjs.send(
        'YOUR_SERVICE_ID_HERE',
        'YOUR_TEMPLATE_ID_HERE',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'loveolaoye2@gmail.com'
        }
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="contact section">
      <div className="container contact-container">
        <div className="contact-header">
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:loveolaoye2@gmail.com">loveolaoye2@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+2348149706739">+234 814 970 6739</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/0001-DEV" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="submit-success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="submit-error">
                ✗ Failed to send message. Please try again or contact me directly.
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
