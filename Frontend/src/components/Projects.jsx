const PROJECTS = [
  {
    id: 1,
    title: 'Gestión para Clínica Dental',
    desc: 'Sistema integral para administrar turnos, historias clínicas, odontogramas y facturación de forma ágil.',
    tag: 'Sistema de Gestión',
    tech: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 2,
    title: 'Producción Gastronómica',
    desc: 'Plataforma para control de inventarios de ingredientes, cálculo de costos de recetas y seguimiento de órdenes.',
    tag: 'Plataforma Web',
    tech: ['React', 'Vite', 'PostgreSQL', 'Sequelize']
  }
]

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Trabajos <span className="gradient-text">Realizados</span>
          </h2>
          <p className="section-subtitle">
            Explorá algunos de los sistemas y plataformas web a medida que hemos desarrollado para solucionar problemas de negocio reales.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.id} className="project-card">
              <div className="project-image-wrapper">
                {/* Espacio reservado para el logo del proyecto */}
                <div className="project-logo-placeholder">
                  [ Logo ]
                </div>
              </div>
              <div className="project-info">
                <span className="project-tag">{p.tag}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
