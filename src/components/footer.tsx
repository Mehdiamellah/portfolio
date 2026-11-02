import { useLang } from '../i18n'
import { FOOTER } from '../content'

export function Footer() {
  const { lang } = useLang()
  const fr = lang === 'fr'

  return (
    <footer style={{ borderTop: '1px solid var(--hairline-strong)' }}>
      <div
        className="max-w-screen-xl mx-auto px-8"
        style={{
          padding: '26px 0 34px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '18px',
            color: 'var(--ink)',
          }}
        >
          Amellah Elmahdi<span style={{ color: 'var(--accent)' }}>.</span>
        </span>

        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '9.5px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--ink-muted)',
          }}
        >
          {fr ? FOOTER.colophon.fr : FOOTER.colophon.en}
        </span>

        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '9.5px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--ink-muted)',
          }}
        >
          {fr ? FOOTER.edition.fr : FOOTER.edition.en}
        </span>
      </div>
    </footer>
  )
}
