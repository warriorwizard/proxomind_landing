import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
              <Logo />
            </a>
            <p>Proxomind Labs builds medical imaging software for hospitals, diagnostic centers, radiology teams, and equipment dealers.</p>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>ProxoPACS</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>ProxoAI</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>ProxoLIMS</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>ProxoRIS</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>Products</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/dealers'); }}>Dealers</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@proxomind.com">contact@proxomind.com</a></li>
              <li><a href="#">India</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">2026 Proxomind Labs. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/proxomind/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://github.com/Proxomind-labs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
