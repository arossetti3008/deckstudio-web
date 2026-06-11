export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="footer-content">
          <div className="footer-brand-wrapper">
            
            <div className="footer-logo-placeholder">D</div>
            <span className="footer-brand">deck<span>studio</span></span>
          </div>

          <div className="footer-links">
            <a href="#inicio" className="footer-link">Inicio</a>
            <a href="#desarrollos" className="footer-link">Desarrollos</a>
            <a href="#proyectos" className="footer-link">Proyectos</a>
          </div>
        </div> */}

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} DeckStudio. Todos los derechos reservados.</p>
          <p>Desarrollo a medida con tecnología de punta.</p>
        </div>
      </div>
    </footer>
  )
}
