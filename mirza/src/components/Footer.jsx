import React from 'react';
import { CONFIG } from '../config';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-silent)',
      padding: '40px 24px',
      background: '#faf9f6',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: 'var(--container-width)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Branding & Contacts */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          width: '100%',
          borderBottom: '1px solid var(--border-silent)',
          paddingBottom: '24px'
        }}>
          <span style={{ 
            fontFamily: 'var(--font-display)', 
            fontWeight: 800, 
            fontSize: '1.2rem', 
            letterSpacing: '1px',
            color: 'var(--text-main)' 
          }}>
            {CONFIG.host.name}
          </span>

          <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <a href={`tel:${CONFIG.webinar.phone}`} style={{ color: 'inherit', textDecoration: 'none', transition: 'var(--transition-smooth)' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
              {CONFIG.webinar.phone}
            </a>
            <span>•</span>
            <a href={`mailto:${CONFIG.webinar.email}`} style={{ color: 'inherit', textDecoration: 'none', transition: 'var(--transition-smooth)' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
              {CONFIG.webinar.email}
            </a>
          </div>
        </div>

        {/* Footer Meta / Copyright */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <span>{CONFIG.webinar.footerText}</span>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#register" style={{ color: 'inherit', textDecoration: 'none' }}>Register</a>
            <a href="#outcomes" style={{ color: 'inherit', textDecoration: 'none' }}>Takeaways</a>
            <a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQs</a>
            <span style={{ color: 'var(--border-silent)' }}>|</span>
            <a href={CONFIG.host.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>LinkedIn</a>
            <a href={CONFIG.host.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
