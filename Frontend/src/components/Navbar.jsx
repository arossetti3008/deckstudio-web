import { useState, useEffect } from 'react'
import './animacion.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Desktop: logo horizontal (aparece al hacer scroll) */}
        <a href="#inicio" className="navbar-logo navbar-logo-desktop">
          <img src="/deckstudio-horizontal-light.svg" alt="DeckStudio" className="navbar-logo-img" />
        </a>

        {/* Mobile: ícono DS siempre visible */}
        <a href="#inicio" className="navbar-mobile-brand">
          <div className="ds-icon navbar-mobile-icon">
            <div className="ds-bl"></div>
            <span className="ds-txt">DS</span>
            <div className="ds-br"></div>
            <div className="ds-shimmer"></div>
          </div>
        </a>

        <ul className="navbar-links">
          <li><a href="#inicio" className="navbar-link">Inicio</a></li>
          <li><a href="#desarrollos" className="navbar-link">Desarrollos</a></li>
          <li><a href="#proyectos" className="navbar-link">Proyectos</a></li>
          <li><a href="#contacto" className="navbar-link">Contacto</a></li>
        </ul>
        <div className="navbar-actions">
          <a href="#contacto" className="btn btn-primary navbar-btn">
            Hablemos
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`navbar-hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú de navegación"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <a href="#inicio" className="mobile-menu-link" onClick={closeMobileMenu}>Inicio</a>
        <a href="#desarrollos" className="mobile-menu-link" onClick={closeMobileMenu}>Desarrollos</a>
        <a href="#proyectos" className="mobile-menu-link" onClick={closeMobileMenu}>Proyectos</a>
        <a href="#contacto" className="mobile-menu-link" onClick={closeMobileMenu}>Contacto</a>
        <a href="#contacto" className="btn btn-primary mobile-menu-btn" onClick={closeMobileMenu}>Hablemos</a>
      </div>
    </nav>
  )
}
