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

const THEMES = [
  { id: 'ivory', label: '01 · Ivoire' },
  { id: 'noir', label: '02 · Noir' },
  { id: 'studio', label: '03 · Atelier' },
] as const

type ThemeId = (typeof THEMES)[number]['id']

const STORAGE_KEY = 'portfolio-theme'

export default function App() {
  const [theme, setTheme] = useState<ThemeId>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return THEMES.some((t) => t.id === saved) ? (saved as ThemeId) : 'ivory'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <div
      data-theme={theme}
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

      {/* sélecteur de DA — à retirer une fois la DA choisie */}
      <div className="theme-switcher" role="group" aria-label="Choix de la direction artistique">
        {THEMES.map((t) => (
          <button
            key={t.id}
            data-active={theme === t.id}
            onClick={() => setTheme(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  )
}
