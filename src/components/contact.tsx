import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section
      id="contact"
      style={{ borderTop: '1px solid #1f1f1f', paddingTop: '96px', paddingBottom: '120px' }}
      className="max-w-screen-xl mx-auto px-8"
    >
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
            Contact
          </span>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-7 mt-8 md:mt-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.07 }}
        >
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 500,
              color: '#ededed',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '32px',
            }}
          >
            Let's talk.
          </h2>

          <a
            href="mailto:amellahmehdiog@gmail.com"
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: '16px',
              color: '#4ade80',
              borderBottom: '1px solid #4ade80',
              paddingBottom: '2px',
              display: 'inline-block',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.opacity = '0.65' }}
            onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.opacity = '1' }}
          >
            amellahmehdiog@gmail.com
          </a>

          <div style={{ display: 'flex', gap: '32px', marginTop: '20px' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/Mehdiamellah' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amellah-elmahdi-424919329/' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '13px',
                  color: '#4ade80',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '1px',
                  transition: 'border-color 0.2s ease, opacity 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLAnchorElement
                  el.style.borderBottomColor = '#4ade80'
                  el.style.opacity = '0.8'
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLAnchorElement
                  el.style.borderBottomColor = 'transparent'
                  el.style.opacity = '1'
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
