import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header') as HTMLElement;
      if (header) {
        if (window.scrollY > 50) {
          header.style.background = 'rgba(3, 3, 8, 0.9)';
          header.style.backdropFilter = 'blur(20px)';
        } else {
          header.style.background = 'transparent';
          header.style.backdropFilter = 'none';
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <Logo />
        </a>
        <nav className="nav">
          <button
            onClick={() => navigate('/')}
            className={`nav-link${isActive('/') ? ' nav-link-active' : ''}`}
          >Home</button>
          <button
            onClick={() => navigate('/products')}
            className={`nav-link${isActive('/products') ? ' nav-link-active' : ''}`}
          >Products</button>
          <button
            onClick={() => navigate('/dealers')}
            className={`nav-link${isActive('/dealers') ? ' nav-link-active' : ''}`}
          >Dealers</button>
          <button
            onClick={() => navigate('/contact')}
            className={`nav-link${isActive('/contact') ? ' nav-link-active' : ''}`}
          >Contact</button>
          <button className="cta-btn" onClick={() => navigate('/contact')}>Dealer Inquiry</button>
        </nav>
        <button className="mobile-menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
