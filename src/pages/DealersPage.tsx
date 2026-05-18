import { useNavigate } from 'react-router-dom';

const dealerBenefits = [
  {
    title: 'Bundle software with machine sales',
    copy: 'Position ProxoPACS and ProxoAI as the software layer around MRI, CT, X-ray, ultrasound, and other diagnostic installations.',
  },
  {
    title: 'Support customer operations after delivery',
    copy: 'Help centers with cloud study access, reporting workflow, AI analysis support, and future RIS/LIMS expansion.',
  },
  {
    title: 'Create recurring product value',
    copy: 'Move beyond one-time hardware delivery with a platform roadmap that customers can grow into over time.',
  },
  {
    title: 'Simplify the product story',
    copy: 'One Proxomind Labs family: ProxoPACS, ProxoAI, upcoming ProxoLIMS, ProxoRIS, and TeleReporting.',
  },
];

const salesFlow = ['Discover center needs', 'Map modalities', 'Demo CloudPACS + ProxoAI', 'Deploy workflow', 'Expand with RIS/LIMS'];

export default function DealersPage() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="page-hero dealer-page-hero">
        <div className="page-hero-content">
          <span className="section-label">Dealer Program</span>
          <h1 className="hero-title">
            Help customers buy the machine and the <span className="gradient-text">workflow</span> around it.
          </h1>
          <p className="hero-subtitle">
            Proxomind gives equipment dealers a professional cloud PACS, medical AI, and diagnostic operations roadmap to attach to imaging equipment conversations.
          </p>
        </div>
      </section>

      <section className="section compact-section">
        <div className="section-inner split-grid">
          <div className="dealer-copy-card">
            <span className="section-label">Why Dealers Use Proxomind</span>
            <h2>A stronger story for diagnostic center buyers.</h2>
            <p>
              We do not sell hardware equipment. We help dealers and imaging businesses support the software side: viewing, reporting, AI workflow, remote access, and upcoming operations modules.
            </p>
            <button onClick={() => navigate('/contact')} className="btn-primary">Become a Partner</button>
          </div>
          <div className="dealer-proof-grid dealer-proof-grid-large">
            {dealerBenefits.map((benefit) => (
              <article className="dealer-proof" key={benefit.title}>
                <span />
                <strong>{benefit.title}</strong>
                <p>{benefit.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Sales Motion</span>
            <h2 className="section-title">A clean dealer workflow from inquiry to expansion.</h2>
          </div>
          <div className="workflow-grid">
            {salesFlow.map((step, index) => (
              <article className="workflow-step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
