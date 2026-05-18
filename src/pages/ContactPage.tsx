import { useState } from 'react';
import emailjs from '@emailjs/browser';

const inquiryTopics = [
  'Dealer Inquiry',
  'ProxoPACS Demo',
  'ProxoAI Workflow',
  'Hospital / Diagnostic Center Deployment',
  'ProxoLIMS / ProxoRIS Roadmap',
  'TeleReporting Partnership',
];

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
    <div>
      <section className="page-hero contact-page-hero">
        <div className="page-hero-content">
          <span className="section-label">Contact</span>
          <h1 className="hero-title">
            Talk to <span className="gradient-text">Proxomind Labs</span>
          </h1>
          <p className="hero-subtitle">
            For dealers, hospitals, diagnostic centers, and radiology teams exploring ProxoPACS, ProxoAI, or the upcoming LIMS/RIS/TeleReporting roadmap.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-inner">
          <div className="contact-wrapper med-contact-wrapper">
            <div className="contact-info med-contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>contact@proxomind.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7868e6" strokeWidth="2">
                    <path d="M3 5h18M3 12h18M3 19h18"/>
                    <path d="M7 5v14M17 5v14"/>
                  </svg>
                </div>
                <div>
                  <h4>Best Fit</h4>
                  <p>Cloud PACS, AI analysis, reporting workflow, dealer enablement</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <path d="M20 7h-9"/>
                    <path d="M14 17H5"/>
                    <circle cx="17" cy="17" r="3"/>
                    <circle cx="7" cy="7" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Response</h4>
                  <p>Share your center, modality mix, and dealer/customer requirement.</p>
                </div>
              </div>
              <div className="contact-visual-card" aria-hidden="true">
                <span>Workflow Review</span>
                <strong>ProxoPACS + ProxoAI demo path</strong>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {status === 'success' && (
                <div className="alert alert-success">
                  Message sent. The Proxomind team will contact you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="alert alert-error">
                  Something went wrong. Please try again or email contact@proxomind.com directly.
                </div>
              )}
              <div className="form-group-row">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Organization / Dealer Name"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-select"
                    required
                  >
                    {inquiryTopics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Tell us what you want to deploy, sell, support, or evaluate..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Medical Software Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
