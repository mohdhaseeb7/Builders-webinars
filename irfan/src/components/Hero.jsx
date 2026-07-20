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
    <section className="section hero-section" style={{ paddingTop: '32px', paddingBottom: '60px', position: 'relative' }}>

      <div className="grid-2" style={{ alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div className="hero-content">
          <span className="badge-outline" style={{ background: 'var(--accent-blue)', color: '#ffffff', border: '3.5px solid var(--border-silent)', boxShadow: '3px 3px 0 var(--border-silent)' }}>
            <span className="glow-dot" style={{
              marginRight: '8px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'inline-block',
              boxShadow: '0 0 8px #ffffff',
            
            }}></span>
            {CONFIG.webinar.badge}
          </span>
          
          <h1 style={{ 
            fontWeight: 900, 
            fontSize: 'clamp(2.6rem, 5.5vw, 4rem)', 
            textTransform: 'uppercase', 
            lineHeight: '1.05', 
            marginBottom: '24px',
            color: 'var(--text-dark)'
          }}>
            <span className="font-serif-italic" style={{ 
              textTransform: 'none', 
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: 'var(--text-main)', 
              fontWeight: 'normal',
              marginRight: '8px',
              display: 'inline-block'
            }}>from</span>
            <span style={{ color: 'var(--accent-cyan)' }}>GAMER</span>
            <br />
            <span className="font-serif-italic" style={{ 
              textTransform: 'none', 
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: 'var(--text-main)', 
              fontWeight: 'normal',
              marginRight: '8px',
              display: 'inline-block'
            }}>to</span>
            <span style={{ color: 'var(--accent-blue)' }}>PROGRAMMER</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-muted)', 
            marginBottom: '32px',
            lineHeight: '1.7',
            fontWeight: 500
          }}>
            {CONFIG.webinar.subtitle}
          </p>

          <div style={{ display: 'inline-block' }}>
            <a href="#register" onClick={scrollToRegister} className="btn-primary" style={{
              background: 'var(--accent-cyan)',
              borderColor: 'var(--border-silent)',
              boxShadow: '4px 4px 0px var(--border-silent)',
              padding: '16px 40px'
            }}>
              {CONFIG.webinar.ctaText}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <p style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text-muted)', 
              marginTop: '12px',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              {CONFIG.webinar.subCtaText}
            </p>
          </div>
        </div>

        {/* Host Avatar Visual Side (Redesigned like the poster's circle visual) */}
        <div className="hero-visual" style={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative',
          paddingTop: '20px'
        }}>
          {/* Rectangle Frame with concentric borders & rounded edges */}
          <div style={{
            width: '100%',
            maxWidth: '280px',
            aspectRatio: '280 / 350',
            borderRadius: '20px',
            border: '4px solid var(--accent-cyan)',
            padding: '6px',
            background: 'transparent',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 15px 30px rgba(124, 58, 237, 0.1)',
            zIndex: 3
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '14px',
              border: '3px solid var(--accent-blue)',
              overflow: 'hidden',
              position: 'relative',
              background: '#ffffff'
            }}>
              <img 
                src={CONFIG.host.avatar} 
                alt={CONFIG.host.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Speaker overlay label tag */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              background: 'var(--accent-cyan)',
              color: '#ffffff',
              border: '2.5px solid var(--text-dark)',
              boxShadow: '3px 3px 0 var(--text-dark)',
              borderRadius: '6px',
              padding: '4px 14px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.95 }}>Speaker</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.5px' }}>IRFAN</div>
            </div>
          </div>
        </div>
      </div>

      {/* Date, Time, Mode, and QR Code bottom ribbon (Redesigned like the bottom panel of the poster) */}
      <div style={{
        marginTop: '60px',
        background: '#ffffff',
        border: '3px solid var(--border-silent)',
        borderRadius: '16px',
        boxShadow: '6px 6px 0px var(--border-silent)',
        padding: '24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '24px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 5
      }}>
        {/* Column 1: Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderRight: '2px solid rgba(124, 58, 237, 0.15)', paddingRight: '12px' }} className="bottom-ribbon-col">
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'rgba(124, 58, 237, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '0.8px', textTransform: 'uppercase' }}>Date</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 900, color: 'var(--text-dark)' }}>{CONFIG.webinar.date}</div>
          </div>
        </div>

        {/* Column 2: Time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderRight: '2px solid rgba(124, 58, 237, 0.15)', paddingRight: '12px' }} className="bottom-ribbon-col">
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'rgba(124, 58, 237, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '0.8px', textTransform: 'uppercase' }}>Time</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 900, color: 'var(--text-dark)' }}>{CONFIG.webinar.time}</div>
          </div>
        </div>

        {/* Column 3: Mode */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="bottom-ribbon-col-last">
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'rgba(124, 58, 237, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M23 7l-7 5 7 5V7z"></path>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '0.8px', textTransform: 'uppercase' }}>Mode</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 900, color: 'var(--text-dark)' }}>ONLINE</div>
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
        @media (max-width: 768px) {
          .bottom-ribbon-col {
            border-right: none !important;
            border-bottom: 1.5px dashed rgba(124, 58, 237, 0.15);
            padding-right: 0 !important;
            padding-bottom: 12px;
          }
          .bottom-ribbon-col-last {
            justify-content: flex-start !important;
            padding-top: 4px;
          }
        }
      `}} />
    </section>
  );
}
