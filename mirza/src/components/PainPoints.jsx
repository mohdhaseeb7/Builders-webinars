import React from 'react';
import { CONFIG } from '../config';

export default function PainPoints() {
  return (
    <section className="section-narrow pain-points-section">
      <h2 style={{ marginBottom: '8px' }}>Sound Familiar?</h2>
      <p className="section-subtitle">
        You didn't do anything wrong. You just prepped for the wrong exam.
      </p>

      <div className="glass-card" style={{ 
        padding: '0', 
        overflow: 'hidden',
        border: '1px solid var(--border-silent)',
        boxShadow: '0 20px 40px rgba(43, 45, 53, 0.04)',
        background: '#fcfbfa'
      }}>
        {/* Chat Header */}
        <div style={{
          background: '#ffffff',
          borderBottom: '1px solid var(--border-silent)',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#ffffff'
          }}>
            PG
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', margin: '0' }}>Placement Group 😮💨</h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>you, and 214 others</span>
          </div>
        </div>

        {/* Chat Body */}
        <div className="chat-messages" style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxHeight: '480px',
          overflowY: 'auto',
          backgroundImage: 'radial-gradient(var(--border-silent) 1px, transparent 0)',
          backgroundSize: '16px 16px',
        }}>
          {CONFIG.painPoints.map((point, index) => (
            <div key={index} style={{
              alignSelf: point.sender === 'PG' ? 'flex-start' : 'flex-end',
              maxWidth: '85%',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              {/* Sender Subtitle (for first post/others) */}
              <span style={{ 
                fontSize: '0.75rem', 
                color: 'var(--accent-cyan)',
                alignSelf: point.sender === 'PG' ? 'flex-start' : 'flex-end',
                fontWeight: 600
              }}>
                {point.senderName}
              </span>
              
              {/* Message Bubble */}
              <div style={{
                background: point.sender === 'PG' ? '#ffffff' : '#e8f2ee',
                border: point.sender === 'PG' ? '1px solid var(--border-silent)' : '1px solid rgba(64, 123, 103, 0.15)',
                padding: '12px 16px',
                borderRadius: point.sender === 'PG' ? '0 16px 16px 16px' : '16px 0 16px 16px',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)'
              }}>
                <p style={{ margin: '0 0 6px 0', fontWeight: 500 }}>{point.text}</p>
                {point.subText && (
                  <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{point.subText}</p>
                )}
              </div>
              
              {/* Time and Status Indicator */}
              <div style={{
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                alignSelf: 'flex-end',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span>{point.time}</span>
                {point.sender !== 'PG' && (
                  <span style={{ color: 'var(--accent-blue)' }}>✓✓</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
