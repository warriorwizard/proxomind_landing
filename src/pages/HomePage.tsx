import { useNavigate } from 'react-router-dom';

const products = [
  {
    name: 'ProxoPACS',
    status: 'Live',
    title: 'Cloud PACS for imaging centers',
    copy: 'Web-based DICOM viewing, study access, reporting workflow, and multi-site imaging support for MRI, CT, X-ray, ultrasound, and more.',
  },
  {
    name: 'ProxoAI',
    status: 'Live',
    title: 'Medical AI agent for radiology teams',
    copy: 'AI support for report analysis, image analysis, clinical summarization, and faster review of imaging workflows.',
  },
  {
    name: 'ProxoLIMS',
    status: 'Upcoming',
    title: 'Lab operations layer',
    copy: 'Planned LIMS tools for sample tracking, lab workflow coordination, diagnostics operations, and connected reporting.',
  },
  {
    name: 'ProxoRIS',
    status: 'Upcoming',
    title: 'Radiology department workflow',
    copy: 'Planned RIS tools for appointments, worklists, resource coordination, radiology operations, and center-level visibility.',
  },
  {
    name: 'TeleReporting',
    status: 'Coming',
    title: 'Remote reporting network',
    copy: 'A remote reporting workflow for diagnostic centers, radiologists, hospitals, and dealer-supported installations.',
  },
];

const dealerPoints = [
  'Software story for every machine installation',
  'CloudPACS deployment and onboarding support',
  'AI-assisted reporting workflow positioning',
  'Upcoming LIMS, RIS, and telereporting roadmap',
];

function ProductBadge({ status }: { status: string }) {
  return (
    <div className="product-badge">
      <img src="/favicon.svg" alt="" />
      <span>{status}</span>
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero med-hero">
        <div className="hero-content med-hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Proxomind Labs medical software
          </div>
          <h1 className="hero-title">
            Cloud imaging, <span className="gradient-text">medical AI</span>, and dealer-ready diagnostic workflows.
          </h1>
          <p className="hero-subtitle">
            We build ProxoPACS, ProxoAI, and the upcoming ProxoLIMS, ProxoRIS, and TeleReporting stack for hospitals, diagnostic centers, radiology teams, and equipment dealers.
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/products')} className="btn-primary">
              Explore Products
            </button>
            <button onClick={() => navigate('/contact')} className="btn-secondary">
              Book Dealer Demo
            </button>
          </div>
        </div>

        <div className="medical-hero-panel" aria-hidden="true">
          <div className="scan-window">
            <div className="scan-header">
              <span>DICOM Study</span>
              <strong>AI Review</strong>
            </div>
            <div className="xray-film">
              <span className="rib rib-1" />
              <span className="rib rib-2" />
              <span className="rib rib-3" />
              <span className="rib rib-4" />
              <span className="scan-sweep" />
            </div>
          </div>
          <div className="mini-worklist">
            <span>MR Brain</span>
            <span>CT Chest</span>
            <span>XR Spine</span>
            <span>US Abdomen</span>
          </div>
        </div>
      </section>

      <section id="products" className="section compact-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Product Family</span>
            <h2 className="section-title">One Proxomind Labs stack for medical imaging businesses.</h2>
            <p className="section-subtitle">
              Not hardware sales. Software that helps imaging centers and dealers deploy modern diagnostic workflows around existing equipment.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="medical-product-card" key={product.name}>
                <ProductBadge status={product.status} />
                <h3>{product.name}</h3>
                <h4>{product.title}</h4>
                <p>{product.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-inner split-grid">
          <div className="dealer-copy-card">
            <span className="section-label">For Equipment Dealers</span>
            <h2>Give every MRI, CT, X-ray, and ultrasound sale a stronger software layer.</h2>
            <p>
              Proxomind helps dealers support customers beyond hardware delivery with cloud PACS, AI analysis support, reporting workflows, and a product roadmap designed for diagnostic operations.
            </p>
            <button onClick={() => navigate('/contact')} className="btn-primary">Start Dealer Conversation</button>
          </div>
          <div className="dealer-proof-grid">
            {dealerPoints.map((point) => (
              <div className="dealer-proof" key={point}>
                <span />
                <strong>{point}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Workflow</span>
            <h2 className="section-title">From scan acquisition to report intelligence.</h2>
          </div>
          <div className="workflow-grid">
            {['Capture from modalities', 'Store studies in CloudPACS', 'Analyze with ProxoAI', 'Coordinate RIS/LIMS workflows', 'Enable telereporting'].map((step, index) => (
              <article className="workflow-step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ marginBottom: '4rem' }}>
        <div className="cta-inner">
          <h2>Build your diagnostic software story with Proxomind.</h2>
          <p>CloudPACS is live. ProxoAI is live. ProxoLIMS, ProxoRIS, and TeleReporting are coming next.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/products')} className="btn-primary">View Platform</button>
            <button onClick={() => navigate('/contact')} className="btn-secondary">Contact Team</button>
          </div>
        </div>
      </section>
    </div>
  );
}
