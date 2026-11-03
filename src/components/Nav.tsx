import { useState } from 'react'
import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../i18n'
import { NAV } from '../content'
import { MoonIcon, SunIcon } from './Icons'
import type { Theme } from '../App'

interface NavProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  const { lang, setLang } = useLang()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 34 })
  const [open, setOpen] = useState(false)

  const toggleButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 26,
    border: '1px solid var(--hairline)',
    borderRadius: 999,
    background: 'transparent',
    color: 'var(--ink-muted)',
    cursor: 'pointer',
    transition: 'color 0.25s ease, border-color 0.25s ease',
  }

  const hoverIn = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = 'var(--ink)'
    e.currentTarget.style.borderColor = 'var(--hairline-strong)'
  }
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = 'var(--ink-muted)'
    e.currentTarget.style.borderColor = 'var(--hairline)'
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'var(--nav-bg)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--hairline)',
      }}
    >
      {/* reading progress — a single ink hairline */}
      <motion.div
        style={{
          position: 'absolute', bottom: -1, left: 0, right: 0, height: 1,
          transformOrigin: '0% 50%', scaleX: progress,
          backgroundColor: 'var(--ink)',
        }}
        aria-hidden="true"
      />

      <div
        className="max-w-screen-xl mx-auto px-5 md:px-8 py-4"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}
      >
        {/* monogram */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'baseline', gap: 8 }} aria-label="Amellah Elmahdi">
          <span
            style={{ fontFamily: 'var(--serif)', fontSize: '22px', lineHeight: 1, letterSpacing: '0.01em' }}
          >
            A.E
            <span style={{ color: 'var(--accent)' }}>.</span>
          </span>
          <span className="plate hidden sm:inline-block" style={{ paddingBottom: 2 }}>
            {lang === 'fr' ? NAV.edition.fr : NAV.edition.en}
          </span>
        </a>

        <nav
          style={{ display: 'flex', alignItems: 'center', gap: 22 }}
          aria-label="Navigation principale"
        >
          {/* desktop links — les cinq ancres, masquées sur mobile */}
          <div className="hidden md:flex items-center gap-[22px]">
            {NAV.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="plate draw-line"
                style={{ paddingBottom: 0, whiteSpace: 'nowrap' }}
              >
                {lang === 'fr' ? link.label.fr : link.label.en}
              </a>
            ))}
          </div>

          {/* theme toggle — lune/soleil, même gabarit frugal que la langue */}
          <button
            onClick={onToggleTheme}
            aria-label={lang === 'fr' ? (theme === 'noir' ? 'Passer en mode clair' : 'Passer en mode sombre') : (theme === 'noir' ? 'Switch to light mode' : 'Switch to dark mode')}
            aria-pressed={theme === 'ivory'}
            style={toggleButtonStyle}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            {theme === 'noir' ? <SunIcon size={13} /> : <MoonIcon size={13} />}
          </button>

          {/* language toggle — discreet mono pill pair */}
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: 2,
              border: '1px solid var(--hairline)',
              borderRadius: 999,
              padding: 2,
            }}
            role="group"
            aria-label={lang === 'fr' ? 'Choix de la langue' : 'Language choice'}
          >
            {(['fr', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                data-active={lang === l}
                aria-pressed={lang === l}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border: 'none',
                  borderRadius: 999,
                  padding: '5px 10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s ease, color 0.25s ease',
                  backgroundColor: lang === l ? 'var(--ink)' : 'transparent',
                  color: lang === l ? 'var(--paper)' : 'var(--ink-muted)',
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* burger — visible < md seulement */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open
              ? (lang === 'fr' ? 'Fermer le menu' : 'Close menu')
              : (lang === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
            className="md:hidden"
            style={toggleButtonStyle}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            {/* hamburger / croix — filets, comme le reste de l'DA */}
            <svg width={13} height={13} viewBox="0 0 14 14" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" aria-hidden="true">
              {open ? (
                <>
                  <line x1="2" y1="2" x2="12" y2="12" />
                  <line x1="12" y1="2" x2="2" y2="12" />
                </>
              ) : (
                <>
                  <line x1="1" y1="3.5" x2="13" y2="3.5" />
                  <line x1="1" y1="10.5" x2="13" y2="10.5" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* menu mobile déroulant */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', backgroundColor: 'var(--nav-bg)' }}
          >
            <div
              className="md:hidden"
              style={{
                padding: '6px 20px 18px',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '1px solid var(--hairline)',
              }}
            >
              {NAV.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '12px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-soft)',
                    textDecoration: 'none',
                    padding: '14px 0',
                    borderBottom: '1px solid var(--hairline)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)' }}
                >
                  {lang === 'fr' ? link.label.fr : link.label.en}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
