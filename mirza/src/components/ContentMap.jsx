import React from 'react';
import { CONFIG } from '../config';

export default function ContentMap() {
  return (
    <section className="section outcomes-section" id="outcomes" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <h2 style={{ marginBottom: '8px' }}>See What's Inside</h2>
      <p className="section-subtitle">
        One hour. Online. You walk out with a crystal clear picture of developer communication, a practical roadmap, and the confidence to express your logic.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '28px',
        marginTop: '40px'
      }}>
        {CONFIG.outcomes.map((item, index) => (
          <div key={index} className="glass-card outcome-card" style={{
            position: 'relative',
            overflow: 'visible',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            border: '3px solid var(--border-silent)',
            boxShadow: '5px 5px 0px var(--border-silent)',
            background: '#ffffff',
            borderRadius: '12px',
            padding: '24px 20px',
            transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 1.5}deg)`
          }}>
            {/* Small piece of tape at the top center of each index card */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '20px',
              background: 'rgba(124, 58, 237, 0.15)', /* soft violet tape */
              border: '1px dashed rgba(0,0,0,0.1)'
            }}></div>

            {/* Glowing/Slanted Big Number */}
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.8rem',
              fontWeight: '900',
              fontStyle: 'italic',
              lineHeight: '1',
              color: 'var(--accent-purple)'
            }}>
              {item.id}
            </span>

            <div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                marginBottom: '8px',
                fontWeight: '800',
                color: 'var(--text-dark)',
                fontStyle: 'italic',
                textTransform: 'uppercase'
              }}>
                {item.title}
              </h3>
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dynamic CTA at the end of Takeaways */}
      <div style={{
        marginTop: '60px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <p style={{ margin: '0', color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
          Ready to close your communication gap?
        </p>
        <a href="#register" className="btn-primary" onClick={(e) => {
          e.preventDefault();
          document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Reserve My Seat Now
        </a>
      </div>
    </section>
  );
}
