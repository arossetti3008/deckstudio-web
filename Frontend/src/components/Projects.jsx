const PROJECTS = [
  {
    id: 1,
    title: 'Gestión para Consultorios Clínicos',
    desc: 'Sistema integral diseñado para la administración de turnos, historias clínicas, odontogramas y obras sociales de forma ágil.',
    tag: 'Sistema de Gestión',
    img: "/LogoOdonto.png",
    tech: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    id: 2,
    title: 'Producción Gastronómica y Recetas',
    desc: 'Plataforma optimizada para el control de inventario de ingredientes, costeo dinámico de recetas, planificación de producción y seguimiento de pedidos.',
    tag: 'Sistema de Gestión',
    img: "/LogoGastro.png",
    tech: ['React', 'Vite', 'Express', 'MongoDB']
  },
  {
    id: 3,
    title: 'Control de Stock y Multi-Depósitos',
    desc: 'Solución multi-sucursal para la gestión de catálogo de productos, registro de movimientos de inventario (ingresos, egresos, transferencias) y trazabilidad completa de stock.',
    tag: 'Sistema de Gestión',
    img: "/LogoStock.png",
    tech: ['React', 'Vite', 'Express', 'MongoDB']
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
                {p.img ? (
                  <img src={p.img} alt={p.title} className="project-card-image" />
                ) : (
                  <div className="project-logo-placeholder">
                    [ Logo ]
                  </div>
                )}
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
