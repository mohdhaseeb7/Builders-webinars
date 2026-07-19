import React from 'react';
import { CONFIG } from '../config';

export default function HostCard() {
  return (
    <section className="section host-section" id="host">
      <div className="glass-card" style={{ 
        padding: '48px',
        border: '1px solid var(--border-silent)',
        background: 'var(--bg-card)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract shape */}
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(255, 122, 89, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
          {/* Host image column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            {/* Host Polaroid Card */}
            <div style={{
              background: '#ffffff',
              border: '3px solid var(--border-silent)',
              padding: '16px 16px 36px 16px',
              transform: 'rotate(-2deg)',
              boxShadow: '8px 8px 0px var(--border-silent)',
              width: '300px',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              {/* Actual Image */}
              <div style={{
                width: '100%',
                height: '240px',
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
              
              {/* Polaroid Caption */}
              <div style={{
                marginTop: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-dark)',
                textAlign: 'center'
              }}>
              </div>
            </div>
          </div>

          {/* Host content column */}
          <div>
            <span style={{ 
              fontSize: '0.9rem', 
              color: 'var(--accent-cyan)', 
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: '8px'
            }}>
              Meet Your Speaker
            </span>
            
            <h2 style={{ 
              textAlign: 'left', 
              fontSize: '2.2rem', 
              marginBottom: '4px',
              fontWeight: 800
            }}>
              {CONFIG.host.name}
            </h2>
            
            <p style={{ 
              color: 'var(--accent-blue)', 
              fontSize: '1rem', 
              fontWeight: 500,
              marginBottom: '20px',
              fontFamily: 'var(--font-mono)'
            }}>
              {CONFIG.host.role}
            </p>

            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1rem', 
              lineHeight: '1.7', 
              marginBottom: '24px' 
            }}>
              {CONFIG.host.bio}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {CONFIG.host.highlights.map((highlight, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '24px',
              borderTop: '1px solid var(--border-silent)',
              paddingTop: '20px'
            }}>
              {/* GitHub */}
              <a 
                href={CONFIG.host.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
                className="social-icon-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

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
