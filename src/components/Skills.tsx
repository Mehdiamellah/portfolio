import { motion } from 'framer-motion'

interface SkillGroup {
  category: string
  items: string[]
}

const SKILLS: SkillGroup[] = [
  { category: 'Cloud & Infra', items: ['Terraform', 'AWS', 'Azure', 'Flask'] },
  { category: 'Security', items: ['Wazuh', 'SIEM', 'Network Monitoring'] },
  { category: 'Languages', items: ['Python', 'Bash'] },
  { category: 'Networking', items: ['FTTH', 'OTDR', 'TCP/IP', 'OptiSystem'] },
]

export function Skills() {
  return (
    <section
      id="skills"
      style={{ borderTop: '1px solid #1f1f1f', paddingTop: '96px', paddingBottom: '96px' }}
      className="max-w-screen-xl mx-auto px-8"
    >
      <div className="grid grid-cols-12 gap-x-8 mb-16">
        <motion.div
          className="col-span-12 md:col-span-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Skills
          </span>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-6 mt-4 md:mt-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.07 }}
        >
          <h2 style={{ fontFamily: "'Geist', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, color: '#ededed', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
            Technical areas
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-12 gap-x-8">
        <div className="hidden md:block md:col-span-2" />
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {SKILLS.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.06 }}
                style={{ borderTop: '1px solid #1f1f1f', paddingTop: '28px', paddingBottom: '28px' }}
              >
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: '#4ade80', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
                  {group.category}
                </span>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {group.items.map((item) => (
                    <li key={item} style={{ fontFamily: "'Geist', sans-serif", fontSize: '15px', color: '#ededed', lineHeight: 1.9 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}