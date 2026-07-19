import React from 'react';
import { CONFIG } from '../config';

export default function ContentMap() {
  return (
    <section className="section outcomes-section" id="outcomes">
      <h2 style={{ marginBottom: '8px' }}>See What's Inside</h2>
      <p className="section-subtitle">
        One hour. In-Person. You walk out with a crystal clear picture of starting in tech, a practical roadmap, and the confidence to take your first steps.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginTop: '40px'
      }}>
        {CONFIG.outcomes.map((item, index) => (
          <div key={index} className="glass-card outcome-card" style={{
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            border: '1px solid var(--border-silent)'
          }}>
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '120px',
              height: '120px',
              background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}></div>

            {/* Glowing Number */}
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '2.5rem',
              fontWeight: '800',
              lineHeight: '1',
              background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-blue) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.8
            }}>
              {item.id}
            </span>

            <div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                marginBottom: '8px',
                fontWeight: 600,
                color: 'var(--text-main)'
              }}>
                {item.title}
              </h3>
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '0.9rem',
                lineHeight: '1.6'
              }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dynamic CTA at the end of Outcomes */}
      <div style={{
        marginTop: '60px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <p style={{ margin: '0', color: 'var(--text-dark)', fontSize: '1.05rem', fontWeight: 700 }}>
          Ready to close your skill gap?
        </p>
        <a href="#register" className="btn-secondary" style={{
          color: 'var(--text-dark)',
          background: '#ffffff',
          border: '3px solid var(--border-silent)',
          boxShadow: '4px 4px 0px var(--border-silent)'
        }} onClick={(e) => {
          e.preventDefault();
          document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Reserve My Seat Now
        </a>
      </div>
    </section>
  );
}
