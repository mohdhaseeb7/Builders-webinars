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
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.2rem',
            letterSpacing: '1px',
            color: 'var(--text-dark)',
            textDecoration: 'none'
          }}>
            Mirza Abdullah Yaseen Baig
          </a>
          <div>
            <a href="#register" onClick={scrollToSection('register')} className="btn-primary" style={{
              padding: '8px 18px',
              fontSize: '0.85rem',
              boxShadow: '2px 2px 0px var(--border-silent)'
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
        <div style={{ background: 'var(--accent-purple)', borderTop: '3px solid var(--border-silent)' }}>
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
      `}} />
    </div>
  );
}

// Add hover behaviors programmatically or via style tag in Index.css if needed
