import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export default function App() {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#ededed' }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
