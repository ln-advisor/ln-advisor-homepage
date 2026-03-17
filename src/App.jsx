import React from 'react';

const metrics = [
  { value: '4.0M', label: 'Total capacity (sats)' },
  { value: '510', label: 'Routing fees earned' },
  { value: '3', label: 'Channels loaded' },
  { value: '3', label: 'Peers loaded' },
];

const features = [
  {
    eyebrow: 'Channel fees',
    title: 'Review fee policy per channel.',
    body:
      'See current outbound and inbound fee policy, liquidity split, peer fee context, and historical routing fees from one channel view.',
  },
  {
    eyebrow: 'Node analysis',
    title: 'Inspect graph and routing position.',
    body:
      'Load graph data, forwarding history, mission control, and centrality from the node to inspect operator position.',
  },
  {
    eyebrow: 'Openings',
    title: 'Rank candidate peers for new channels.',
    body:
      'Use graph structure, current channels, and routing signals to score opening opportunities and review the strongest candidates.',
  },
  {
    eyebrow: 'Private pipeline',
    title: 'Review the outgoing request before it is sent.',
    body:
      'LN Advisor prepares a reduced request locally and shows the payload and request path before fee and opening recommendation routes run.',
  },
];

const trustPoints = [
  'LNC provides the live node session.',
  'Channel, graph, and routing data are normalized locally.',
  'Fee and opening recommendations use a reduced private request.',
  'Node Analysis shows graph and routing data from the node.',
  'The request inspector shows payload and transport details.',
];

const flow = [
  {
    step: '01',
    title: 'Connect with LNC',
    body:
      'Open a live session to the node and load the dashboard with real channel, peer, and routing data.',
  },
  {
    step: '02',
    title: 'Load operator views',
    body:
      'Review channel fees, opening candidates, and node analysis from the same workspace.',
  },
  {
    step: '03',
    title: 'Review the private request',
    body:
      'For fee and opening recommendations, inspect the reduced payload and outgoing request path before send.',
  },
  {
    step: '04',
    title: 'Run recommendations',
    body:
      'Get fee suggestions and opening recommendations based on live node state and network signals.',
  },
];

const contactChannels = [
  {
    label: 'Twitter',
    href: 'https://x.com/yourhandle',
    icon: <XIcon />,
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/yourserver',
    icon: <DiscordIcon />,
  },
  {
    label: 'Email',
    href: 'mailto:hello@yourdomain.com',
    icon: <MailIcon />,
  },
];

const dashboardChannelFees = [
  {
    peer: 'peer-beta',
    channelId: '123x1x0',
    outboundPpm: '250',
    inboundPpm: '450',
    liquidity: '650k / 350k',
    earned: '+300 sats',
    status: 'Active',
  },
  {
    peer: 'peer-gamma',
    channelId: '124x1x0',
    outboundPpm: '600',
    inboundPpm: '350',
    liquidity: '900k / 1.6M',
    earned: '+120 sats',
    status: 'Active',
  },
  {
    peer: 'peer-delta',
    channelId: '125x1x0',
    outboundPpm: '1200',
    inboundPpm: '1000',
    liquidity: '120k / 380k',
    earned: '+90 sats',
    status: 'Offline',
  },
];

