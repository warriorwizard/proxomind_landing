import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const salesFlow = ['Discover center needs', 'Map modalities', 'Demo ProxoPACS + ProxoAI', 'Deploy workflow', 'Expand with RIS/LIMS'];

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

export default function DealersPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <section className="hero-section" style={{ minHeight: '50vh', paddingTop: '10rem', paddingBottom: '2rem' }}>
        <div className="hero-content">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="accent-label"
          >
            Dealer Program
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title-main"
          >
            Help customers buy the machine and the <span className="gradient-text">workflow</span> around it.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle-main"
          >
            Proxomind gives equipment dealers a professional cloud PACS, medical AI, and diagnostic operations roadmap to attach to imaging equipment conversations.
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
              <span className="accent-label">Why Dealers Use Proxomind</span>
              <h2 className="section-title">A stronger story for diagnostic center buyers.</h2>
              <p className="section-desc" style={{ marginBottom: '2rem' }}>
                We do not sell hardware equipment. We help dealers and imaging businesses support the software side: viewing, reporting, AI workflow, remote access, and upcoming operations modules.
              </p>
              <button onClick={() => navigate('/contact')} className="btn-glass-primary">Become a Partner</button>
            </div>
            <div className="panel-visual" style={{ background: 'rgba(192, 132, 252, 0.05)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {dealerBenefits.slice(0, 2).map((benefit, i) => (
                  <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(129, 140, 248, 0.2)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontWeight: 600 }}>{i + 1}</div>
                    <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{benefit.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{benefit.copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
            <span className="accent-label">Sales Motion</span>
            <h2 className="section-title">A clean dealer workflow from inquiry to expansion.</h2>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '3rem' }}>
              {salesFlow.map((step, index) => (
                <motion.div 
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1.5rem', borderRadius: '100px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{String(index + 1).padStart(2, '0')}</span>
                    {step}
                  </div>
                  {index < salesFlow.length - 1 && (
                    <div style={{ color: 'var(--text-muted)', opacity: 0.5 }}>→</div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

