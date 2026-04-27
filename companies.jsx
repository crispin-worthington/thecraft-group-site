// Companies page
const Companies = () => (
  <div style={{ background: TCG.paper, color: TCG.ink, fontFamily: 'Inter, sans-serif' }}>
    <Nav active="companies" />

    <section style={{ padding: '120px 48px 80px', borderBottom: `1px solid ${TCG.line}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
        <div style={{ width: 60, height: 1, background: TCG.accent }} />
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: TCG.accent, letterSpacing: '0.24em', textTransform: 'uppercase' }}>The Portfolio — § 01</div>
      </div>
      <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 132, lineHeight: 0.9, letterSpacing: '-0.055em', margin: 0, maxWidth: 1400 }}>
        Real companies.<br/>Real crews.
      </h1>
      <p style={{ fontSize: 22, lineHeight: 1.5, color: TCG.muted, marginTop: 40, maxWidth: 720 }}>
        Each company in the group operates with its own brand, team, and local identity — backed by shared infrastructure and a partnership that puts the operator first.
      </p>
    </section>

    {/* Craft Electric */}
    <section style={{ padding: '120px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 24 }}>01 / Electrical · Calgary, AB · 2024</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 80, letterSpacing: '-0.045em', lineHeight: 0.95, margin: '0 0 32px' }}>Craft Electric</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: TCG.muted, marginBottom: 16 }}>Full-service electrical contracting for residential and commercial projects across Calgary. Licensed journeymen, transparent pricing, and work done right the first time.</p>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: TCG.muted, marginBottom: 32 }}>Built on a simple promise: show up on time, do it right, charge a fair price.</p>
          <div style={{ borderTop: `1px solid ${TCG.line}`, paddingTop: 24, marginBottom: 32 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
            <ul style={{ listStyle: 'none', padding: 0, columnCount: 2, columnGap: 32 }}>
              {['Residential wiring', 'Commercial installs', 'Panel upgrades', 'EV charger installs', 'Lighting design', 'Emergency service'].map(s => (
                <li key={s} style={{ fontSize: 15, color: TCG.ink, padding: '6px 0', breakInside: 'avoid' }}>— {s}</li>
              ))}
            </ul>
          </div>
          <a href="https://craftelectric.ca" target="_blank" style={{ padding: '16px 24px', background: TCG.ink, color: TCG.paper, fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Visit craftelectric.ca →</a>
        </div>
        <div style={{ aspectRatio: '4/5', background: '#1f2328', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 16, left: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'rgba(245,241,234,0.5)', letterSpacing: '0.26em' }}>◉ JOBSITE PHOTO — CRAFT ELECTRIC</div>
        </div>
      </div>
    </section>

    {/* Brink */}
    <section style={{ padding: '120px 48px', background: TCG.ink, color: TCG.paper }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'flex-start' }}>
        <div style={{ aspectRatio: '4/5', background: '#2a3a25', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 16, left: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'rgba(245,241,234,0.5)', letterSpacing: '0.26em' }}>◉ JOBSITE PHOTO — BRINK</div>
        </div>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 24 }}>02 / Landscaping · Vernon, BC · 2025</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 80, letterSpacing: '-0.045em', lineHeight: 0.95, margin: '0 0 32px', color: TCG.paper }}>Brink Landscaping</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(245,241,234,0.75)', marginBottom: 16 }}>Professional landscape design, installation, and maintenance for the Okanagan. Built on craftsmanship and client trust.</p>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(245,241,234,0.75)', marginBottom: 32 }}>From retaining walls and irrigation to seasonal cleanups and full property transformations.</p>
          <div style={{ borderTop: `1px solid ${TCG.lineDark}`, paddingTop: 24, marginBottom: 32 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
            <ul style={{ listStyle: 'none', padding: 0, columnCount: 2, columnGap: 32 }}>
              {['Design & install', 'Hardscaping', 'Irrigation', 'Seasonal maintenance', 'Sod & grading', 'Snow removal'].map(s => (
                <li key={s} style={{ fontSize: 15, color: TCG.paper, padding: '6px 0', breakInside: 'avoid' }}>— {s}</li>
              ))}
            </ul>
          </div>
          <a href="https://brinklandscaping.com" target="_blank" style={{ padding: '16px 24px', background: TCG.accent, color: TCG.ink, fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Visit brinklandscaping.com →</a>
        </div>
      </div>
    </section>

    {/* Coming next */}
    <section style={{ padding: '120px 48px', borderBottom: `1px solid ${TCG.line}` }}>
      <div style={{ borderTop: `1px solid ${TCG.line}`, borderBottom: `1px solid ${TCG.line}`, padding: '64px 0', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 16 }}>03 / Coming next</div>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 56, letterSpacing: '-0.04em', lineHeight: 1, margin: 0, maxWidth: 900 }}>
            More companies. More trades. More owners.
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: TCG.muted, marginTop: 24, maxWidth: 640 }}>
            We're actively looking for established service businesses to join the group. If you own a trade company and you're thinking about what's next — let's talk.
          </p>
        </div>
        <a href="partner.html" style={{ padding: '20px 28px', background: TCG.ink, color: TCG.paper, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'flex', justifyContent: 'space-between' }}>
          <span>Partner with us</span><span>→</span>
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

window.Companies = Companies;
