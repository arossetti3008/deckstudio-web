// ─────────────────────────────────────────────────────────
//  PROYECTOS — editá este array para agregar/quitar tarjetas
//  driveEmbedUrl: el link de embed de Google Drive
//  Ejemplo: https://drive.google.com/file/d/TU_FILE_ID/preview
// ─────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    tag: 'Gestión',
    title: 'Sistema Odontológico',
    desc: 'Plataforma completa de gestión para clínica dental: agenda, historial clínico, pacientes y facturación.',
    tech: ['React', 'Node.js', 'MongoDB', 'Render'],
    driveEmbedUrl: '', // pegar URL de Drive aquí cuando esté listo
  },
  {
    id: 2,
    tag: 'Stock & Producción',
    title: 'RecetasStock — Panadería',
    desc: 'Sistema de gestión de stock, recetas y órdenes de producción para panadería artesanal con roles de usuario.',
    tech: ['React', 'Express', 'MongoDB'],
    driveEmbedUrl: '',
  },
  {
    id: 3,
    tag: 'Próximamente',
    title: 'Tu próximo proyecto',
    desc: 'Desarrollamos soluciones a medida para cualquier rubro. Hablemos de tu idea.',
    tech: [],
    driveEmbedUrl: '',
    isPlaceholder: true,
  },
]

function VideoPanel({ url, title }) {
  if (url) {
    return (
      <div className="project-video-wrapper">
        <iframe
          src={url}
          title={title}
          allow="autoplay"
          allowFullScreen
        />
      </div>
    )
  }
  return (
    <div className="project-video-wrapper">
      <div className="project-video-placeholder">
        <span className="project-video-placeholder-icon">▶️</span>
        <p>Video próximamente</p>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <h2 className="section-title">Nuestros proyectos</h2>
        <p className="section-subtitle">
          Soluciones reales, en producción, usadas todos los días
        </p>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.id} className="project-card">
              <VideoPanel url={p.driveEmbedUrl} title={p.title} />
              <div className="project-info">
                <span className="project-tag">{p.tag}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                {p.tech.length > 0 && (
                  <div className="project-tech">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
