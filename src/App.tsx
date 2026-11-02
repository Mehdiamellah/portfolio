import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { Background } from './components/Ambient'

export default function App() {
  return (
    <div
      data-theme="noir"
      style={{ minHeight: '100vh', color: 'var(--ink)', position: 'relative' }}
    >
      <Background />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
