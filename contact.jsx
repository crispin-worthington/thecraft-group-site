// Contact page
const Contact = () => (
  <div style={{ background: TCG.ink, color: TCG.paper, fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>
    <Nav active="contact" dark />

    <section style={{ padding: '120px 48px 80px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
        <div style={{ width: 60, height: 1, background: TCG.accent }} />
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: TCG.accent, letterSpacing: '0.24em', textTransform: 'uppercase' }}>Contact — § 01</div>
      </div>
      <h1 style={{ fontWeight: 800, fontSize: 132, lineHeight: 0.9, letterSpacing: '-0.055em', margin: 0, maxWidth: 1500 }}>
        Let's talk.
      </h1>
      <p style={{ fontSize: 22, lineHeight: 1.5, color: 'rgba(245,241,234,0.78)', marginTop: 40, maxWidth: 720 }}>
        Whether you're a craftsman who wants to build something of your own, or an owner thinking about what's next — we read every message.
      </p>
    </section>

    <section style={{ padding: '0 48px 120px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'flex-start' }}>
        {/* Direct */}
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.accent, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 24 }}>Direct lines</div>
          <div style={{ borderTop: `1px solid ${TCG.lineDark}` }}>
            {[
              ['General', 'info@thecraft.group'],
              ['Operators', 'careers@thecraft.group'],
              ['Owners selling', 'partner@thecraft.group'],
              ['Press', 'press@thecraft.group'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 80px', padding: '24px 0', borderBottom: `1px solid ${TCG.lineDark}`, alignItems: 'center' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: TCG.muted, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{k}</div>
                <a href={`mailto:${v}`} style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', color: TCG.paper, textDecoration: 'none' }}>{v}</a>
                <div style={{ textAlign: 'right', fontSize: 14, color: TCG.accent }}>→</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.accent, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 24 }}>Where we are</div>
          <div style={{ borderTop: `1px solid ${TCG.lineDark}`, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div style={{ padding: '24px 24px 24px 0', borderRight: `1px solid ${TCG.lineDark}` }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>Calgary, AB</div>
              <div style={{ fontSize: 17, color: TCG.paper }}>Craft Electric HQ</div>
              <div style={{ fontSize: 14, color: 'rgba(245,241,234,0.6)', marginTop: 4 }}>Alberta · Canada</div>
            </div>
            <div style={{ padding: '24px 0 24px 24px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>Vernon, BC</div>
              <div style={{ fontSize: 17, color: TCG.paper }}>Brink Landscaping HQ</div>
              <div style={{ fontSize: 14, color: 'rgba(245,241,234,0.6)', marginTop: 4 }}>Okanagan · BC</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: TCG.paper, color: TCG.ink, padding: 48 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.accent, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 24 }}>Send a message</div>
          <Field label="Name" placeholder="Full name" />
          <Field label="Email" placeholder="your@email.com" />
          <Field label="I'm a..." placeholder="Craftsman / Owner / Other" />
          <Field label="Message" placeholder="Tell us a bit about what you're after." textarea />
          <button type="button" style={{ marginTop: 24, padding: '18px 32px', background: TCG.ink, color: TCG.paper, fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>
            Send message →
          </button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

window.Contact = Contact;
