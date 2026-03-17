import React from 'react';

const metrics = [
  { value: '100%', label: 'Client-side privacy pipeline' },
  { value: '<2m', label: 'To get actionable node insights' },
  { value: 'TEE', label: 'Verified compute boundary' },
  { value: '24/7', label: 'Routing optimization posture' },
];

const capabilities = [
  {
    eyebrow: 'Fee intelligence',
    title: 'See where routing margin is leaking.',
    body:
      'Compare forwarded volume, earned fees, and channel utilization in one operating view so operators can tune policy instead of guessing.',
  },
  {
    eyebrow: 'Protected recommendations',
    title: 'Ask for AI help without exposing the node.',
    body:
      'LN Advisor transforms sensitive identifiers before analysis so raw pubkeys, balances, and channel IDs do not leave the browser in plain form.',
  },
  {
    eyebrow: 'Network position',
    title: 'Choose openings with network context.',
    body:
      'Map centrality, peer quality, and topology opportunities to prioritize the next channels that strengthen routing reach.',
  },
];

const trustPoints = [
  'Privacy transformation runs before intelligence is requested.',
  'Sensitive routing data stays mapped to your node only on the client.',
  'Operators get a presentation-ready view of health, fees, and opportunity.',
  'Design language follows the main LN Advisor product instead of a generic marketing template.',
];

const flow = [
  {
    step: '01',
    title: 'Connect node telemetry',
    body:
      'Bring live channel, forwarding, and graph state into a clean operational workspace.',
  },
  {
    step: '02',
    title: 'Filter through PROPS',
    body:
      'Identifiers are transformed into an analysis-safe payload before recommendation requests are made.',
  },
  {
    step: '03',
    title: 'Review trusted output',
    body:
      'Receive fee actions, opening suggestions, and performance signals that map back to the real node client-side.',
  },
];

function useTheme() {
  const [darkMode, setDarkMode] = React.useState(() => {
    if (typeof window === 'undefined') return true;
    const stored = window.localStorage.getItem('ln-advisor-homepage-theme');
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  React.useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    window.localStorage.setItem(
      'ln-advisor-homepage-theme',
      darkMode ? 'dark' : 'light',
    );
  }, [darkMode]);

  return { darkMode, setDarkMode };
}

