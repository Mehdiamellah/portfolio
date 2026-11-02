import { useScroll, useSpring, motion } from 'framer-motion'
import { useLang } from '../i18n'
import { NAV } from '../content'

export function Nav() {
  const { lang, setLang } = useLang()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 34 })

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
        className="max-w-screen-xl mx-auto"
        style={{
          padding: '16px 32px',
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
          <span className="plate" style={{ paddingBottom: 2 }}>
            {lang === 'fr' ? NAV.edition.fr : NAV.edition.en}
          </span>
        </a>

        <nav
          style={{ display: 'flex', alignItems: 'center', gap: 22 }}
          aria-label="Navigation principale"
        >
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
        </nav>
      </div>
    </motion.header>
  )
}
