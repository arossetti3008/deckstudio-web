export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          Deck<span>Studio</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} DeckStudio. Todos los derechos reservados.
        </p>
        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
