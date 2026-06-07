export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        {/* ── Logo izquierda ── */}
        <div className="hero-logo-side fade-in-up delay-2">
          <div className="hero-logo-container">
            <img style={{ opacity: 0.75 }} src="/deckstudio-icono-blanco.svg" alt="Logo DeckStudio" className="hero-main-logo" />
            <img style={{marginLeft: '10px', filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))'}} src="/deckstudio-nombre.svg" alt="Logo DeckStudio" className="hero-main-logo" />
          </div>
        </div>

        {/* ── Texto derecha ── */}
        <div>
          <div className="hero-badge fade-in-up delay-3">
            <span className="hero-badge-dot" />
            Soluciones digitales a medida
          </div>

          <h1 className="hero-title fade-in-up delay-3">
            Transformamos <span className="gradient-text">ideas</span> en<br />
            software real
          </h1>

          <p className="hero-desc fade-in-up delay-4">
            Desarrollamos sistemas de gestión, aplicaciones web y automatizaciones 
            pensadas para hacer crecer tu negocio. Rápido, robusto y a tu medida.
          </p>

          <div className="hero-actions fade-in-up delay-4">
            <a href="#proyectos" className="btn-primary">Ver proyectos ↓</a>
            <a href="#contacto" className="btn-outline">Hablemos</a>
          </div>

          <div className="hero-stats fade-in-up delay-4">
            <div>
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">Custom</div>
            </div>
            <div>
              <div className="hero-stat-value">Full</div>
              <div className="hero-stat-label">Stack</div>
            </div>
            <div>
              <div className="hero-stat-value">ARG</div>
              <div className="hero-stat-label">Based</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
