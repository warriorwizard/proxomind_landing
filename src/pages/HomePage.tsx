import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const productSnapshot = [
  ['ProxoPACS', 'Live cloud PACS'],
  ['ProxoAI', 'Live medical AI'],
  ['ProxoLIMS', 'Upcoming labs'],
  ['ProxoRIS', 'Upcoming radiology ops'],
  ['TeleReporting', 'Coming remote reads'],
];

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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-badge-glass"
          >
            <span className="hero-badge-dot" />
            Proxomind Labs
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title-main"
          >
            Intelligence for <br/> <span className="gradient-text-glow">modern diagnostics</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-subtitle-main"
          >
            Building the next generation of clinical tools. ProxoPACS, ProxoAI, and unified 
            operations for radiology centers, hospitals, and medical teams.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-actions"
          >
            <button onClick={() => navigate('/products')} className="btn-glass-primary">
              Explore Platform
              <span className="btn-glow"></span>
            </button>
            <button onClick={() => navigate('/contact')} className="btn-glass-secondary">
              Book Demo
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="hero-dashboard-preview"
        >
          <div className="glass-panel main-dashboard-panel">
            <div className="panel-header">
              <div className="window-controls">
                <span/> <span/> <span/>
              </div>
              <div className="panel-title">Proxomind Ecosystem</div>
            </div>
            <div className="panel-body product-snapshot-grid">
              {productSnapshot.map(([name, copy], i) => (
                <div key={name} className="snapshot-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <h4>{name}</h4>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="features-section">
        <motion.div 
          className="section-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header-center">
            <span className="accent-label">Product Family</span>
            <h2 className="section-title-xl">One unified <span className="gradient-text">clinical stack</span>.</h2>
            <p className="section-desc">
              We replace fragmented medical software with a cohesive, AI-native platform designed around the diagnostic workflow.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="glass-grid-3">
            {products.map((product) => (
              <motion.article variants={fadeInUp} className="glass-card hover-lift" key={product.name}>
                <div className="card-glow-bg"></div>
                <ProductBadge status={product.status} />
                <h3 className="card-title-lg">{product.name}</h3>
                <h4 className="card-subtitle">{product.title}</h4>
                <p className="card-copy">{product.copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="workflow-section">
        <motion.div 
          className="section-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="glass-panel split-panel">
            <div className="panel-content">
              <span className="accent-label">For Equipment Partners</span>
              <h2>A stronger software layer for every modality sale.</h2>
              <p>
                Proxomind helps dealers support customers beyond hardware delivery. Pair your MRI, CT, or X-ray installations with our cloud PACS, AI tools, and reporting workflows.
              </p>
              <button onClick={() => navigate('/contact')} className="btn-glass-primary mt-6">
                Partner with us
              </button>
            </div>
            <div className="panel-visual glass-list">
              {['Cloud PACS deployment', 'AI-assisted reporting', 'Modality integration', 'Operational roadmap'].map((point, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="glass-list-item" 
                  key={point}
                >
                  <div className="check-icon">✓</div>
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="cta-section-glass">
        <motion.div 
          className="glass-panel cta-panel text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to upgrade your workflow?</h2>
          <p>Join imaging centers already using ProxoPACS and ProxoAI.</p>
          <div className="cta-actions">
            <button onClick={() => navigate('/products')} className="btn-glass-secondary">View Platform</button>
            <button onClick={() => navigate('/contact')} className="btn-glass-primary">Get Started</button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

