// About page
const About = () => (
  <div style={{ background: TCG.paper, color: TCG.ink, fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>
    <Nav active="about" />

    {/* Page hero */}
    <section style={{ padding: '120px 48px 80px', borderBottom: `1px solid ${TCG.line}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
        <div style={{ width: 60, height: 1, background: TCG.accent }} />
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: TCG.accent, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
          About — § 01
        </div>
      </div>
      <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 132, lineHeight: 0.9, letterSpacing: '-0.055em', margin: 0, maxWidth: 1500 }}>
        Built around<br/><span style={{ fontStyle: 'italic', fontWeight: 400 }}>real</span> craftsmen.
      </h1>
      <p style={{ fontSize: 22, lineHeight: 1.5, color: TCG.muted, marginTop: 40, maxWidth: 720 }}>
        We started The Craft Group because the best tradespeople deserve more than a paycheque — they deserve a partnership.
      </p>
    </section>

    {/* Story */}
    <section style={{ padding: '120px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <SectionHead tag="◇ Our Story" num="002" title="It started with a simple idea." />
          <div style={{ fontSize: 18, lineHeight: 1.65, color: TCG.muted }}>
            <p style={{ marginBottom: 20 }}>The best tradespeople are craftsmen — they take pride in the work. But most are stuck working for someone else, building someone else's company.</p>
            <p style={{ marginBottom: 20 }}>What if there was a way to back those people? Give them a business to run, hand the back-office headaches to systems we'd already built, and partner with them on real ownership of what they grew?</p>
            <p>That idea became The Craft Group. Founded by Danny Vass, we started with Craft Electric in Calgary and Brink Landscaping in Vernon, BC. Two companies, two trades, one model: find ambitious craftsmen, partner with them, and build businesses they own alongside us.</p>
          </div>
        </div>
        <div style={{ background: TCG.ink, color: TCG.paper, padding: 56 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.accent, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 24 }}>The Vision</div>
          <p style={{ fontSize: 24, lineHeight: 1.4, letterSpacing: '-0.02em', margin: 0 }}>
            "The trades built this country. The people who do the work should own the businesses they run. We're building the infrastructure to make that real — one operator, one company, one trade at a time."
          </p>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: TCG.muted, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 32 }}>— Danny Vass</div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section style={{ padding: '120px 48px', background: TCG.ink, color: TCG.paper }}>
      <SectionHead tag="◇ Mission" num="003" title="Turn craftsmen into owners." dark />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${TCG.lineDark}` }}>
        {[
          { tag: 'For Craftsmen', title: 'A real path to ownership.', body: 'Recruit, develop, and partner with ambitious tradespeople. Real equity in the business you run, on a clear ladder.' },
          { tag: 'For Retiring Owners', title: 'A respectful exit.', body: 'A buyer who keeps the brand, the team, and the standards intact. Your best people get a path forward — not a layoff.' },
          { tag: 'For Communities', title: 'Owners who live there.', body: 'When the person running the business owns it, the work is better. Period. Local accountability beats absentee management every time.' },
        ].map((m, i) => (
          <div key={m.tag} style={{ padding: 40, borderRight: i < 2 ? `1px solid ${TCG.lineDark}` : 'none' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 32 }}>{m.tag}</div>
            <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 20px' }}>{m.title}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: 'rgba(245,241,234,0.7)', margin: 0 }}>{m.body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Leadership */}
    <section style={{ padding: '120px 48px' }}>
      <SectionHead tag="◇ Leadership" num="004" title="Who's behind this." />
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 56, alignItems: 'flex-start' }}>
        <div style={{ aspectRatio: '1/1', background: '#3a342b', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 16, left: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'rgba(245,241,234,0.55)', letterSpacing: '0.26em' }}>◉ PORTRAIT</div>
          <div style={{ position: 'absolute', bottom: 24, left: 24, color: TCG.paper, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.18em' }}>DV / 2026</div>
        </div>
        <div>
          <h3 style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, margin: '0 0 12px' }}>Danny Vass</h3>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: TCG.accent, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 32 }}>Founder & CEO</div>
          <div style={{ fontSize: 17, lineHeight: 1.65, color: TCG.muted, maxWidth: 720 }}>
            <p style={{ marginBottom: 16 }}>Danny has built and scaled businesses across multiple industries — from a medical clinic startup that sold for $20M to a beverage company that went public at a $70M valuation. He's done manufacturing, construction, cannabis, and tech.</p>
            <p style={{ marginBottom: 16 }}>His thesis is simple: the best tradespeople treat their work like art. They deserve to own what they build, not just collect a wage.</p>
            <p>He splits his time between Calgary and Vernon, working hands-on with each company's team. His job is to find the right people, acquire the right businesses, and connect the two — then get out of the way.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section style={{ padding: '120px 48px', background: TCG.paper, borderTop: `1px solid ${TCG.line}` }}>
      <SectionHead tag="◇ Values" num="005" title="What we stand for." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: `1px solid ${TCG.line}` }}>
        {[
          ['A.', 'Craft is art.', 'Skilled trade work is a craft that can be honed into art. We back people who see it that way.'],
          ['B.', 'Ownership over employment.', 'The best people should own what they build. Real equity, not just better wages.'],
          ['C.', 'AI does the paperwork.', 'Scheduling, invoicing, marketing, ops — handled by systems so craftsmen focus on the work.'],
          ['D.', 'Back ambitious people.', 'We invest in people who want more. If you\'re hungry, we give you the tools to win.'],
        ].map(([n, t, b]) => (
          <div key={n} style={{ padding: '40px 32px 40px 0', borderRight: `1px solid ${TCG.line}`, paddingLeft: 32 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.accent, letterSpacing: '0.24em', marginBottom: 24 }}>{n}</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 12px' }}>{t}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: TCG.muted, margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

window.About = About;
