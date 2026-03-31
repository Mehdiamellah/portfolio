import { motion } from 'framer-motion'

const links = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
]

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ borderBottom: '1px solid #1f1f1f' }}
      className="fixed top-0 left-0 right-0 z-50"
      css-note="bg must be opaque — no glassmorphism"
    >
      <div
        style={{ backgroundColor: '#0f0f0f' }}
        className="max-w-screen-xl mx-auto px-8 py-4 flex items-center justify-between"
      >
        <span
          style={{ fontFamily: "'Geist Mono', monospace", color: '#4ade80', fontSize: '13px', letterSpacing: '0.05em' }}
        >
          AE
        </span>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '12px',
                color: '#6b7280',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#ededed' }}
              onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = '#6b7280' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
