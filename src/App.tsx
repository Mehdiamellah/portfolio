import { useEffect, useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { Background } from './components/Ambient'

export type Theme = 'noir' | 'ivory'

const STORAGE_KEY = 'portfolio-theme'

export default function App() {
  // Noir par défaut ; l'utilisateur peut basculer vers l'Ivoire crémeux.
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'ivory' ? 'ivory' : 'noir'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.backgroundColor = ''
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <div
      data-theme={theme}
      style={{ minHeight: '100vh', color: 'var(--ink)', position: 'relative' }}
    >
      <Background />
      <Nav theme={theme} onToggleTheme={() => setTheme(theme === 'noir' ? 'ivory' : 'noir')} />
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
