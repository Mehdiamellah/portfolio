import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import { SKILLS } from '../content'
import { SectionLabel } from './About'

const ease = [0.22, 1, 0.36, 1] as const

export function Skills() {
  const { lang } = useLang()
  const fr = lang === 'fr'

  const itemLabel = (label: string | { fr: string; en: string }) =>
    typeof label === 'string' ? label : fr ? label.fr : label.en

  return (
    <section
      id="skills"
      className="max-w-screen-xl mx-auto px-8"
      style={{ paddingTop: 'clamp(64px, 9vw, 110px)', paddingBottom: 'clamp(64px, 9vw, 110px)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease }}
        style={{
          borderTop: '1px solid var(--hairline-strong)',
          paddingTop: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '24px',
        }}
      >
        <SectionLabel>{fr ? SKILLS.label.fr : SKILLS.label.en}</SectionLabel>
        <span className="plate hidden md:inline">{fr ? SKILLS.side.fr : SKILLS.side.en}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease, delay: 0.08 }}
        style={{
          fontSize: 'clamp(34px, 4.6vw, 58px)',
          lineHeight: 1.14,
          margin: '0 0 20px 0',
          fontWeight: 400,
        }}
      >
        {fr ? SKILLS.heading.fr : SKILLS.heading.en}{' '}
        <span className="serif-italic" style={{ color: 'var(--accent)' }}>
          {fr ? SKILLS.headingItalic.fr : SKILLS.headingItalic.en}
        </span>
        .
      </motion.h2>

      {/* legend — the honesty scale, set like a small print note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease, delay: 0.12 }}
        style={{
          display: 'flex',
          gap: 24,
          fontFamily: 'var(--mono)',
          fontSize: '10.5px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
          marginBottom: '32px',
        }}
      >
        <span>{fr ? SKILLS.legend.confident.fr : SKILLS.legend.confident.en}</span>
        <span>{fr ? SKILLS.legend.learning.fr : SKILLS.legend.learning.en}</span>
      </motion.div>

      <div className="grid grid-cols-12 gap-x-8">
        <div className="hidden md:block md:col-span-2" />

        <div className="col-span-12 md:col-span-10">
          {SKILLS.groups.map((group, i) => {
            const hasIcon = (item: (typeof group.items)[number]) =>
              'icon' in item && Boolean((item as { icon?: unknown }).icon)
            const tiles = group.items.filter(hasIcon)
            const prose = group.items.filter((item) => !hasIcon(item))
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: Math.min(i * 0.07, 0.3) }}
                style={{
                  padding: '26px 0',
                  borderBottom: '1px solid var(--hairline)',
                  borderTop: i === 0 ? '1px solid var(--hairline)' : undefined,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  {fr ? group.category.fr : group.category.en}
                </span>

                {/* les technologies avec logo officiel — tuiles, graduation par opacité */}
                {tiles.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 10,
                      marginTop: 16,
                    }}
                  >
                    {tiles.map((item) => {
                      const spec = (item as {
                        icon?: { cdn: 'devicon' | 'si'; file?: string; slug?: string; color?: string; short: string }
                      }).icon!
                      const src =
                        spec.cdn === 'devicon'
                          ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${spec.file}`
                          : `https://cdn.simpleicons.org/${spec.slug}${spec.color ? `/${spec.color}` : ''}`
                      const learning = item.level === 'learning'
                      return (
                        <div
                          key={spec.short}
                          className="tile"
                          title={itemLabel(item.label)}
                          aria-label={`${itemLabel(item.label)}${fr ? (learning ? ' — en cours' : ' — à l’aise') : learning ? ' — learning' : ' — confident'}`}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: '0 0 auto',
                            minWidth: 96,
                            padding: '14px 12px 12px',
                            border: '1px solid var(--hairline)',
                            backgroundColor: 'var(--paper-soft)',
                          }}
                        >
                          <img
                            src={src}
                            alt=""
                            width={34}
                            height={34}
                            style={{
                              height: 32,
                              maxWidth: 58,
                              objectFit: 'contain',
                              display: 'block',
                              filter: learning ? 'grayscale(1)' : undefined,
                              opacity: learning ? 0.45 : 1,
                            }}
                          />
                          <span
                            aria-hidden="true"
                            style={{
                              fontFamily: 'var(--mono)',
                              fontSize: '9.5px',
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              color: learning ? 'var(--ink-muted)' : 'var(--ink-soft)',
                              marginTop: 9,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {spec.short}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* les savoirs sans logo (concepts réseaux, certifications…) — rangées texte */}
                {prose.length > 0 && (
                  <div style={{ marginTop: tiles.length > 0 ? 14 : 0 }}>
                    {prose.map((item, j) => {
                      const link = 'url' in item ? (item as { url: string }).url : undefined
                      return (
                        <p
                          key={j}
                          style={{
                            fontSize: '13.5px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.75,
                            margin: '6px 0 0 0',
                          }}
                        >
                          <span
                            aria-label={item.level === 'confident' ? 'confident' : 'learning'}
                            title={item.level === 'confident' ? (fr ? 'à l’aise' : 'confident') : (fr ? 'en cours d’apprentissage' : 'learning')}
                            style={{
                              color: item.level === 'confident' ? 'var(--accent)' : 'var(--hairline-strong)',
                              marginRight: 10,
                              verticalAlign: '0.08em',
                            }}
                          >
                            {item.level === 'confident' ? '●' : '○'}
                          </span>
                          {link ? (
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="draw-line serif-italic"
                              style={{ color: 'var(--ink)', fontFamily: 'var(--serif)', fontSize: '16px' }}
                            >
                              {itemLabel(item.label)}
                            </a>
                          ) : (
                            itemLabel(item.label)
                          )}
                        </p>
                      )
                    })}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
