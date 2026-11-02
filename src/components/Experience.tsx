import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import { EXPERIENCE } from '../content'
import { SectionLabel } from './About'

const ease = [0.22, 1, 0.36, 1] as const

export function Experience() {
  const { lang } = useLang()
  const fr = lang === 'fr'

  return (
    <section
      id="experience"
      className="max-w-screen-xl mx-auto px-8"
      style={{ paddingTop: '110px', paddingBottom: '110px' }}
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
        <SectionLabel>{fr ? EXPERIENCE.label.fr : EXPERIENCE.label.en}</SectionLabel>
        <span className="plate hidden md:inline">{fr ? EXPERIENCE.side.fr : EXPERIENCE.side.en}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease, delay: 0.08 }}
        style={{
          fontSize: 'clamp(34px, 4.6vw, 58px)',
          lineHeight: 1.14,
          margin: '0 0 36px 0',
          fontWeight: 400,
        }}
      >
        {fr ? EXPERIENCE.heading.fr : EXPERIENCE.heading.en},{' '}
        <span className="serif-italic" style={{ color: 'var(--accent)' }}>
          {fr ? EXPERIENCE.headingItalic.fr : EXPERIENCE.headingItalic.en}
        </span>
        .
      </motion.h2>

      <div className="grid grid-cols-12 gap-x-8">
        <div className="hidden md:block md:col-span-2" />

        <div className="col-span-12 md:col-span-10">
          {EXPERIENCE.items.map((item, i) => (
            <motion.div
              key={`${item.year}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: Math.min(i * 0.07, 0.3) }}
              style={{
                display: 'grid',
                gridTemplateColumns: '88px 1fr auto',
                gap: 24,
                alignItems: 'baseline',
                padding: '26px 0',
                borderBottom: '1px solid var(--hairline)',
                borderTop: i === 0 ? '1px solid var(--hairline)' : undefined,
              }}
            >
              {/* year, serif, quietly large */}
              <span
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '26px',
                  color: 'var(--ink)',
                  lineHeight: 1,
                }}
              >
                {item.year}
              </span>

              <div>
                <h3
                  style={{
                    fontSize: 'clamp(18px, 2vw, 23px)',
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {fr ? item.title.fr : item.title.en}
                </h3>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.75,
                    margin: '8px 0 0 0',
                    maxWidth: 560,
                  }}
                >
                  {fr ? item.detail.fr : item.detail.en}
                </p>
              </div>

              {/* the tag, like a small stamp */}
              <span
                className="plate hidden md:inline"
                style={{
                  border: '1px solid var(--hairline)',
                  padding: '5px 12px',
                  borderRadius: 999,
                  whiteSpace: 'nowrap',
                  color: 'var(--accent)',
                  borderColor: 'var(--accent)',
                }}
              >
                {fr ? item.tag.fr : item.tag.en}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
