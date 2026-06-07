import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-logo">
          {/* <img src="/deckstudio-icono-blanco.svg" alt="DeckStudio" className="navbar-logo-img" /> */}
          <span className="navbar-logo-name">Deck<span>Studio</span></span>
        </a>
        <ul className="navbar-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="#contacto" className="navbar-cta">Hablemos →</a>
      </div>
    </nav>
  )
}
