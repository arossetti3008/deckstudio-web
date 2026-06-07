import { useRef, useState, useEffect, useCallback } from 'react';

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
    features: ['Agenda digital', 'Gestión de pacientes', 'Historias clínicas', 'Presupuestos y recetas'],
    mediaType: 'illustration',
    imageUrl: '/icono_muela.png'
  },
  {
    id: 2,
    tag: 'Stock & Producción',
    title: 'Sistema de Producción Gastronómica',
    desc: 'Software integral para el rubro gastronómico: trazabilidad de inventario, estandarización de recetas y órdenes de trabajo.',
    features: ['Gestión de recetas', 'Control de stock', 'Gestión de pedidos'],
    mediaType: 'illustration',
    imageUrl: '/icono_receta.png'
  }
]

function MediaPanel({ p, isHovered }) {
  if (p.mediaType === 'illustration') {
    return (
      <div className="project-media-wrapper illustration-bg">
        <img 
          src={p.imageUrl} 
          alt={p.title} 
          className={`project-illustration ${isHovered ? 'hovered' : ''}`}
        />
      </div>
    );
  }
  return null;
}

/* ───────────────────────────────────────────────────────── */
/*  PROJECT CARD                                            */
/* ───────────────────────────────────────────────────────── */
function ProjectCardItem({ p }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div 
        className="project-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MediaPanel p={p} isHovered={isHovered} />
        <div className="project-info">
          <span className="project-tag">{p.tag}</span>
          <h3 className="project-title">{p.title}</h3>
          <p className="project-desc">{p.desc}</p>
          {p.features && p.features.length > 0 && (
            <div className="project-tech">
              {p.features.map((f) => (
                <span key={f} className="tech-chip">{f}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
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
            <ProjectCardItem key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
