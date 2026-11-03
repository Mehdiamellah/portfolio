import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useLang } from '../i18n'
import { ABOUT, STATS } from '../content'

const ease = [0.22, 1, 0.36, 1] as const

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="plate" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      {children}
      <span style={{ width: 40, height: 1, backgroundColor: 'var(--hairline-strong)', display: 'inline-block' }} />
    </span>
  )
}

export function About() {
  const { lang } = useLang()
  const fr = lang === 'fr'

  return (
    <section
      id="about"
      className="max-w-screen-xl mx-auto px-8"
      style={{ paddingTop: 'clamp(64px, 9vw, 110px)', paddingBottom: 'clamp(64px, 9vw, 110px)' }}
    >
      {/* section header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease }}
        className="rule"
        style={{
          borderTop: '1px solid var(--hairline-strong)',
          paddingTop: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '26px',
        }}
      >
        <SectionLabel>{fr ? ABOUT.label.fr : ABOUT.label.en}</SectionLabel>
        <span className="plate hidden md:inline">{fr ? ABOUT.side.fr : ABOUT.side.en}</span>
      </motion.div>

      <div className="grid grid-cols-12 gap-x-8">
        <motion.h2
          className="col-span-12 md:col-span-7"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          style={{
            fontSize: 'clamp(34px, 4.6vw, 58px)',
            lineHeight: 1.14,
            margin: '0 0 28px 0',
            fontWeight: 400,
          }}
        >
          {fr ? ABOUT.heading.fr : ABOUT.heading.en}
          <br />
          <span className="serif-italic" style={{ color: 'var(--accent)' }}>
            {fr ? ABOUT.headingItalic.fr : ABOUT.headingItalic.en}
          </span>
          .
        </motion.h2>
      </div>

      <div className="grid grid-cols-12 gap-x-8">
        <div className="col-span-12 md:col-span-4">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: 0.14 }}
            style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: 1.85, margin: 0 }}
          >
            {fr ? ABOUT.para1.fr : ABOUT.para1.en}
          </motion.p>
        </div>
        <div className="col-span-12 md:col-span-4" style={{ marginTop: 24 }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: 0.22 }}
          >
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: 1.85, margin: 0 }}>
              {fr ? ABOUT.para2.fr : ABOUT.para2.en}
            </p>
            <p
              className="plate"
              style={{
                fontSize: '10px',
                letterSpacing: '0.18em',
                marginTop: '20px',
                lineHeight: 2,
                maxWidth: 380,
              }}
            >
              {fr ? ABOUT.languages.fr : ABOUT.languages.en}
            </p>
          </motion.div>
        </div>

        {/* data table */}
        <div className="col-span-12 md:col-span-4" style={{ marginTop: 24 }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: 0.28 }}
            style={{ borderTop: '1px solid var(--hairline-strong)' }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.n}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 16,
                  padding: '14px 0',
                  borderBottom: i < STATS.length - 1 ? '1px solid var(--hairline)' : undefined,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '30px',
                    color: 'var(--ink)',
                    minWidth: 56,
                    lineHeight: 1,
                  }}
                >
                  {stat.n}
                </span>
                <span style={{ fontSize: '12.5px', color: 'var(--ink-muted)', lineHeight: 1.55 }}>
                  {fr ? stat.label.fr : stat.label.en}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { SectionLabel }
