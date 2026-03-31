import { motion } from 'framer-motion'

export function About() {
  return (
    <section
      id="about"
      style={{ borderTop: '1px solid #1f1f1f', paddingTop: '96px', paddingBottom: '96px' }}
      className="max-w-screen-xl mx-auto px-8"
    >
      {/* 12-col asymmetric: label left col, text right spans 7 cols */}
      <div className="grid grid-cols-12 gap-x-8">
        <motion.div
          className="col-span-12 md:col-span-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: '11px',
              color: '#6b7280',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              paddingTop: '6px',
            }}
          >
            About
          </span>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-7 mt-8 md:mt-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.07 }}
        >
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: '18px',
              color: '#ededed',
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            I'm a Telecommunications and Networks Engineering student at ENSA Safi, Morocco.
            My path toward Cloud Engineering isn't a pivot — it's a logical evolution.
            I understand networks at the infrastructure level, and I'm applying that to modern Cloud environments.
            I build things to understand them. I'm honest about what I don't know yet, and I move fast when I decide to learn something.
            Currently looking for a first professional experience in Casablanca — Nearshore or CFC.
          </p>
        </motion.div>
      </div>
    </section>
  )
}