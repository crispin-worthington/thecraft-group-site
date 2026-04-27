// Home page content for The Craft Group — Field Manual direction
// Unified partnership messaging — no explicit 50/50, "we work together"

const Home = () => (
  <div style={{ background: TCG.ink, color: TCG.paper, fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>
    <Nav active="home" dark />

    {/* HERO */}
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: 760 }}>
      <HeroVideo src="hero-home.mp4" />
      <div style={{ position: 'relative', zIndex: 2, padding: '88px 48px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'rgba(245,241,234,0.5)', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 80 }}>
          <span>Field Manual / Vol. 01</span>
          <span>Skilled Trades — Owner Operators</span>
          <span>Canada · 2026</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 24 }}>
          <div style={{ width: 60, height: 1, background: TCG.accent }} />
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: TCG.accent, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
            Where craftsmen become owners
          </div>
        </div>

        <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 156, lineHeight: 0.88, letterSpacing: '-0.055em', margin: 0, maxWidth: 1500 }}>
          Built by hands.<br/>
          <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Run with</span> systems.
        </h1>

        <p style={{ fontSize: 22, lineHeight: 1.5, color: 'rgba(245,241,234,0.78)', maxWidth: 680, marginTop: 48 }}>
          We back tradespeople who treat their work like a craft. We become partners — your skill, our infrastructure — and build companies you actually own, together.
        </p>

        <div style={{ display: 'flex', gap: 0, marginTop: 56, border: `1px solid ${TCG.lineDark}`, alignSelf: 'flex-start', width: 'fit-content' }}>
          <a href="careers.html" style={{ padding: '20px 32px', background: TCG.accent, color: TCG.ink, fontSize: 14, fontWeight: 700, letterSpacing: '-0.005em', textDecoration: 'none' }}>
            I'm a craftsman →
          </a>
          <a href="partner.html" style={{ padding: '20px 32px', background: 'transparent', color: TCG.paper, fontSize: 14, fontWeight: 600, letterSpacing: '-0.005em', borderLeft: `1px solid ${TCG.lineDark}`, textDecoration: 'none' }}>
            I own a business →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, marginTop: 96, paddingTop: 32, borderTop: `1px solid ${TCG.lineDark}` }}>
          {[['02', 'OPERATING COMPANIES'], ['02', 'PROVINCES'], ['20+', 'CRAFTSMEN'], ['UNIFIED', 'PARTNERSHIP MODEL']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: TCG.paper }}>{n}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'rgba(245,241,234,0.55)', letterSpacing: '0.24em', marginTop: 12 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* THE PARTNERSHIP — was 50/50, now unified */}
    <section style={{ padding: '120px 48px', background: TCG.paper, color: TCG.ink }}>
      <SectionHead tag="◇ The Partnership" num="002" title="One company. Two parties. Same side of the table." />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start', maxWidth: 1500 }}>
        <div>
          <p style={{ fontSize: 22, lineHeight: 1.5, color: TCG.ink, margin: 0, fontWeight: 500 }}>
            We don't run portfolio companies from a boardroom. We build them with the people on the tools.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: TCG.muted, margin: '24px 0 0' }}>
            When a craftsman joins The Craft Group, we become partners in the truest sense — sharing ownership, sharing risk, sharing the upside. The operator brings the trade, the standards, the crew. We bring capital, AI-driven operations, marketing, and the back-office systems that take a one-truck shop into a real business.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: TCG.muted, margin: '20px 0 0' }}>
            Then we get out of the way and let the work speak for itself.
          </p>
        </div>

        <div style={{ background: TCG.ink, color: TCG.paper, padding: 48 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.accent, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 24 }}>
            The principle
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 28, lineHeight: 1.35, letterSpacing: '-0.025em', margin: 0, color: TCG.paper }}>
            "The trades built this country. The people who do the work should own the businesses they run."
          </p>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: TCG.muted, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 32 }}>
            — Danny Vass, Founder
          </div>
        </div>
      </div>
    </section>

    {/* THE MODEL — three columns */}
    <section style={{ padding: '120px 48px', background: TCG.paper, color: TCG.ink, borderTop: `1px solid ${TCG.line}` }}>
      <SectionHead tag="◇ The Model" num="003" title="Trade first. Technology that follows." />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, border: `1px solid ${TCG.line}` }}>
        {[
          { tag: 'Step One', n: 'A', title: 'A real craftsman.', body: 'Journeyman with their ticket, an apprentice ready to lead, or an owner-operator looking for a partner. The non-negotiable: pride in the work and the standards behind it.' },
          { tag: 'Step Two', n: 'B', title: 'Together, we run it.', body: 'You lead the crew and set the bar on the jobsite. We handle scheduling, dispatch, books, marketing, recruiting — the systems we\'ve built and refined across the portfolio. Trade first, tech second.' },
          { tag: 'Step Three', n: 'C', title: 'Ownership, earned.', body: 'A real equity stake on a clear ladder, with a path to majority ownership of a business with your name on the trucks. No private equity games, no five-year exit.' },
        ].map((s, i) => (
          <div key={s.n} style={{ padding: '48px 40px', borderRight: i < 2 ? `1px solid ${TCG.line}` : 'none', minHeight: 380 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.muted, letterSpacing: '0.24em', textTransform: 'uppercase' }}>{s.tag}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.accent, letterSpacing: '0.24em' }}>§ {s.n}</div>
            </div>
            <h3 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '0 0 24px' }}>{s.title}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: TCG.muted, margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* COMPANIES — listed */}
    <section style={{ padding: '120px 48px', background: TCG.paper, color: TCG.ink }}>
      <SectionHead tag="◇ The Portfolio" num="004" title="Two companies. Two trades." />
      {[
        { num: '01', name: 'Craft Electric', loc: 'Calgary, AB', trade: 'Electrical contracting · residential + commercial', year: '2024', href: 'https://craftelectric.ca' },
        { num: '02', name: 'Brink Landscaping', loc: 'Vernon, BC', trade: 'Landscape design, install, maintenance', year: '2025', href: 'https://brinklandscaping.com' },
      ].map((c) => (
        <a key={c.num} href={c.href} target="_blank" style={{ display: 'grid', gridTemplateColumns: '60px 2fr 2fr 1fr 80px', gap: 32, padding: '40px 0', borderTop: `1px solid ${TCG.line}`, alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 14, color: TCG.muted }}>{c.num}</div>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em', color: TCG.ink }}>{c.name}</div>
          <div style={{ fontSize: 16, color: TCG.muted }}>{c.trade}</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: TCG.muted, letterSpacing: '0.06em' }}>{c.loc} · {c.year}</div>
          <div style={{ textAlign: 'right', fontSize: 14, color: TCG.accent, fontWeight: 600 }}>Visit ↗</div>
        </a>
      ))}
      <div style={{ borderTop: `1px solid ${TCG.line}`, paddingTop: 32, marginTop: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: TCG.muted, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        More to come · 2026
      </div>
    </section>

    {/* CTA BAND */}
    <section style={{ padding: '100px 48px', background: TCG.accent, color: TCG.ink }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: TCG.ink, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 24, opacity: 0.7 }}>
            Two ways in
          </div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 80, letterSpacing: '-0.045em', lineHeight: 0.95, margin: 0, color: TCG.ink, maxWidth: 1000 }}>
            Ready to own your craft?
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href="careers.html" style={{ padding: '20px 28px', background: TCG.ink, color: TCG.paper, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>I'm a craftsman</span><span>→</span>
          </a>
          <a href="partner.html" style={{ padding: '20px 28px', background: 'transparent', color: TCG.ink, fontSize: 15, fontWeight: 600, textDecoration: 'none', border: `1px solid ${TCG.ink}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>I own a business</span><span>→</span>
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

window.Home = Home;
