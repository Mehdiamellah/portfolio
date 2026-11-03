import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import { HERO } from '../content'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { lang } = useLang()
  const t = (b: { fr: string; en: string }) => (lang === 'fr' ? b.fr : b.en)

  return (
    <section
      id="hero"
      style={{ paddingTop: '104px', paddingBottom: '64px' }}
      className="max-w-screen-xl mx-auto px-8"
    >
      {/* masthead row — metadata, like a title page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
        className="rule"
        style={{
          borderTop: '1px solid var(--hairline-strong)',
          paddingTop: 14,
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
          marginBottom: '44px',
        }}
        aria-hidden="true"
      >
        <span className="hidden md:block">{t(HERO.masthead.middle)}</span>
        <span>{t(HERO.masthead.right)}</span>
      </motion.div>

      {/* the name, enormous, set in serif like a magazine cover */}
      <div style={{ position: 'relative' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          style={{
            fontSize: 'clamp(64px, 12vw, 168px)',
            lineHeight: 0.94,
            letterSpacing: '-0.01em',
            margin: 0,
            fontWeight: 400,
          }}
        >
          Amellah
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.32 }}
          className="serif-italic"
          style={{
            fontSize: 'clamp(64px, 12vw, 168px)',
            lineHeight: 0.94,
            letterSpacing: '0em',
            margin: 0,
            fontWeight: 400,
            color: 'var(--accent)',
          }}
        >
          Elmahdi
        </motion.h1>

        {/* photo — pressed into the page like an editorial portrait.
            absolute en desktop (à droite du nom), en flux centré sous le nom en mobile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
          className="mt-10 md:mt-0 mx-auto md:mx-0 md:absolute md:right-0 md:top-2 w-[min(62vw,285px)] md:w-[clamp(180px,22vw,285px)]"
          style={{ zIndex: 2 }}
        >
          <div
            className="drift"
            style={{
              backgroundColor: 'var(--matte)',
              border: '1px solid var(--hairline)',
              padding: '10px 10px 12px',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={`${import.meta.env.BASE_URL}protfolioimg.png`}
                alt="Portrait de Amellah Elmahdi"
                width={285}
                height={380}
                style={{
                  width: '100%',
                  aspectRatio: '3 / 4',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'var(--photo-filter)',
                }}
              />
              {/* voile sombre en dégradé — retombée bas + côté gauche, effet fondu d'impression */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(25,23,19,0.55) 0%, rgba(25,23,19,0.18) 45%, rgba(25,23,19,0) 72%), linear-gradient(105deg, rgba(25,23,19,0.30) 0%, rgba(25,23,19,0) 50%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '9.5px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
                marginTop: 10,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>{t(HERO.credit)}</span>
              <span>{t(HERO.creditRight)}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* sub-headline + italic dek, magazine style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.44 }}
        className="grid grid-cols-12 gap-x-8"
        style={{ marginTop: 'min(4vw, 48px)' }}
      >
        <div className="hidden md:block md:col-span-2">
          <span className="plate">{t(HERO.eyebrow)}</span>
        </div>

        <div className="col-span-12 md:col-span-7" style={{ marginTop: 10 }}>
          <p
            style={{
              fontSize: 'clamp(19px, 2.2vw, 26px)',
              lineHeight: 1.5,
              color: 'var(--ink)',
              margin: 0,
              maxWidth: '560px',
              fontWeight: 400,
            }}
          >
            <em className="serif-italic">{lang === 'fr' ? 'réseaux et télécommunications' : 'telecommunications engineering'}</em> —{' '}
            {lang === 'fr' ? '5ᵉ année à l’ENSA de Safi. Je construis l’infrastructure vers où les réseaux vont' : '5th year at ENSA Safi. Building the infrastructure toward where networks live today'}:{' '}
            <em className="serif-italic">{lang === 'fr' ? 'le cloud et la sécurité' : 'cloud and security'}</em>.
          </p>

          <p
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              letterSpacing: '0.06em',
              color: 'var(--ink-muted)',
              marginTop: '26px',
              lineHeight: 1.9,
            }}
            aria-hidden="true"
          >
            {HERO.motto}
          </p>

          {/* discreet links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, marginTop: '34px' }}>
            <a href="#projects" className="plate plate-ink draw-line">
              {t(HERO.ctaPrimary)}
            </a>
            <a href="#contact" className="plate draw-line">
              {t(HERO.ctaGhost)}
            </a>
            {/* CV — le fichier doit s'appeler /public/cv-amellah-elmahdi.pdf */}
            <a
              href={`${import.meta.env.BASE_URL}cv-amellah-elmahdi.pdf`}
              download="CV-Amellah-Elmahdi.pdf"
              className="plate draw-line"
              style={{ color: 'var(--accent)' }}
            >
              {t(HERO.ctaCv)} ↓
            </a>
          </div>
        </div>

        {/* availability, set on the right margin like a rubber stamp */}
        <div className="col-span-12 mt-6 md:col-span-3 md:col-start-10 md:mt-40">
          <div
            style={{
              display: 'inline-block',
              border: '1.5px solid var(--accent)',
              color: 'var(--accent)',
              padding: '10px 18px',
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              marginTop: 6,
            }}
          >
            {t(HERO.stamp)}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