function App() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="site-shell" id="top">
      <BackgroundOrbs />
      <div className="grid-overlay" />

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <BoltIcon />
          </div>
          <div>
            <div className="brand-name">LN Advisor</div>
            <div className="brand-subtitle">Lightning intelligence for operators</div>
          </div>
        </div>

        <nav className="topnav" aria-label="Primary">
          <a href="#product">Product</a>
          <a href="#trust">Trust</a>
          <a href="#workflow">Workflow</a>
        </nav>

        <div className="topbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((current) => !current)}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`}
          >
            <span>{darkMode ? 'Dark' : 'Light'}</span>
            <span className="theme-toggle-icon" aria-hidden="true">
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>
          <a className="button ghost" href="#contact">
            View Product
          </a>
        </div>
      </header>

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Protected Pipeline · Product Showcase
            </div>
            <h1>
              Product intelligence for
              <span className="headline-gradient"> serious Lightning operators</span>
            </h1>
            <p className="hero-text">
              LN Advisor turns node telemetry into a clear operating narrative:
              fee posture, channel opportunity, and privacy-preserving AI guidance
              inside the same visual language used by the application itself.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#product">
                Explore the product
              </a>
              <a className="button secondary" href="#trust">
                See trust model
              </a>
            </div>

            <div className="hero-proof">
              {metrics.map((metric) => (
                <article key={metric.label} className="proof-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-visual" aria-label="Product preview">
            <div className="console-card console-card-main">
              <div className="console-header">
                <div>
                  <div className="console-title">Routing cockpit</div>
                  <div className="console-subtitle">Live operating overview</div>
                </div>
                <span className="status-pill">
                  <span className="status-pulse" />
                  Node healthy
                </span>
              </div>

              <div className="console-metrics">
                <MetricTile value="1.84 BTC" label="Local liquidity" accent="aqua" />
                <MetricTile value="184" label="Active channels" accent="blue" />
                <MetricTile value="+13%" label="Routing uplift" accent="amber" />
              </div>

              <div className="chart-panel">
                <div className="chart-axis">
                  <span>Fee capture</span>
                  <span>7d trend</span>
                </div>
                <div className="chart-bars" aria-hidden="true">
                  <span style={{ height: '36%' }} />
                  <span style={{ height: '54%' }} />
                  <span style={{ height: '42%' }} />
                  <span style={{ height: '72%' }} />
                  <span style={{ height: '68%' }} />
                  <span style={{ height: '84%' }} />
                  <span style={{ height: '96%' }} />
                </div>
              </div>

              <div className="signal-list">
                <SignalItem
                  icon={<BoltIcon />}
                  title="Fee adjustment ready"
                  body="12 channels are underpricing forwarded demand."
                />
                <SignalItem
                  icon={<ShieldIcon />}
                  title="Protected recommendation path"
                  body="Sensitive node identifiers are transformed before analysis."
                />
                <SignalItem
                  icon={<GraphIcon />}
                  title="Opening opportunity"
                  body="Two peers improve reach in high-volume corridors."
                />
              </div>
            </div>

            <div className="floating-card floating-card-left">
              <span className="mini-label">Signed output</span>
              <strong>TEE-backed recommendation bundle</strong>
            </div>

            <div className="floating-card floating-card-right">
              <span className="mini-label">Operator view</span>
              <strong>Fees, channels, graph, and trust in one surface</strong>
            </div>
          </aside>
        </section>

        <section className="section section-grid" id="product">
          <div className="section-heading">
            <div className="eyebrow eyebrow-left">Product</div>
            <h2>Designed like the app, but built to sell the product.</h2>
            <p>
              The homepage mirrors the original product tone: clean operational
              typography, cyan-to-blue gradients, soft panels, and an emphasis on
              privacy-backed intelligence instead of generic fintech decoration.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.title} className="capability-card">
                <span className="card-eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section trust-layout" id="trust">
          <article className="trust-panel">
            <div className="eyebrow eyebrow-left">Trust Model</div>
            <h2>Privacy is part of the product story, not a footnote.</h2>
            <p>
              The main UI already positions LN Advisor around PROPS, trusted
              execution, and operator-grade clarity. This homepage extends that
              framing into a public-facing product page with the same visual and
              messaging spine.
            </p>

            <ul className="trust-list">
              {trustPoints.map((point) => (
                <li key={point}>
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="diagram-panel">
            <div className="diagram-stage">
              <FlowNode
                icon={<NodeIcon />}
                title="Node snapshot"
                body="Channels, balances, forwards"
              />
              <div className="diagram-line" />
              <FlowNode
                icon={<ShieldIcon />}
                title="PROPS transform"
                body="Identifiers filtered client-side"
              />
              <div className="diagram-line" />
              <FlowNode
                icon={<SparkIcon />}
                title="Trusted analysis"
                body="Actionable output with provenance"
              />
            </div>
          </article>
        </section>

        <section className="section workflow" id="workflow">
          <div className="section-heading">
            <div className="eyebrow eyebrow-left">Workflow</div>
            <h2>Simple product narrative, grounded in how LN Advisor works.</h2>
          </div>

          <div className="workflow-grid">
            {flow.map((item) => (
              <article key={item.step} className="workflow-card">
                <div className="workflow-step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section callout" id="contact">
          <div className="callout-copy">
            <div className="eyebrow eyebrow-left">Ready</div>
            <h2>Show the product with the same confidence as the product UI.</h2>
            <p>
              This homepage gives `ln-advisor-homepage` a polished starting point
              that already feels native to the existing LN Advisor ecosystem.
            </p>
          </div>
          <div className="callout-actions">
            <a className="button primary" href="#top">
              Back to top
            </a>
            <a className="button secondary" href="#workflow">
              Review workflow
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function MetricTile({ value, label, accent }) {
  return (
    <article className={`metric-tile metric-${accent}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function SignalItem({ icon, title, body }) {
  return (
    <article className="signal-item">
      <div className="signal-icon" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}

function FlowNode({ icon, title, body }) {
  return (
    <article className="flow-node">
      <div className="flow-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function BackgroundOrbs() {
  return (
    <div className="orb-layer" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
    </div>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}

function GraphIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="12" cy="19" r="2" />
      <path d="M6.6 7.2 10.8 17" />
      <path d="m17.3 6.2-3.6 11" />
      <path d="M7 6h10" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6" />
      <path d="M12 15v6" />
      <path d="M3 12h6" />
      <path d="M15 12h6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3c0 6 4.79 9.79 9.79 9.79Z" />
    </svg>
  );
}

export default App;
