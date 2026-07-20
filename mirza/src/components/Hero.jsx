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
    <section className="section hero-section" style={{ paddingTop: '30px', paddingBottom: '60px', overflow: 'visible' }}>
      <div className="grid-2" style={{ alignItems: 'center', position: 'relative' }}>
        
        {/* Left Column: Heading and CTA */}
        <div className="hero-content" style={{ position: 'relative', zIndex: 5 }}>
          <span className="badge-outline">
            {CONFIG.webinar.badge}
          </span>
          
          <div style={{ margin: '20px 0 25px 0' }}>
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
              lineHeight: '1.05',
              fontWeight: '900',
              textTransform: 'uppercase',
              color: '#000000',
              margin: 0
            }}>
              CODE <br />
              GOT ME IN.
            </h1>
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
              lineHeight: '1.05',
              fontWeight: '900',
              textTransform: 'uppercase',
              color: 'var(--accent-purple)',
              margin: '5px 0'
            }}>
              COMMUNICATION <br />
              GOT ME NOTICED.
            </h1>
          </div>
          
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-muted)', 
            marginBottom: '30px',
            lineHeight: '1.6',
            maxWidth: '520px'
          }}>
            {CONFIG.webinar.subtitle}
          </p>

          {/* Primary CTA Button */}
          <div style={{ display: 'inline-block', marginBottom: '20px' }}>
            <a href="#register" onClick={scrollToRegister} className="btn-primary">
              {CONFIG.webinar.ctaText}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '8px' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <p style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text-muted)', 
              marginTop: '10px',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              {CONFIG.webinar.subCtaText}
            </p>
          </div>
        </div>

        {/* Right Column: Visual Profile Image */}
        <div className="hero-visual" style={{ 
          position: 'relative', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          minHeight: '380px'
        }}>
          {/* Main Circular Profile Image Container with Name Pill */}
          <div style={{ position: 'relative', zIndex: 3 }}>
            <div style={{
              width: '340px',
              height: '340px',
              borderRadius: '50%',
              border: '6px solid var(--accent-lime)',
              boxShadow: '0 0 0 3px #000000, 10px 10px 0px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
              background: '#ffffff'
            }}>
              <img 
                src={CONFIG.host.avatar} 
                alt={CONFIG.host.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            {/* Host Name Pill */}
            <div style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%) rotate(-3deg)',
              background: '#ffffff',
              border: '3px solid #000000',
              padding: '6px 20px',
              borderRadius: '20px',
              boxShadow: '3px 3px 0px #000000',
              zIndex: 10,
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-display)',
              fontWeight: '900',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              color: '#000000'
            }}>
              {CONFIG.host.name.toUpperCase()}
            </div>
          </div>

          {/* Floating Speech Bubble: Lime background 'Conversations change everything' */}
          <div style={{
            position: 'absolute',
            top: '-30px',
            right: '-20px',
            background: 'var(--accent-lime)',
            border: '2.5px solid #000000',
            borderRadius: '24px 24px 24px 4px',
            padding: '12px 20px',
            boxShadow: '4px 4px 0px #000000',
            zIndex: 5,
            width: '180px',
            transform: 'rotate(-4deg)'
          }}>
            <p style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '0.85rem', 
              fontWeight: '800', 
              color: '#000000',
              lineHeight: '1.3',
              textAlign: 'center'
            }}>
              Conversation changes everything
            </p>
          </div>

          {/* Additional Floating Scribble Arrow */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '0px',
            zIndex: 4,
            transform: 'rotate(-30deg)'
          }}>
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round">
              <path d="M20,70 Q45,30 80,45" />
              <path d="M70,35 L80,45 L68,55" />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer Info Bar */}
      <div style={{ 
        marginTop: '60px', 
        borderTop: '3px solid #000000',
        paddingTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}>
        
        {/* Event Details (Date, Time, Venue) */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap'
        }}>
          {/* Date */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              background: 'var(--accent-purple-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-purple)',
              border: '2px solid #000'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>TUESDAY</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#000000' }}>{CONFIG.webinar.date.toUpperCase()} 2025</div>
            </div>
          </div>

          <div style={{ height: '40px', width: '2px', background: 'rgba(0,0,0,0.15)' }}></div>

          {/* Time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              background: 'var(--accent-purple-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-purple)',
              border: '2px solid #000'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>TIME</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#000000' }}>{CONFIG.webinar.time} IST</div>
            </div>
          </div>

          <div style={{ height: '40px', width: '2px', background: 'rgba(0,0,0,0.15)' }}></div>

          {/* Venue */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              background: 'var(--accent-purple-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-purple)',
              border: '2px solid #000'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>ONLINE</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#000000' }}>GOOGLE MEET</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
