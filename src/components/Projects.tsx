import { motion } from 'framer-motion'

interface Project {
  title: string
  stack: string[]
  description: string
  link?: string
  linkLabel?: string
  note?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Scrutis — File & URL Scanning SaaS',
    stack: ['Terraform', 'AWS', 'Proxmox VE', 'K3s', 'Tailscale'],
    description:
      'End-of-studies project: a scanning platform (ClamAV, YARA, Google Safe Browsing, PhishTank). Designed and compared two infrastructure approaches — AWS (VPC, RDS, S3, SQS, EC2 + K3s, Terraform IaC) and Proxmox VE + Tailscale + K3s, the one deployed and running in production.',
    note: 'Report available on request',
  },
  {
    title: 'Kativa — Cosmetics E-commerce Deployment',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS EC2', 'Nginx'],
    description:
      'Deployed a React/Vite + Node.js/Express/Prisma + PostgreSQL stack to AWS EC2, containerized with Docker across separate frontend, backend, and Nginx reverse-proxy services.',
    link: 'http://34.231.137.194/',
    linkLabel: 'Live site',
  },
  {
    title: 'EthicalData — Coaching Platform Deployment',
    stack: ['NestJS', 'Next.js', 'Docker', 'Oracle Cloud'],
    description:
      'Deployed a NestJS + Next.js monorepo to an Oracle Cloud Ubuntu VM; diagnosed and fixed a broken Docker build pipeline.',
    link: 'https://ethicaldatasecurity.ma/',
    linkLabel: 'Live site',
  },
  {
    title: 'Cloud Infrastructure with Terraform',
    stack: ['Terraform', 'AWS', 'Azure'],
    description:
      'Designed and deployed cloud infrastructure as code. Focused on modularity and reusability of Terraform configurations.',
    link: 'https://github.com/Mehdiamellah/IoT-project',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Attack Detection Platform',
    stack: ['Python', 'Streamlit', 'Machine Learning'],
    description:
      'Built a platform that analyzes network traffic data and classifies attack types using a trained ML model. Frontend built with Streamlit.',
    link: 'https://github.com/Mehdiamellah/Cybershield',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'SOC Lab with Wazuh',
    stack: ['Wazuh', 'Linux VMs'],
    description:
      'Set up a Security Operations Center environment to monitor and visualize security events across virtual machines.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7437666442247909377/',
    linkLabel: 'LinkedIn post',
  },
  {
    title: 'FTTH Network Infrastructure',
    stack: ['OptiSystem', 'Phi-OTDR'],
    description:
      'Simulated a full fiber optic FTTH network, introduced a jamming attack, and visualized anomalies using Phi-OTDR analysis.',
    link: 'https://github.com/Mehdiamellah/Projet_Phi_Otdr',
    linkLabel: 'View on GitHub',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.06 }}
      style={{
        borderTop: '1px solid #1f1f1f',
        paddingTop: '32px',
        paddingBottom: '32px',
      }}
    >
      <div className="grid grid-cols-12 gap-x-8">
        {/* Index number */}
        <div className="col-span-12 md:col-span-1">
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: '11px',
              color: '#6b7280',
              paddingTop: '4px',
              display: 'block',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Content */}
        <div className="col-span-12 md:col-span-8 mt-4 md:mt-0">
          <h3
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: '20px',
              fontWeight: 500,
              color: '#ededed',
              marginBottom: '12px',
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2" style={{ marginBottom: '16px' }}>
            {project.stack.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '11px',
                  color: '#4ade80',
                  border: '1px solid #1f2f1f',
                  backgroundColor: 'transparent',
                  padding: '2px 8px',
                  borderRadius: '2px',
                  letterSpacing: '0.04em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: '15px',
              color: '#6b7280',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: '520px',
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Link column */}
        <div className="col-span-12 md:col-span-3 flex md:justify-end items-start mt-4 md:mt-0">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '12px',
                color: '#4ade80',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #4ade80',
                paddingBottom: '1px',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.opacity = '0.65' }}
              onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.opacity = '1' }}
            >
              {project.linkLabel}
            </a>
          ) : project.note ? (
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '12px',
                color: '#6b7280',
                letterSpacing: '0.05em',
              }}
            >
              {project.note}
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
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
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: '11px',
              color: '#6b7280',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Projects
          </span>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-6 mt-4 md:mt-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.07 }}
        >
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 500,
              color: '#ededed',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Things I've built
          </h2>
        </motion.div>
      </div>

      <div>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}