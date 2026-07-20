import React from 'react';
import { CONFIG } from '../config';

export default function HostCard() {
  return (
    <section className="section host-section" id="host" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="glass-card" style={{ 
        padding: '48px 36px',
        border: '3px solid var(--border-silent)',
        background: '#ffffff',
        position: 'relative',
        borderRadius: '16px',
        boxShadow: '8px 8px 0px var(--border-silent)',
        marginTop: '20px'
      }}>
        {/* Spiral Notebook Binder Elements */}
        <div className="spiral-binder">
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
          <div className="spiral-ring"></div>
        </div>

        <div className="grid-2" style={{ alignItems: 'center', gap: '48px', marginTop: '10px' }}>
          
          {/* Left Column: Speaker Polaroid photo taped onto page */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            {/* Adhesive tape effect on top of Polaroid */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '30px',
              width: '90px',
              height: '30px',
              background: 'rgba(190, 242, 100, 0.4)', /* translucent lime green tape */
              border: '1px dashed rgba(0, 0, 0, 0.15)',
              transform: 'rotate(-15deg)',
              zIndex: 5
            }}></div>

            {/* Host Polaroid Frame */}
            <div style={{
              background: '#ffffff',
              border: '3px solid var(--border-silent)',
              padding: '16px 16px 40px 16px',
              transform: 'rotate(-2deg)',
              boxShadow: '6px 6px 0px var(--border-silent)',
              width: '290px',
              maxWidth: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}>
              {/* Photo Frame */}
              <div style={{
                width: '100%',
                height: '250px',
                border: '2.5px solid var(--border-silent)',
                overflow: 'hidden',
                background: '#f2f1ef'
              }}>
                <img 
                  src={CONFIG.host.avatar} 
                  alt={CONFIG.host.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              
              {/* Handwritten style tag inside Polaroid bottom */}
              <div style={{
                marginTop: '16px',
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: '800',
                color: '#000000',
                textAlign: 'center',
                letterSpacing: '0.5px'
              }}>
                {CONFIG.host.name.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Right Column: Host Info Content */}
          <div>
            <span style={{ 
              fontSize: '0.9rem', 
              color: 'var(--accent-purple)', 
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              display: 'block',
              marginBottom: '10px'
            }}>
              MEET YOUR SPEAKER
            </span>
            
            <h2 style={{ 
              textAlign: 'left', 
              fontSize: '2.4rem', 
              marginBottom: '6px',
              fontWeight: '900',
              lineHeight: '1.1'
            }}>
              {CONFIG.host.name}
            </h2>
            
            <div style={{ display: 'inline-block', marginBottom: '20px' }}>
              <span className="highlighter-mark" style={{ transform: 'rotate(0.5deg)', fontSize: '0.95rem' }}>
                {CONFIG.host.role}
              </span>
            </div>

            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1rem', 
              lineHeight: '1.65', 
              marginBottom: '26px' 
            }}>
              {CONFIG.host.bio}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '30px'
            }}>
              {CONFIG.host.highlights.map((highlight, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--accent-purple-light)',
                    border: '2px solid #000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.4' }}>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '24px',
              borderTop: '2px solid rgba(0,0,0,0.1)',
              paddingTop: '20px'
            }}>
              {/* LinkedIn */}
              <a 
                href={CONFIG.host.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                className="social-icon-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href={CONFIG.host.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram"
                className="social-icon-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
