import React from 'react';
import Hero from './components/Hero';
import WhenWhere from './components/WhenWhere';
import ContentMap from './components/ContentMap';
import HostCard from './components/HostCard';
import Register from './components/Register';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#ffffff',
        borderBottom: '3px solid var(--border-silent)',
        padding: '16px 24px'
      }}>
        <div style={{
          maxWidth: 'var(--container-width)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo / Title */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="header-logo-text" style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 850,
            fontSize: '1.2rem',
            letterSpacing: '0.5px',
            color: 'var(--text-dark)',
            textDecoration: 'none',
            whiteSpace: 'nowrap'
          }}>
            Mohammed Irfan Ahmed
          </a>

          {/* WEBINAR Pill & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="#register" onClick={scrollToSection('register')} className="btn-primary header-claim-btn" style={{
              padding: '8px 18px',
              fontSize: '0.85rem',
              boxShadow: '2px 2px 0px var(--border-silent)',
              whiteSpace: 'nowrap'
            }}>
              Claim Seat
            </a>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        <div style={{ background: 'var(--bg-darker)' }}>
          <Hero />
        </div>
        
        <div style={{ background: '#ffffff', borderTop: '3px solid var(--border-silent)' }}>
          <WhenWhere />
        </div>
        
        <div style={{ background: 'var(--bg-darker)', borderTop: '3px solid var(--border-silent)' }}>
          <ContentMap />
        </div>
        
        <div style={{ background: '#ffffff', borderTop: '3px solid var(--border-silent)' }}>
          <HostCard />
        </div>
        <div style={{ background: '#f5f3ff', borderTop: '3px solid var(--border-silent)' }}>
          <Register />
        </div>
        <div style={{ background: '#ffffff', borderTop: '3px solid var(--border-silent)' }}>
          <FAQ />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Responsive adjustments styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 700px) {
          .nav-links {
            display: none !important;
          }
        }
        @media (max-width: 500px) {
          .header-logo-text {
            font-size: 0.95rem !important;
            letter-spacing: 0.2px !important;
          }
          .header-claim-btn {
            padding: 6px 12px !important;
            font-size: 0.75rem !important;
            border-width: 2px !important;
            box-shadow: 1.5px 1.5px 0px var(--border-silent) !important;
          }
        }
      `}} />
    </div>
  );
}

const navLinkStyle = {
  color: 'var(--text-main)',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: 700,
  transition: 'var(--transition-smooth)',
  cursor: 'pointer'
};
// Add hover behaviors programmatically or via style tag in Index.css if needed
