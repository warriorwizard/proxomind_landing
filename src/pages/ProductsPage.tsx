import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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

function ProductBadge({ status }: { status: string }) {
  const isLive = status === 'Live';
  return (
    <div className={`glass-badge ${isLive ? 'live' : 'upcoming'}`}>
      {isLive && <span className="status-dot animate-pulse"></span>}
      <span>{status}</span>
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <section className="hero-section" style={{ minHeight: '60vh', paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="hero-content">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="accent-label"
          >
            Products
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title-main"
          >
            The <span className="gradient-text">Proxomind Labs</span> <br/> software family.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle-main"
          >
            ProxoPACS and ProxoAI are available now. ProxoLIMS, ProxoRIS, and TeleReporting expand the platform into a full diagnostic operations stack.
          </motion.p>
        </div>
      </section>

      <section className="features-section" style={{ paddingTop: '2rem' }}>
        <motion.div 
          className="section-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="glass-panel split-panel" style={{ marginBottom: '4rem' }}>
            <div className="panel-content">
              <ProductBadge status="Live" />
              <h2 className="section-title">ProxoPACS + ProxoAI</h2>
              <p className="section-desc" style={{ marginBottom: 0 }}>Cloud imaging workflow with report analysis, image analysis, and dealer-friendly deployment support.</p>
            </div>
            <div className="panel-visual" style={{ background: 'rgba(99, 102, 241, 0.05)' }}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                    style={{ width: '80px', height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {productRows.map((product) => (
              <motion.article 
                variants={fadeInUp} 
                className="glass-card hover-lift" 
                key={product.name}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', padding: '3rem' }}
              >
                <div>
                  <div className="card-glow-bg"></div>
                  <ProductBadge status={product.status} />
                  <h2 className="card-title-lg" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>{product.name}</h2>
                  <h3 className="card-subtitle" style={{ fontSize: '1.25rem' }}>{product.headline}</h3>
                  <p className="card-copy" style={{ fontSize: '1.1rem' }}>{product.summary}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="glass-list">
                    {product.bullets.map((bullet) => (
                      <div className="glass-list-item" key={bullet} style={{ padding: '0.75rem 1.25rem' }}>
                        <div className="check-icon" style={{ width: '20px', height: '20px' }}>✓</div>
                        <span style={{ fontSize: '0.95rem' }}>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="workflow-section">
        <motion.div 
          className="section-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="glass-panel text-center" style={{ padding: '5rem 2rem' }}>
            <span className="accent-label">Modality Support</span>
            <h2 className="section-title">Built around imaging software, <br/> not hardware sales.</h2>
            <p className="section-desc">
              Proxomind supports diagnostic workflows around existing modalities. We help centers and equipment partners connect imaging, reporting, AI assistance, and operational tools.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '3rem' }}>
              {modalities.map((modality, i) => (
                <motion.div 
                  key={modality}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1.5rem', borderRadius: '100px', fontWeight: 500 }}
                >
                  {modality}
                </motion.div>
              ))}
            </div>

            <button onClick={() => navigate('/contact')} className="btn-glass-primary" style={{ marginTop: '4rem' }}>
              Request Product Call
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

