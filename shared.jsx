// Shared brand tokens, layout primitives, nav + footer for The Craft Group site
const TCG = {
  ink: '#1a1814',
  paper: '#f5f1ea',
  accent: '#06B0D0',
  muted: '#8a8276',
  line: 'rgba(26,24,20,0.12)',
  lineDark: 'rgba(245,241,234,0.15)',
};

const Mark = ({ size = 32, bg, fg }) => {
  const _bg = bg || TCG.ink;
  const _fg = fg || TCG.paper;
  const r = size * 0.22;
  return (
    <div style={{ width: size, height: size, background: _bg, borderRadius: r, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width={size * 0.72} height={size * 0.72} viewBox="0 0 100 100">
        <rect x="6" y="6" width="88" height="88" fill="none" stroke={_fg} strokeWidth="6" />
        <rect x="29" y="29" width="42" height="42" fill={_fg} />
        <rect x="43" y="43" width="14" height="14" fill={TCG.accent} />
      </svg>
    </div>
  );
};

const Wordmark = ({ size = 20, color, accentColor }) => (
  <a href="index.html" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
    <Mark size={size * 1.4} />
    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: size, color: color || TCG.ink, letterSpacing: '-0.04em' }}>
      The<span style={{ color: accentColor || TCG.accent }}>Craft</span>Group
    </div>
  </a>
);

const NavLink = ({ href, label, active, dark }) => (
  <a href={href} style={{
    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500,
    color: active ? TCG.accent : (dark ? TCG.paper : TCG.ink),
    textDecoration: 'none', letterSpacing: '-0.005em',
  }}>{label}</a>
);

const Nav = ({ active, dark = false }) => {
  const fg = dark ? TCG.paper : TCG.ink;
  const bg = dark ? TCG.ink : TCG.paper;
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 48px', background: bg,
      borderBottom: `1px solid ${dark ? TCG.lineDark : TCG.line}`,
      position: 'relative', zIndex: 10,
    }}>
      <Wordmark size={20} color={fg} />
      <div style={{ display: 'flex', gap: 32 }}>
        <NavLink href="about.html" label="About" active={active === 'about'} dark={dark} />
        <NavLink href="companies.html" label="Companies" active={active === 'companies'} dark={dark} />
        <NavLink href="careers.html" label="Careers" active={active === 'careers'} dark={dark} />
        <NavLink href="partner.html" label="Partner" active={active === 'partner'} dark={dark} />
        <NavLink href="contact.html" label="Contact" active={active === 'contact'} dark={dark} />
      </div>
      <a href="contact.html" style={{
        padding: '10px 18px', background: TCG.accent, color: TCG.ink, borderRadius: 4,
        fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, letterSpacing: '-0.005em',
        textDecoration: 'none',
      }}>
        Start a conversation →
      </a>
    </nav>
  );
};

