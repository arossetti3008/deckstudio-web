export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        {/* Placeholder para el nuevo logo diseñado */}
        <div className="hero-logo-container"> 
          <img src="/public/logo-completo-color.svg" alt="[ LOGO ]" />
        </div>

        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Desarrollo de Software Exclusivo
        </div>

        <h1 className="hero-title">
          Tu negocio merece su <span className="gradient-text">propio software</span>
        </h1>

        <p className="hero-subtitle">
          Diseñamos y construimos sistemas de gestión, aplicaciones web y automatizaciones de procesos a la medida de tus necesidades de negocio.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">
            Ver Proyectos
          </a>
          <a href="#desarrollos" className="btn btn-secondary">
            Explorar Desarrollos
          </a>
        </div>
      </div>
    </section>
  )
}
