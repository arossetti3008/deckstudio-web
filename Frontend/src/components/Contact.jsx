import { useState } from 'react'

// ─── CONFIGURACIÓN GOOGLE SHEETS ────────────────────────────
// 1. Seguí la guía para obtener tu SCRIPT_URL de Apps Script
// 2. Reemplazá el string vacío con la URL que te da Google
const SCRIPT_URL = ''
// ────────────────────────────────────────────────────────────

const INITIAL = { nombre: '', email: '', empresa: '', tipo: '', mensaje: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    if (!SCRIPT_URL) {
      // Modo demo sin script configurado
      await new Promise((r) => setTimeout(r, 1200))
      setStatus('success')
      return
    }

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, fecha: new Date().toLocaleString('es-AR') }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-wrapper">

          {/* Info izquierda */}
          <div className="contact-info">
            <h2>¿Tenés un <span className="gradient-text">proyecto</span> en mente?</h2>
            <p>
              Contanos tu idea y te respondemos en menos de 24 hs con una propuesta 
              inicial sin compromiso.
            </p>

            <div className="contact-feature">
              <div className="contact-feature-icon">⚡</div>
              <div className="contact-feature-text">
                <strong>Respuesta rápida</strong>
                <span>Te contactamos en menos de 24 hs</span>
              </div>
            </div>
            <div className="contact-feature">
              <div className="contact-feature-icon">🎯</div>
              <div className="contact-feature-text">
                <strong>100% a medida</strong>
                <span>Sin plantillas, todo construido para vos</span>
              </div>
            </div>
            <div className="contact-feature">
              <div className="contact-feature-icon">🔒</div>
              <div className="contact-feature-text">
                <strong>Soporte incluido</strong>
                <span>Acompañamiento post-entrega garantizado</span>
              </div>
            </div>
          </div>

          {/* Formulario derecha */}
          <div className="contact-form-card">
            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por escribirnos. Te respondemos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre *</label>
                    <input
                      id="nombre" name="nombre" type="text" required
                      placeholder="Tu nombre"
                      value={form.nombre} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="tu@email.com"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="empresa">Empresa / Rubro</label>
                    <input
                      id="empresa" name="empresa" type="text"
                      placeholder="Opcional"
                      value={form.empresa} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tipo">Tipo de proyecto *</label>
                    <select
                      id="tipo" name="tipo" required
                      value={form.tipo} onChange={handleChange}
                    >
                      <option value="">Seleccioná...</option>
                      <option value="Sistema de gestión">Sistema de gestión</option>
                      <option value="Aplicación web">Aplicación web</option>
                      <option value="Automatización">Automatización</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Contanos tu idea *</label>
                  <textarea
                    id="mensaje" name="mensaje" required
                    placeholder="Describí brevemente qué necesitás..."
                    value={form.mensaje} onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#f87171', marginBottom: 16, fontSize: '0.9rem' }}>
                    Hubo un error al enviar. Intentá de nuevo o escribinos directamente.
                  </p>
                )}

                <button
                  type="submit"
                  className="form-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar consulta →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
