// Partner page — for business owners considering a sale
const Partner = () => (
  <div style={{ background: TCG.paper, color: TCG.ink, fontFamily: 'Inter, sans-serif' }}>
    <Nav active="partner" />

    <section style={{ padding: '120px 48px 80px', borderBottom: `1px solid ${TCG.line}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
        <div style={{ width: 60, height: 1, background: TCG.accent }} />
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: TCG.accent, letterSpacing: '0.24em', textTransform: 'uppercase' }}>For Owners — § 01</div>
      </div>
      <h1 style={{ fontWeight: 800, fontSize: 132, lineHeight: 0.9, letterSpacing: '-0.055em', margin: 0, maxWidth: 1500 }}>
        Thinking about<br/><span style={{ fontStyle: 'italic', fontWeight: 400 }}>your next</span> chapter?
      </h1>
      <p style={{ fontSize: 22, lineHeight: 1.5, color: TCG.muted, marginTop: 40, maxWidth: 720 }}>
        You built a business that employs good people and serves your community. When you're ready for what's next, we'd like to talk about keeping the legacy alive — and putting your best people on a path to owning it.
      </p>
      <a href="#inquiry" style={{ display: 'inline-block', padding: '20px 32px', background: TCG.accent, color: TCG.ink, fontSize: 15, fontWeight: 600, textDecoration: 'none', marginTop: 48 }}>
        Start a confidential conversation →
      </a>
    </section>

    {/* How */}
    <section style={{ padding: '120px 48px' }}>
      <SectionHead tag="◇ How It Works" num="002" title="A straightforward process." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: `1px solid ${TCG.line}` }}>
        {[
          ['01', 'A conversation', 'A confidential call. You share what you\'ve built. We share how the partnership works. No commitment, no pressure.'],
          ['02', 'A closer look', 'If there\'s mutual interest, we review financials, meet key team members with your permission, and learn what makes the business tick.'],
          ['03', 'A fair offer', 'We close on terms that respect what you built. Your team stays. Your brand stays. Your best people get a real path to ownership.'],
        ].map(([n, t, b], i) => (
          <div key={n} style={{ padding: '40px 32px', borderRight: i < 2 ? `1px solid ${TCG.line}` : 'none' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.accent, letterSpacing: '0.24em', marginBottom: 24 }}>STEP {n}</div>
            <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 16px' }}>{t}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: TCG.muted, margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Why us */}
    <section style={{ padding: '120px 48px', background: TCG.ink, color: TCG.paper }}>
      <SectionHead tag="◇ Why Us" num="003" title="What makes us different." dark />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${TCG.lineDark}` }}>
        {[
          ['We keep your brand', 'Your business name, your reputation, your identity in the community. We\'re not slapping a corporate logo on your trucks.'],
          ['We keep your people', 'Your team is the business. We retain everyone, often improve compensation, and create new growth paths for the people who built it.'],
          ['No PE games', 'We\'re not a fund with a five-year exit. We buy businesses to run them. No debt loading, no flipping to the next buyer.'],
          ['Fair valuations', 'We don\'t lowball. We look at what the business is actually worth — revenue, team, reputation — and offer a number that respects it.'],
          ['Flexible transitions', 'Walk away on closing day or stay for a year. We structure the deal around what works for you.'],
          ['Real growth support', 'Marketing, technology, accounting, ops. The team focuses on the work — we handle the stuff most owners hate doing.'],
        ].map(([t, b], i) => (
          <div key={t} style={{ padding: 36, borderRight: (i % 3 < 2) ? `1px solid ${TCG.lineDark}` : 'none', borderTop: i >= 3 ? `1px solid ${TCG.lineDark}` : 'none' }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 12px' }}>{t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(245,241,234,0.65)', margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Inquiry form */}
    <section id="inquiry" style={{ padding: '120px 48px' }}>
      <SectionHead tag="◇ Confidential" num="004" title="Start a conversation." />
      <div style={{ background: TCG.paper, border: `1px solid ${TCG.line}`, padding: 48, maxWidth: 820 }}>
        <form>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
            <Field label="Your name" placeholder="Full name" />
            <Field label="Email" placeholder="your@email.com" />
          </div>
          <Field label="Business name" placeholder="Your company" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
            <Field label="Type of business" placeholder="Electrical, plumbing, HVAC..." />
            <Field label="Location" placeholder="City, Province" />
          </div>
          <Field label="Tell us about your situation" textarea placeholder="What prompted you to reach out?" />
          <button type="button" style={{ marginTop: 24, padding: '18px 32px', background: TCG.ink, color: TCG.paper, fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>
            Send confidential inquiry →
          </button>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 20, textAlign: 'center' }}>
            Stays between us · No disclosure without your permission
          </div>
        </form>
      </div>
    </section>

    <Footer />
  </div>
);

window.Partner = Partner;
