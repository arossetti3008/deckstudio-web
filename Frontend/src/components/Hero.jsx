import './animacion.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-container-grid">
        <div className="hero-info-side">




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
          <div className="hero-logo-composite">
            <div className="hero-composite-icon-wrapper">
              <div className="ds-icon hero-composite-icon">
                <div className="ds-bl"></div>
                <span className="ds-txt">DS</span>
                <div className="ds-br"></div>
                <div className="ds-shimmer"></div>
              </div>
            </div>
            <img src="/deckstudio-wordmark-dark.svg" alt="DeckStudio" className="hero-composite-text" />
          </div>
        </div>
      </div>
    </section>
  )
}
