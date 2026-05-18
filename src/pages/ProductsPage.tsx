import { useNavigate } from 'react-router-dom';

const productRows = [
  {
    name: 'ProxoPACS',
    status: 'Live',
    headline: 'Cloud PACS for modern imaging centers',
    summary: 'A browser-first PACS experience for DICOM viewing, study access, reporting workflow, multi-site access, and deployment support.',
    bullets: ['Cloud study access', 'DICOM viewer workflow', 'Reporting support', 'Multi-center operations'],
  },
  {
    name: 'ProxoAI',
    status: 'Live',
    headline: 'Medical AI agent for report and image analysis',
    summary: 'An AI layer for report review, image analysis assistance, clinical context extraction, and faster diagnostic workflow support.',
    bullets: ['Report analysis', 'Image analysis support', 'Clinical summaries', 'Workflow assistance'],
  },
  {
    name: 'ProxoLIMS',
    status: 'Upcoming',
    headline: 'Laboratory information workflow',
    summary: 'Upcoming tools for labs that need sample tracking, diagnostics coordination, report flow, and connected center operations.',
    bullets: ['Sample lifecycle', 'Lab coordination', 'Diagnostics workflow', 'Connected reporting'],
  },
  {
    name: 'ProxoRIS',
    status: 'Upcoming',
    headline: 'Radiology information system layer',
    summary: 'Upcoming RIS tooling for scheduling, modality utilization, department coordination, and imaging center visibility.',
    bullets: ['Appointments', 'Worklists', 'Resource planning', 'Department flow'],
  },
  {
    name: 'TeleReporting',
    status: 'Coming',
    headline: 'Remote radiology reporting workflow',
    summary: 'A planned reporting network for diagnostic centers, radiologists, and hospitals that need secure remote read operations.',
    bullets: ['Remote reads', 'Radiologist network', 'Center coordination', 'Report delivery'],
  },
];

const modalities = ['MRI', 'CT', 'X-Ray', 'Ultrasound', 'Mammography', 'PET/CT'];

function ProductIdentity({ status }: { status: string }) {
  return (
    <div className="product-identity">
      <img src="/favicon.svg" alt="Proxomind product mark" />
      <span>{status}</span>
    </div>
  );
}

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="page-hero product-page-hero">
        <div className="page-hero-content">
          <span className="section-label">Products</span>
          <h1 className="hero-title">
            The <span className="gradient-text">Proxomind Labs</span> medical software family.
          </h1>
          <p className="hero-subtitle">
            ProxoPACS and ProxoAI are available now. ProxoLIMS, ProxoRIS, and TeleReporting expand the platform into a full diagnostic operations stack.
          </p>
        </div>
      </section>

      <section className="section compact-section">
        <div className="section-inner">
          <div className="product-hero-strip">
            <div>
              <ProductIdentity status="Live" />
              <h2>ProxoPACS + ProxoAI</h2>
              <p>Cloud imaging workflow with report analysis, image analysis, and dealer-friendly deployment support.</p>
            </div>
            <div className="radiology-wall" aria-hidden="true">
              <div className="film-tile film-brain" />
              <div className="film-tile film-chest" />
              <div className="film-tile film-spine" />
            </div>
          </div>

          <div className="product-detail-grid">
            {productRows.map((product) => (
              <article className="product-detail-card" key={product.name}>
                <ProductIdentity status={product.status} />
                <h2>{product.name}</h2>
                <h3>{product.headline}</h3>
                <p>{product.summary}</p>
                <div className="capability-list">
                  {product.bullets.map((bullet) => <span key={bullet}>{bullet}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-inner split-grid">
          <div className="dealer-copy-card">
            <span className="section-label">Modality Support</span>
            <h2>Built around imaging software, not hardware sales.</h2>
            <p>
              Proxomind supports diagnostic workflows around existing modalities. We help centers and equipment partners connect imaging, reporting, AI assistance, and operational tools.
            </p>
            <button onClick={() => navigate('/contact')} className="btn-primary">Request Product Call</button>
          </div>
          <div className="modality-grid">
            {modalities.map((modality) => <span key={modality}>{modality}</span>)}
          </div>
        </div>
      </section>
    </div>
  );
}
