import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="hero"
      style={{ paddingTop: '140px', paddingBottom: '120px' }}
      className="max-w-screen-xl mx-auto px-8"
    >
      <div className="grid grid-cols-12 gap-x-8 items-start">
        <div className="col-span-12 md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '12px', color: '#4ade80', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '32px' }}>
              Network &amp; Cloud Engineering Student
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.07 }}
            style={{ fontFamily: "'Geist', sans-serif", fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 600, color: '#ededed', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '24px' }}
          >
            Amellah<br />Elmahdi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.14 }}
            style={{ fontFamily: "'Geist', sans-serif", fontSize: '16px', color: '#6b7280', lineHeight: 1.6, marginBottom: '48px', maxWidth: '480px' }}
          >
            4th year at ENSA Safi — building toward Cloud Infrastructure and Cybersecurity.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.21 }}
            style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', color: '#4ade80', borderLeft: '2px solid #4ade80', paddingLeft: '20px', margin: 0, fontStyle: 'normal' }}
          >
            "Networks are the foundation. Cloud is where they live today."
          </motion.blockquote>
        </div>

        <div className="hidden md:flex md:col-span-4 md:col-start-9 justify-end items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.28 }}
            style={{ width: '100%', maxWidth: '280px', aspectRatio: '3 / 4', borderRadius: 0, overflow: 'hidden', position: 'relative' }}
          >
            <img
              src="/protfolioimg.png"
              alt="Amellah Elmahdi"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', borderRadius: 0, filter: 'brightness(0.9) contrast(1.05)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0f0f0f 0%, transparent 40%)', pointerEvents: 'none' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}