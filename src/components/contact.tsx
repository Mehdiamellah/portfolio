import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import { CONTACT } from '../content'
import { SectionLabel } from './About'
import { MailIcon, PhoneIcon, PdfIcon, GithubIcon, LinkedinIcon } from './Icons'

const ease = [0.22, 1, 0.36, 1] as const

const SOCIALS = [
  { label: 'GitHub', handle: '@Mehdiamellah', href: 'https://github.com/Mehdiamellah', Icon: GithubIcon },
  { label: 'LinkedIn', handle: 'Amellah Elmahdi', href: 'https://www.linkedin.com/in/amellah-elmahdi-424919329/', Icon: LinkedinIcon },
]

export function Contact() {
  const { lang } = useLang()
  const fr = lang === 'fr'

  return (
    <section
      id="contact"
      className="max-w-screen-xl mx-auto px-8"
      style={{ paddingTop: '120px', paddingBottom: '130px' }}
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
          marginBottom: '28px',
        }}
      >
        <SectionLabel>{fr ? CONTACT.label.fr : CONTACT.label.en}</SectionLabel>
        <span className="plate hidden md:inline">{fr ? CONTACT.side.fr : CONTACT.side.en}</span>
      </motion.div>

      <div className="grid grid-cols-12 gap-x-8">
        <div className="col-span-12 md:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease, delay: 0.08 }}
            style={{
              fontSize: 'clamp(44px, 7vw, 94px)',
              lineHeight: 1.02,
              margin: '0 0 24px 0',
              fontWeight: 400,
            }}
          >
            {fr ? CONTACT.heading.fr : CONTACT.heading.en},{' '}
            <span className="serif-italic" style={{ color: 'var(--accent)' }}>
              {fr ? CONTACT.headingItalic.fr : CONTACT.headingItalic.en}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: 0.16 }}
            style={{
              fontSize: '15.5px',
              color: 'var(--ink-soft)',
              lineHeight: 1.8,
              maxWidth: 460,
            }}
          >
            {fr ? CONTACT.para.fr : CONTACT.para.en}
          </motion.p>
        </div>
      </div>

      {/* the channels, set like an index plate */}
      <div className="col-span-12 md:col-span-10 md:col-start-2" style={{ marginTop: '36px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          style={{ borderTop: '1px solid var(--hairline-strong)' }}
        >
          {/* email */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="ink-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
              padding: '26px 20px 26px 0',
              borderBottom: '1px solid var(--hairline)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
              <span
                className="flip"
                style={{ color: 'var(--accent)', display: 'inline-flex', flexShrink: 0 }}
              >
                <MailIcon size={20} />
              </span>
              <span
                className="flip"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(20px, 3.2vw, 38px)',
                  color: 'var(--ink)',
                }}
              >
                {CONTACT.email}
              </span>
            </span>
            <span
              className="plate flip"
              style={{
                fontSize: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              {fr ? CONTACT.byMail.fr : CONTACT.byMail.en}
              <span className="flip-arrow" style={{ fontSize: 16 }}>→</span>
            </span>
          </a>

          {/* phone */}
          <a
            href={CONTACT.phoneHref}
            className="ink-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
              padding: '20px 20px 20px 0',
              borderBottom: '1px solid var(--hairline)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span
                className="flip"
                style={{ color: 'var(--accent)', display: 'inline-flex', flexShrink: 0 }}
              >
                <PhoneIcon size={18} />
              </span>
              <span
                className="flip"
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--ink)',
                }}
              >
                {CONTACT.phone}
              </span>
            </span>
            <span
              className="plate flip"
              style={{ fontSize: '10px', display: 'inline-flex', alignItems: 'center', gap: 10 }}
            >
              {fr ? CONTACT.byPhone.fr : CONTACT.byPhone.en}
              <span className="flip-arrow" style={{ fontSize: 16 }}>→</span>
            </span>
          </a>

          {/* CV */}
          <a
            href="/cv-amellah-elmahdi.pdf"
            download="CV-Amellah-Elmahdi.pdf"
            className="ink-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
              padding: '20px 20px 20px 0',
              borderBottom: '1px solid var(--hairline)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span
                className="flip"
                style={{ color: 'var(--accent)', display: 'inline-flex', flexShrink: 0 }}
              >
                <PdfIcon size={18} />
              </span>
              <span
                className="flip"
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--ink)',
                }}
              >
                CV — Amellah Elmahdi
              </span>
            </span>
            <span
              className="plate flip"
              style={{ fontSize: '10px', display: 'inline-flex', alignItems: 'center', gap: 10 }}
            >
              {fr ? CONTACT.download.fr : CONTACT.download.en}
              <span className="flip-arrow" style={{ fontSize: 14 }}>↓</span>
            </span>
          </a>

          {/* socials, with real marks */}
          {SOCIALS.map(({ label, handle, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: 0.26 }}
              className="ink-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 12,
                padding: '20px 20px 20px 0',
                borderBottom: '1px solid var(--hairline)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span
                  className="flip"
                  style={{ color: 'var(--accent)', display: 'inline-flex', flexShrink: 0 }}
                >
                  <Icon size={18} />
                </span>
                <span
                  className="flip"
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'var(--ink)',
                  }}
                >
                  {label}
                </span>
              </span>
              <span
                className="plate flip-dim"
                style={{ fontSize: '11px' }}
              >
                {handle}
                <span className="flip-arrow" style={{ marginLeft: 10 }}>↗</span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
