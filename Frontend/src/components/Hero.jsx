export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-container-grid">
        {/* Columna Izquierda: Información de la Marca */}
        <div className="hero-info-side">
          {/* Logo visible solo en mobile, antes del título */}
          <div className="hero-mobile-logo">
            <img src="/logo-completo-color.svg" alt="DeckStudio" />
          </div>

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Desarrollo de Software Boutique
          </div>

          <h1 className="hero-title">
            Tu negocio merece su <span className="gradient-text">propio software</span>
          </h1>

          <p className="hero-subtitle">
            Diseñamos y construimos sistemas de gestión, portales web y automatizaciones de procesos a la medida exacta de tus necesidades.
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

        {/* Columna Derecha: Logo Grande (solo desktop) */}
        <div className="hero-visual-side hero-visual-desktop">
          <div className="hero-logo-float">
            <img src="/logo-completo-color.svg" alt="DeckStudio" className="hero-logo-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
