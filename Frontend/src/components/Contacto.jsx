import { useState } from 'react'

const INITIAL_FORM = {
  nombre: '',
  email: '',
  telefono: '',
  empresa: '',
  mensaje: ''
}

export default function Contacto() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validación
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      setStatus('error')
      setErrorMsg('Por favor completá los campos obligatorios.')
      return
    }

    if (!isValidEmail(form.email)) {
      setStatus('error')
      setErrorMsg('Por favor ingresá un email válido.')
      return
    }

    const endpoint = 'https://script.google.com/macros/s/AKfycbwNugqFPQQOsllM6WICwApCBNLSTU5f-C-eCzL9fVtjf5CSTKchGVJhaeHgBKZgWjyZ/exec'

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (data.result === 'success') {
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Ocurrió un error. Intentá nuevamente.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('No se pudo enviar el mensaje. Verificá tu conexión.')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setErrorMsg('')
  }

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Contacto</div>
          <h2 className="section-title">
            ¿Tenés un proyecto? <span className="gradient-text">Hablemos</span>
          </h2>
          <p className="section-subtitle">
            Contanos tu idea y te respondemos a la brevedad!
          </p>
        </div>

        <div className="contacto-wrapper">
          {status === 'success' ? (
            <div className="contacto-success">
              <div className="success-icon">✓</div>
              <h3 className="success-title">¡Mensaje enviado!</h3>
              <p className="success-desc">
                Recibimos tu consulta. Te vamos a contactar a la brevedad.
              </p>
              <button
                className="btn btn-secondary success-btn"
                onClick={resetForm}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="contacto-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-nombre" className="form-label">
                    Nombre <span className="form-required">*</span>
                  </label>
                  <input
                    id="contact-nombre"
                    type="text"
                    name="nombre"
                    className="form-input"
                    placeholder="Tu nombre completo"
                    value={form.nombre}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email <span className="form-required">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-telefono" className="form-label">
                    Teléfono
                  </label>
                  <input
                    id="contact-telefono"
                    type="tel"
                    name="telefono"
                    className="form-input"
                    placeholder="..."
                    value={form.telefono}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-empresa" className="form-label">
                    Empresa
                  </label>
                  <input
                    id="contact-empresa"
                    type="text"
                    name="empresa"
                    className="form-input"
                    placeholder="Nombre de tu empresa o negocio"
                    value={form.empresa}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-mensaje" className="form-label">
                  Mensaje <span className="form-required">*</span>
                </label>
                <textarea
                  id="contact-mensaje"
                  name="mensaje"
                  className="form-input form-textarea"
                  placeholder="Contanos brevemente qué necesitás..."
                  rows="5"
                  value={form.mensaje}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'error' && (
                <div className="form-error-msg">
                  <span className="error-icon">⚠</span> {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contacto-submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
