import './animacion.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid-container">
        {/* Columna 1: Brand Info */}
        <div className="footer-brand-column">
          <div className="footer-brand-wrapper">
            <div className="ds-icon">
              <div className="ds-bl"></div>
              <span className="ds-txt">DS</span>
              <div className="ds-br"></div>
              <div className="ds-shimmer"></div>
            </div>
          </div>
          <p className="footer-brand-desc">
            Creamos software boutique e identidades digitales robustas para potenciar y automatizar la gestión de tu negocio.
          </p>
        </div>

        {/* Columna 2: Quick Links */}
        <div className="footer-links-column">
          <h4 className="footer-column-title">Navegación</h4>
          <ul className="footer-links-list">
            <li><a href="#inicio" className="footer-link">Inicio</a></li>
            <li><a href="#desarrollos" className="footer-link">Desarrollos</a></li>
            <li><a href="#proyectos" className="footer-link">Proyectos</a></li>
            <li><a href="#contacto" className="footer-link">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contact Info */}
        <div className="footer-contact-column">
          <h4 className="footer-column-title">Contacto</h4>
          <ul className="footer-contact-list">
            <li>📧 www.deckstudio.com.ar</li>
            <li>📍 Villa Mercedes, San Luís, Argentina</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-wrapper">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} DeckStudio. Todos los derechos reservados.</p>
          <p className="footer-tech-tagline">Desarrollo a medida con tecnología de punta</p>
        </div>
      </div>
    </footer>
  )
}
