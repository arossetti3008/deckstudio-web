import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <ul className="navbar-links">
          <li><a href="#inicio" className="navbar-link">Inicio</a></li>
          <li><a href="#desarrollos" className="navbar-link">Desarrollos</a></li>
          <li><a href="#proyectos" className="navbar-link">Proyectos</a></li>
        </ul>
        <div>
          <a href="#proyectos" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Hablemos
          </a>
        </div>
      </div>
    </nav>
  )
}
