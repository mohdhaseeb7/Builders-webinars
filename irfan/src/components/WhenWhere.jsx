import React from 'react';
import { CONFIG } from '../config';

export default function WhenWhere() {
  return (
    <section className="section outcomes-section" id="schedule" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <h2 style={{ marginBottom: '8px' }}>When & Where</h2>
      <p className="section-subtitle">
        Lock in the schedule and prepare your setup. No travel needed.
      </p>

      <div className="grid-2" style={{ marginTop: '30px' }}>
        {/* When Card */}
        <div className="glass-card" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'flex-start',
          borderLeft: '4px solid var(--accent-cyan)'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(255, 122, 89, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>When</h3>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>
              {CONFIG.webinar.date}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
              {CONFIG.webinar.time} {CONFIG.webinar.timeSub}
            </p>
          </div>
        </div>

        {/* Where Card */}
        <div className="glass-card" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'flex-start',
          borderLeft: '4px solid var(--accent-blue)'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(64, 123, 103, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-blue)'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Where</h3>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>
              {CONFIG.webinar.venue}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '4px', lineHeight: '1.6' }}>
              {CONFIG.webinar.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
