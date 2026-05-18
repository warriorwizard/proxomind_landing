import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const inquiryTopics = [
  'Dealer Inquiry',
  'ProxoPACS Demo',
  'ProxoAI Workflow',
  'Hospital / Diagnostic Center Deployment',
  'ProxoLIMS / ProxoRIS Roadmap',
  'TeleReporting Partnership',
];

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

export default function ContactPage() {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const [formData, setFormData] = useState({ name: '', email: '', organization: '', subject: 'Dealer Inquiry', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: `Organization: ${formData.organization || '-'}\nTopic: ${formData.subject}\n\n${formData.message}`,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', organization: '', subject: 'Dealer Inquiry', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <section className="hero-section" style={{ minHeight: '40vh', paddingTop: '10rem', paddingBottom: '2rem' }}>
        <div className="hero-content">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="accent-label"
          >
            Contact
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title-main"
          >
            Talk to <span className="gradient-text">Proxomind Labs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle-main"
          >
            For dealers, hospitals, diagnostic centers, and radiology teams exploring ProxoPACS, ProxoAI, or the upcoming LIMS/RIS/TeleReporting roadmap.
          </motion.p>
        </div>
      </section>

      <section className="contact-section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <motion.div 
          className="section-inner"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{ maxWidth: '1000px' }}
        >
          <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '0' }}>
            <motion.div variants={fadeInUp} style={{ padding: '4rem 3rem', background: 'rgba(3, 3, 8, 0.4)', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', fontFamily: 'Space Grotesk' }}>Contact Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(129, 140, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>Email</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>contact@proxomind.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(192, 132, 252, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2">
                      <path d="M3 5h18M3 12h18M3 19h18"/>
                      <path d="M7 5v14M17 5v14"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>Best Fit</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Cloud PACS, AI analysis, reporting workflow</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '4rem', padding: '1.5rem', background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.1), transparent)', borderRadius: '12px', border: '1px solid rgba(129, 140, 248, 0.2)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)' }}>Next Steps</span>
                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', fontWeight: 500 }}>Share your center details and modality mix to arrange a personalized ProxoPACS demo.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} style={{ padding: '4rem' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {status === 'success' && (
                  <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '8px', fontSize: '0.95rem' }}>
                    Message sent. The Proxomind team will contact you shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', fontSize: '0.95rem' }}>
                    Something went wrong. Please try again or email directly.
                  </div>
                )}
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontFamily: 'inherit' }}
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontFamily: 'inherit' }}
                  />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <input
                    type="text"
                    placeholder="Organization / Dealer Name"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontFamily: 'inherit' }}
                  />
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(3,3,8,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontFamily: 'inherit', appearance: 'none' }}
                  >
                    {inquiryTopics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
                  </select>
                </div>
                
                <textarea
                  placeholder="Tell us what you want to deploy, sell, support, or evaluate..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontFamily: 'inherit', resize: 'vertical' }}
                />
                
                <button type="submit" className="btn-glass-primary" disabled={loading} style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                  {loading ? 'Sending...' : 'Send Inquiry'}
                  {!loading && <span className="btn-glow"></span>}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

