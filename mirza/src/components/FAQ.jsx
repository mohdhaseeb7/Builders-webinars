import React, { useState } from 'react';
import { CONFIG } from '../config';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-narrow faq-section" id="faq" style={{ paddingBottom: '80px', paddingTop: '40px' }}>
      <h2 style={{ marginBottom: '8px' }}>Questions You Probably Have</h2>
      <p className="section-subtitle">
        Everything you need to know about the session, cleared up upfront.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '30px' }}>
        {CONFIG.faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="glass-card" 
              style={{ 
                padding: '22px 24px',
                cursor: 'pointer',
                border: '3px solid var(--border-silent)',
                background: isOpen ? 'var(--accent-purple-light)' : '#ffffff',
                boxShadow: isOpen ? '3px 3px 0px var(--border-silent)' : '5px 5px 0px var(--border-silent)',
                borderRadius: '12px',
                transition: 'var(--transition-smooth)'
              }}
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                gap: '16px' 
              }}>
                <h4 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '800',
                  color: '#000000',
                  fontStyle: 'italic',
                  textTransform: 'none',
                  transition: 'var(--transition-smooth)'
                }}>{faq.question}</h4>
                
                <span style={{ 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'var(--transition-smooth)',
                  color: isOpen ? 'var(--accent-purple)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>

              {/* Answer Content */}
              <div style={{
                maxHeight: isOpen ? '250px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                marginTop: isOpen ? '14px' : '0'
              }}>
                <p style={{ 
                  color: 'var(--text-muted)', 
                  fontSize: '0.95rem', 
                  lineHeight: '1.6',
                  margin: '0',
                  fontWeight: 500
                }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
