import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import { PROJECTS } from '../content'
import { SectionLabel } from './About'

const ease = [0.22, 1, 0.36, 1] as const

function ProjectRow({ project, index, total }: { project: (typeof PROJECTS.items)[number]; index: number; total: number }) {
  const { lang } = useLang()
  const fr = lang === 'fr'

  const linkLabel =
    project.linkKey === 'viewSite' ? PROJECTS.viewSite : project.linkKey === 'viewGithub' ? PROJECTS.viewGithub : PROJECTS.linkedin

  return (
    <motion.a
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease, delay: Math.min(index * 0.05, 0.25) }}
      href={project.link ?? 'mailto:amellahmehdiog@gmail.com'}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
      className="ink-row"
      style={{
        display: 'block',
        position: 'relative',
        padding: '34px 20px',
        borderTop: '1px solid var(--hairline)',
        borderBottom: index === total - 1 ? '1px solid var(--hairline)' : undefined,
        zIndex: 1,
      }}
    >
      <div className="grid grid-cols-12 gap-x-8 items-baseline" style={{ position: 'relative' }}>
        <div className="col-span-2 md:col-span-1">
          <span
            className="plate flip-dim"
            style={{ fontSize: '11px' }}
          >
            N°{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="col-span-10 md:col-span-7">
          <h3
            className="flip"
            style={{
              fontSize: 'clamp(22px, 2.6vw, 32px)',
              color: 'var(--ink)',
              lineHeight: 1.2,
              margin: 0,
              fontWeight: 400,
            }}
          >
            {project.title}
          </h3>
          <p
            className="flip-dim"
            style={{
              fontSize: '13.5px',
              color: 'var(--ink-muted)',
              lineHeight: 1.7,
              margin: '12px 0 0 0',
              maxWidth: '560px',
            }}
          >
            {fr ? project.description.fr : project.description.en}
          </p>
        </div>

        <div className="col-span-12 md:col-span-3 mt-4 md:mt-0">
          <p
            className="plate"
            style={{
              letterSpacing: '0.14em',
              lineHeight: 2.1,
              margin: 0,
              color: 'var(--ink-muted)',
            }}
          >
            {project.stack.join(' · ')}
          </p>
          <p
            className="flip"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              margin: '10px 0 0 0',
            }}
          >
            {project.link ? `${fr ? linkLabel.fr : linkLabel.en} ` : project.noteKey === 'note' ? `${fr ? PROJECTS.note.fr : PROJECTS.note.en} ` : ''}
            <span className="flip-arrow">↗</span>
          </p>
        </div>
      </div>
    </motion.a>
  )
}

export function Projects() {
  const { lang } = useLang()
  const fr = lang === 'fr'

  return (
    <section
      id="projects"
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
          marginBottom: '38px',
        }}
      >
        <SectionLabel>{fr ? PROJECTS.label.fr : PROJECTS.label.en}</SectionLabel>
        <span className="plate hidden md:inline">{fr ? PROJECTS.side.fr : PROJECTS.side.en}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease, delay: 0.08 }}
        style={{
          fontSize: 'clamp(34px, 4.6vw, 58px)',
          lineHeight: 1.14,
          margin: '0 0 64px 0',
          fontWeight: 400,
        }}
      >
        {fr ? PROJECTS.heading.fr : PROJECTS.heading.en},{' '}
        <span className="serif-italic" style={{ color: 'var(--accent)' }}>
          {fr ? PROJECTS.headingItalic.fr : PROJECTS.headingItalic.en}
        </span>
        .
      </motion.h2>

      <div>
        {PROJECTS.items.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} total={PROJECTS.items.length} />
        ))}
      </div>
    </section>
  )
}
