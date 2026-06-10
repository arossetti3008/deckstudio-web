import { useState } from 'react'

const OPORTUNIDADES = [
  {
    icon: '⚙️',
    title: 'Sistemas de Gestión',
    desc: 'Centralizá la agenda de turnos, historiales, stocks o ventas en un sistema personalizado. Todo organizado bajo tu flujo de trabajo diario.'
  },
  {
    icon: '🌐',
    title: 'Aplicaciones Web',
    desc: 'Desarrollamos portales interactivos y plataformas a medida rápidas, responsivas y seguras, listas para conectar con tus clientes.'
  },
  {
    icon: '⚡',
    title: 'Automatización y API',
    desc: 'Eliminá tareas repetitivas de carga manual. Conectamos tus herramientas de uso diario para que trabajen por vos sin errores.'
  }
]

function OportunidadCard({ icon, title, desc }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div 
      className="oportunidad-card"
      onMouseMove={handleMouseMove}
      style={{ '--x': `${coords.x}px`, '--y': `${coords.y}px` }}
    >
      <div className="oportunidad-icon-wrapper">
        <span className="oportunidad-icon">{icon}</span>
      </div>
      <h3 className="oportunidad-title">{title}</h3>
      <p className="oportunidad-desc">{desc}</p>
    </div>
  )
}

export default function Oportunidades() {
  return (
    <section id="desarrollos" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Oportunidades & <span className="gradient-text">Desarrollo a Medida</span>
          </h2>
          <p className="section-subtitle">
            Creamos soluciones digitales únicas y escalables, pensadas específicamente para resolver problemas y optimizar el rendimiento de tu negocio.
          </p>
        </div>

        <div className="oportunidades-grid">
          {OPORTUNIDADES.map((item, index) => (
            <OportunidadCard 
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
