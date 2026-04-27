// Careers page
const Careers = () => (
  <div style={{ background: TCG.paper, color: TCG.ink, fontFamily: 'Inter, sans-serif' }}>
    <Nav active="careers" />

    <section style={{ padding: '120px 48px 80px', background: TCG.ink, color: TCG.paper }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
        <div style={{ width: 60, height: 1, background: TCG.accent }} />
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: TCG.accent, letterSpacing: '0.24em', textTransform: 'uppercase' }}>Careers — § 01</div>
      </div>
      <h1 style={{ fontWeight: 800, fontSize: 132, lineHeight: 0.9, letterSpacing: '-0.055em', margin: 0, maxWidth: 1500 }}>
        Got the ticket?<br/><span style={{ fontStyle: 'italic', fontWeight: 400 }}>Get</span> the keys.
      </h1>
      <p style={{ fontSize: 22, lineHeight: 1.5, color: 'rgba(245,241,234,0.78)', marginTop: 40, maxWidth: 720 }}>
        We back ambitious tradespeople who want more than a paycheque. Lead a crew. Run a branch. Own a business — together with us.
      </p>
    </section>

    {/* The path */}
    <section style={{ padding: '120px 48px' }}>
      <SectionHead tag="◇ The Path" num="002" title="From craftsman to owner." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: `1px solid ${TCG.line}` }}>
        {[
          ['01', 'Skilled worker', 'Show up, do clean work, take pride in it. Apprentice or journeyman — we meet you where you are.'],
          ['02', 'Crew lead', 'Lead the jobsite. Train apprentices. Take responsibility for quality and outcomes. Earn the first equity tranche.'],
          ['03', 'Branch operator', 'Run a region. Manage P&L. Own customer relationships. Equity grows with the business you build.'],
          ['04', 'Owner', 'Majority equity in the company you operate. Your name on the trucks. Your standards on every job.'],
        ].map(([n, t, b], i) => (
          <div key={n} style={{ padding: '40px 32px', borderRight: i < 3 ? `1px solid ${TCG.line}` : 'none' }}>
            <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.04em', color: TCG.accent, lineHeight: 1, marginBottom: 24 }}>{n}</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.025em', margin: '0 0 12px' }}>{t}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: TCG.muted, margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Open roles */}
    <section style={{ padding: '120px 48px', background: TCG.paper, borderTop: `1px solid ${TCG.line}` }}>
      <SectionHead tag="◇ Open Roles" num="003" title="Where we're hiring now." />
      {[
        { num: '01', title: 'Journeyman Electrician', co: 'Craft Electric · Calgary, AB', tags: ['Full-time', 'Equity track'] },
        { num: '02', title: 'Apprentice Electrician (3rd / 4th Year)', co: 'Craft Electric · Calgary, AB', tags: ['Full-time', 'Mentorship'] },
        { num: '03', title: 'Landscape Foreman', co: 'Brink Landscaping · Vernon, BC', tags: ['Full-time', 'Equity track'] },
        { num: '04', title: 'Irrigation Technician', co: 'Brink Landscaping · Vernon, BC', tags: ['Seasonal → FT'] },
      ].map(r => (
        <a key={r.num} href="contact.html" style={{ display: 'grid', gridTemplateColumns: '60px 3fr 2fr 2fr 80px', gap: 32, padding: '36px 0', borderTop: `1px solid ${TCG.line}`, alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 14, color: TCG.muted }}>{r.num}</div>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.025em' }}>{r.title}</div>
          <div style={{ fontSize: 15, color: TCG.muted }}>{r.co}</div>
          <div style={{ display: 'flex', gap: 8 }}>{r.tags.map(t => <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, padding: '5px 10px', border: `1px solid ${TCG.line}`, color: TCG.muted, letterSpacing: '0.12em' }}>{t}</span>)}</div>
          <div style={{ textAlign: 'right', fontSize: 14, color: TCG.accent, fontWeight: 600 }}>Apply →</div>
        </a>
      ))}
      <div style={{ borderTop: `1px solid ${TCG.line}` }} />
    </section>

    {/* Why */}
    <section style={{ padding: '120px 48px', background: TCG.ink, color: TCG.paper }}>
      <SectionHead tag="◇ Why Join" num="004" title="What you get." dark />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${TCG.lineDark}` }}>
        {[
          ['Ownership, not just a paycheque', 'We don\'t just hire you. We develop you. When you\'re ready, you take equity in the business you run.'],
          ['Tools that don\'t get in the way', 'Scheduling, invoicing, marketing — handled by systems we\'ve built. You focus on the craft and the crew.'],
          ['Make more money', 'Owners earn more than employees. Period. We back people who want to bet on themselves.'],
        ].map(([t, b], i) => (
          <div key={t} style={{ padding: '40px', borderRight: i < 2 ? `1px solid ${TCG.lineDark}` : 'none' }}>
            <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 16px' }}>{t}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(245,241,234,0.7)', margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

window.Careers = Careers;
