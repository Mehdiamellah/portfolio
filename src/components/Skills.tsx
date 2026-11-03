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
          {SKILLS.groups.map((group, i) => (
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
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  color: 'var(--ink)',
                  lineHeight: 1.8,
                  margin: '10px 0 0 0',
                  maxWidth: '660px',
                }}
              >
                {group.items.map((item, j) => {
                  const link = 'url' in item ? (item as { url: string }).url : undefined
                  return (
                    <span key={j}>
                    <span
                      aria-label={item.level === 'confident' ? 'confident' : 'learning'}
                      title={item.level === 'confident' ? (fr ? 'à l’aise' : 'confident') : (fr ? 'en cours d’apprentissage' : 'learning')}
                      style={{
                        color: item.level === 'confident' ? 'var(--accent)' : 'var(--hairline-strong)',
                        marginRight: 6,
                        fontSize: '0.72em',
                        verticalAlign: '0.1em',
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
                        style={{ color: 'var(--ink)' }}
                      >
                        {itemLabel(item.label)}
                      </a>
                    ) : (
                      itemLabel(item.label)
                    )}
                    {j < group.items.length - 1 && (
                      <span style={{ color: 'var(--ink-muted)', padding: '0 12px' }}>&middot;</span>
                    )}
                  </span>
                  )
                })}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