const Footer = () => (
  <footer style={{ background: TCG.ink, color: TCG.paper, padding: '80px 48px 40px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 64, borderBottom: `1px solid ${TCG.lineDark}` }}>
      <div>
        <Wordmark size={22} color={TCG.paper} />
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(245,241,234,0.7)', marginTop: 24, maxWidth: 360 }}>
          Backing the next generation of trade-business owners across Canada. The craft sets the standard. The systems keep up.
        </p>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.accent, letterSpacing: '0.28em', textTransform: 'uppercase', marginTop: 32 }}>
          Handmade systems
        </div>
      </div>
      <div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 20 }}>Group</div>
        {[['about.html', 'About'], ['companies.html', 'Companies'], ['careers.html', 'Careers'], ['partner.html', 'Partner']].map(([h, l]) => (
          <div key={h} style={{ marginBottom: 12 }}>
            <a href={h} style={{ color: 'rgba(245,241,234,0.85)', textDecoration: 'none', fontSize: 15 }}>{l}</a>
          </div>
        ))}
      </div>
      <div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 20 }}>Companies</div>
        <div style={{ marginBottom: 12 }}><a href="https://craftelectric.ca" style={{ color: 'rgba(245,241,234,0.85)', textDecoration: 'none', fontSize: 15 }}>Craft Electric ↗</a></div>
        <div style={{ marginBottom: 12 }}><a href="https://brinklandscaping.com" style={{ color: 'rgba(245,241,234,0.85)', textDecoration: 'none', fontSize: 15 }}>Brink Landscaping ↗</a></div>
      </div>
      <div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 20 }}>Contact</div>
        <div style={{ marginBottom: 12 }}><a href="mailto:info@thecraft.group" style={{ color: 'rgba(245,241,234,0.85)', textDecoration: 'none', fontSize: 15 }}>info@thecraft.group</a></div>
        <div style={{ marginBottom: 12 }}><a href="contact.html" style={{ color: 'rgba(245,241,234,0.85)', textDecoration: 'none', fontSize: 15 }}>Get in touch →</a></div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.18em' }}>
      <span>© 2026 The Craft Group</span>
      <span>Calgary, AB · Vernon, BC · Canada</span>
      <span>FIELD MANUAL / VOL. 01</span>
    </div>
  </footer>
);

// Hero video stand-in (the real video URL is plumbed in; falls back to gradient)
const HeroVideo = ({ src = 'hero-home.mp4' }) => (
  <>
    <video autoPlay muted loop playsInline
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
      <source src={src} type="video/mp4" />
    </video>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(42,38,32,0.85) 0%, rgba(26,24,20,0.85) 60%, rgba(13,12,10,0.92) 100%)', zIndex: 1 }} />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(245,241,234,0.02) 0px, rgba(245,241,234,0.02) 1px, transparent 1px, transparent 3px)', opacity: 0.6, zIndex: 1 }} />
  </>
);

// A small reusable section header
const SectionHead = ({ tag, num, title, dark = false, maxWidth = 1100 }) => (
  <div style={{ marginBottom: 64 }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
        {tag}
      </div>
      {num && <div style={{ flex: 1, height: 1, background: dark ? TCG.lineDark : TCG.line }} />}
      {num && <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.accent, letterSpacing: '0.2em' }}>§ {num}</div>}
    </div>
    <h2 style={{
      fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 80,
      letterSpacing: '-0.045em', lineHeight: 0.95, margin: 0,
      color: dark ? TCG.paper : TCG.ink, maxWidth,
    }}>
      {title}
    </h2>
  </div>
);

const PillButton = ({ children, href = '#', primary = false, dark = false }) => (
  <a href={href} style={{
    padding: '18px 30px',
    background: primary ? TCG.accent : (dark ? 'transparent' : TCG.ink),
    color: primary ? TCG.ink : (dark ? TCG.paper : TCG.paper),
    fontSize: 14, fontWeight: 600, letterSpacing: '-0.005em',
    textDecoration: 'none',
    border: dark && !primary ? `1px solid ${TCG.lineDark}` : (!primary ? `1px solid ${TCG.ink}` : 'none'),
    fontFamily: 'Inter, sans-serif',
  }}>
    {children}
  </a>
);

const Field = ({ label, placeholder, textarea }) => (
  <div style={{ marginBottom: textarea ? 0 : 24 }}>
    <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 10 }}>{label}</label>
    {textarea ? (
      <textarea placeholder={placeholder} style={{ width: '100%', padding: '14px 16px', border: `1px solid ${TCG.line}`, fontSize: 15, fontFamily: 'inherit', minHeight: 120, resize: 'vertical', background: TCG.paper, color: TCG.ink }} />
    ) : (
      <input placeholder={placeholder} style={{ width: '100%', padding: '14px 16px', border: `1px solid ${TCG.line}`, fontSize: 15, fontFamily: 'inherit', background: TCG.paper, color: TCG.ink }} />
    )}
  </div>
);

Object.assign(window, { TCG, Mark, Wordmark, Nav, Footer, HeroVideo, SectionHead, PillButton, Field });