const dashboardOpeningCandidates = [
  {
    alias: 'hub-liquidity-gap',
    centrality: '0.000910',
    mission: '12 success / 1 fail',
    note: 'Best reach in the graph.',
  },
  {
    alias: 'regional-router',
    centrality: '0.000640',
    mission: '7 success / 0 fail',
    note: 'Strong reliability from mission control.',
  },
  {
    alias: 'edge-bridge',
    centrality: '0.000280',
    mission: '1 success / 5 fail',
    note: 'Lower priority from weak routing history.',
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
            <div className="brand-subtitle">Secure and private Lightning Network advisor</div>
          </div>
        </div>

        <nav className="topnav" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#trust">Trust</a>
          <a href="#workflow">Workflow</a>
          <a href="#start">Start Here</a>
          <a href="#contact">Contact</a>
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
          <a
            className="button ghost"
            href="https://ln-advisor-docs.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </a>
        </div>
      </header>

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              LNC Telemetry · Dashboard Preview
            </div>
            <h1>
              Private intelligence for
              <span className="headline-gradient"> Lightning operators</span>
            </h1>
            <p className="hero-text">
              LN Advisor ingests live LNC telemetry and processes it through a
              secure pipeline for private channel, fee, and routing analysis.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#features">
                See features
              </a>
              <a className="button secondary" href="#trust">
                See private flow
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
                  <div className="console-title">Dashboard</div>
                  <div className="console-subtitle">Example values based on current ln-advisor-ui data</div>
                </div>
                <span className="status-pill">
                  <span className="status-pulse" />
                  Block 890000
                </span>
              </div>

              <div className="console-metrics">
                <MetricTile value="4.0M" label="Total capacity" accent="aqua" />
                <MetricTile value="1.67M" label="Local balance" accent="blue" />
                <MetricTile value="510" label="Fees earned" accent="amber" />
              </div>

              <div className="preview-grid">
                <section className="preview-panel">
                  <div className="preview-header">
                    <span>Channel Fees</span>
                    <span>Channel view</span>
                  </div>
                  <p className="preview-copy">
                    This shows current outbound fee, inbound peer fee, liquidity,
                    and routing fees for each channel.
                  </p>
                  <div className="preview-table">
                    {dashboardChannelFees.map((channel) => (
                      <article key={channel.channelId} className="preview-row">
                        <div className="preview-row-main">
                          <div>
                            <strong>{channel.peer}</strong>
                            <span>{channel.channelId}</span>
                          </div>
                          <span className={`preview-status ${channel.status === 'Active' ? 'is-active' : 'is-offline'}`}>
                            {channel.status}
                          </span>
                        </div>
                        <div className="preview-row-metrics">
                          <span>Out {channel.outboundPpm} ppm</span>
                          <span>In {channel.inboundPpm} ppm</span>
                          <span>{channel.liquidity}</span>
                          <span>{channel.earned}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="preview-panel">
                  <div className="preview-header">
                    <span>Opening Recommendations</span>
                    <span>Ranked peers</span>
                  </div>
                  <p className="preview-copy">
                    This ranks candidate peers from graph data and mission
                    control signals.
                  </p>
                  <div className="candidate-list">
                    {dashboardOpeningCandidates.map((candidate) => (
                      <article key={candidate.alias} className="candidate-card">
                        <div className="candidate-top">
                          <strong>{candidate.alias}</strong>
                          <span>{candidate.centrality}</span>
                        </div>
                        <p>{candidate.note}</p>
                        <div className="candidate-meta">{candidate.mission}</div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <div className="analysis-note">
                <div className="analysis-note-copy">
                  <div className="analysis-note-title">Node Analysis</div>
                  <p>
                    Node Analysis shows graph, forwarding, mission control, and
                    centrality data from the node.
                  </p>
                </div>
                <NodeAnalysisGraph />
              </div>
            </div>

            <div className="hero-notes">
              <div className="floating-card">
                <span className="mini-label">Private pipeline</span>
                <strong>Used for fee and opening recommendation requests</strong>
              </div>

              <div className="floating-card">
                <span className="mini-label">Node Analysis</span>
                <strong>Graph and routing views from live node data</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section section-grid" id="features">
          <div className="section-heading">
            <div className="eyebrow eyebrow-left">Features</div>
            {/* <h2>Built around the current product.</h2> */}
            <p>
              LN Advisor connects through LNC and gives operators one place to
              review channel fees, inspect node and network position, and rank
              opening opportunities. Fee and opening recommendation flows use a
              private pipeline. Node Analysis reads directly from the node.
            </p>
          </div>

          <div className="capability-grid">
            {features.map((item) => (
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
            <div className="eyebrow eyebrow-left">Private Pipeline</div>
            <h2>Private request flow built into the product.</h2>
            <p>
              LN Advisor connects through LNC, normalizes node data locally, and
              prepares a reduced request before recommendation routes are called.
              The same dashboard also shows direct node data for graph and
              routing review.
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
                title="LNC telemetry"
                body="Channels, peers, graph, forwards"
              />
              <div className="diagram-line" />
              <FlowNode
                icon={<ShieldIcon />}
                title="Private pipeline"
                body="Reduced request for fee and opening routes"
              />
              <div className="diagram-line" />
              <FlowNode
                icon={<SparkIcon />}
                title="Recommendations"
                body="Fee and opening results in the dashboard"
              />
            </div>
          </article>
        </section>

        <section className="section workflow" id="workflow">
          <div className="section-heading">
            <div className="eyebrow eyebrow-left">Workflow</div>
            <h2>How the product works.</h2>
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

        <section className="section callout" id="start">
          <div className="callout-copy">
            <div className="eyebrow eyebrow-left">Start Here</div>
            <h2>Documentation to install, connect, and test LN Advisor yourself.</h2>
            <p>
              Start with the docs. They cover install, local startup, LNC
              login, Channel Fees, Opening Recommendations, Node Analysis, and
              how to switch between Local and Verified Runtime (TEE).
            </p>
          </div>
          <div className="callout-actions">
            <a
              className="button primary"
              href="https://ln-advisor-docs.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Open Documentation
            </a>
            <a className="button secondary" href="#workflow">
              See workflow
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-links" aria-label="Contact links">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                className="contact-link"
                href={channel.href}
                aria-label={channel.label}
                title={channel.label}
              >
                {channel.icon}
              </a>
            ))}
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

function NodeAnalysisGraph() {
  return (
    <div className="analysis-graph" aria-hidden="true">
      <div className="analysis-graph-stage">
        <span className="analysis-edge edge-one" />
        <span className="analysis-edge edge-two" />
        <span className="analysis-edge edge-three" />
        <span className="analysis-edge edge-four" />
        <span className="analysis-graph-node node-core" />
        <span className="analysis-graph-node node-a" />
        <span className="analysis-graph-node node-b" />
        <span className="analysis-graph-node node-c" />
        <span className="analysis-graph-node node-d" />
      </div>
      <div className="analysis-graph-stats">
        <div>
          <span>Centrality</span>
          <strong>0.000910</strong>
        </div>
        <div>
          <span>Forwarding</span>
          <strong>510 sats</strong>
        </div>
      </div>
    </div>
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

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.32 4.37A16.7 16.7 0 0 0 16.2 3.1l-.2.4c-.24.49-.45 1-.62 1.52a15.4 15.4 0 0 0-4.76 0c-.17-.52-.38-1.03-.62-1.52l-.2-.4a16.62 16.62 0 0 0-4.11 1.27C3.1 8.02 2.44 11.56 2.77 15.05a16.95 16.95 0 0 0 5.05 2.57l.4-.65c.3-.49.57-1 .8-1.52-.88-.33-1.72-.75-2.49-1.24l.2-.15.2-.15a11.8 11.8 0 0 0 10.14 0l.2.15.2.15a11.1 11.1 0 0 1-2.5 1.24c.23.52.5 1.03.8 1.52l.4.65a16.9 16.9 0 0 0 5.06-2.57c.39-4.05-.66-7.56-2.91-10.68ZM9.68 12.9c-.98 0-1.79-.9-1.79-2s.79-2 1.79-2c1 0 1.8.9 1.79 2 0 1.1-.8 2-1.79 2Zm4.64 0c-.99 0-1.79-.9-1.79-2s.79-2 1.79-2c1 0 1.8.9 1.79 2 0 1.1-.79 2-1.79 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default App;
