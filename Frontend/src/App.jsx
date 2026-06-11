import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Oportunidades from './components/Oportunidades'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app" style={{ position: 'relative' }}>
      {/* Fondo global con blobs difusos */}
      <div className="global-bg">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />
      </div>
      <Navbar />
      <main style={{ position: 'relative' }}>
        <Hero />
        <Oportunidades />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
