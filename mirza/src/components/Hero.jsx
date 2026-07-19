import React from 'react';
import { CONFIG } from '../config';

export default function Hero() {
  const scrollToRegister = (e) => {
    e.preventDefault();
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section hero-section" style={{ paddingBottom: '40px' }}>
      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div className="hero-content">
          <span className="badge-outline">
            <span  style={{ marginRight: '8px' }}></span>
            {CONFIG.webinar.badge}
          </span>
          
          <h1 style={{ fontWeight: 800 }}>
            {CONFIG.webinar.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient-cyan-blue">
              {CONFIG.webinar.title.split(' ').slice(-1)}
            </span>
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-muted)', 
            marginBottom: '32px',
            lineHeight: '1.7'
          }}>
            {CONFIG.webinar.subtitle}
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>
                {CONFIG.webinar.date} · <span className="text-gradient-cyan-blue">{CONFIG.webinar.time}</span>
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="14" rx="2.18" ry="2.18"></rect>
                <line x1="12" y1="20" x2="12" y2="16"></line>
                <line x1="8" y1="20" x2="16" y2="20"></line>
              </svg>
              <span style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                {CONFIG.webinar.venue} · Live Session
              </span>
            </div>
          </div>

          <div style={{ display: 'inline-block' }}>
            <a href="#register" onClick={scrollToRegister} className="btn-primary">
              {CONFIG.webinar.ctaText}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <p style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text-muted)', 
              marginTop: '12px',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              {CONFIG.webinar.subCtaText}
            </p>
          </div>
        </div>

        <div className="hero-visual" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative',
          paddingTop: '20px'
        }}>
          {/* Polaroid Instructor Card */}
          <div style={{
            background: '#ffffff',
            border: '3px solid var(--border-silent)',
            padding: '20px 20px 48px 20px',
            transform: 'rotate(2deg)',
            boxShadow: '8px 8px 0px var(--border-silent)',
            width: '320px',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Polaroid Photo Frame */}
            <div style={{
              width: '100%',
              height: '280px',
              border: '2px solid var(--border-silent)',
              overflow: 'hidden',
              background: '#faf9f6'
            }}>
              <img 
                src={CONFIG.host.avatar} 
                alt={CONFIG.host.name} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            
            {/* Polaroid Label */}
            <div style={{
              marginTop: '18px',
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 800,
              color: 'var(--text-dark)',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {CONFIG.host.name}
            </div>
          </div>
          
          {/* Scrapbook Tape / Badge */}
          <div style={{
            position: 'absolute',
            top: '0px',
            left: '50%',
            transform: 'translateX(-50%) rotate(-4deg)',
            background: 'var(--accent-cyan)',
            color: 'var(--text-dark)',
            padding: '8px 24px',
            fontSize: '0.8rem',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)',
            border: '2.5px solid var(--border-silent)',
            boxShadow: '3px 3px 0px var(--border-silent)',
            zIndex: 10,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap'
          }}>
            Meet Your Host
          </div>
        </div>
      </div>
      
      {/* Adding styles directly to component to avoid bundle size issues */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blinking-cursor::after {
          content: '▊';
          animation: blink 1s infinite;
          margin-left: 4px;
        }
      `}} />
    </section>
  );
}
