import React, { useState } from 'react';
import { CONFIG } from '../config';

export default function Register() {
  const [step, setStep] = useState(1);
  const [validationError, setValidationError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: ''
  });
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const [seatNumber, setSeatNumber] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setValidationError('');
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.qualification) {
      setValidationError('Please fill out all fields first.');
      return;
    }
    // Advance to OTP step
    setStep(2);
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    
    if (enteredOtp === '1234' || enteredOtp === '2026') {
      const generatedSeat = `CFI-${Math.floor(1000 + Math.random() * 9000)}`;
      setSeatNumber(generatedSeat);
      setOtpError('');
      setStep(3);
    } else {
      setOtpError('Invalid code. Try entering 1234');
    }
  };

  return (
    <section className="section-narrow register-section" id="register" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '8px' }}>Reserve Your Seat</h2>
        <p className="section-subtitle" style={{ marginBottom: '0' }}>
          {CONFIG.webinar.badge}. Seats are limited. Registration is mandatory.
        </p>
      </div>

      <div className="glass-card" style={{ 
        boxShadow: '6px 6px 0px #000000',
        border: '3px solid #000000',
        background: '#ffffff',
        position: 'relative',
        borderRadius: '16px',
        padding: '40px 32px'
      }}>
        {/* Binder Clip decoration on top of the card to look like a Clipboard */}
        <div style={{
          position: 'absolute',
          top: '-18px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '110px',
          height: '28px',
          background: '#cbd5e1',
          border: '2.5px solid #000000',
          borderRadius: '6px 6px 0 0',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '2px 2px 0px #000000'
        }}>
          <div style={{
            width: '40px',
            height: '8px',
            background: '#64748b',
            borderRadius: '4px'
          }}></div>
        </div>

        {/* Step 1: Input details */}
        {step === 1 && (
          <form onSubmit={handleSendCode} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {validationError && (
              <div style={{
                background: '#fee2e2',
                border: '2px solid #ef4444',
                color: '#b91c1c',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                ⚠️ {validationError}
              </div>
            )}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-dark)' }}>FULL NAME</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name" 
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-dark)' }}>EMAIL ADDRESS</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com" 
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="phone" style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-dark)' }}>WHATSAPP NUMBER</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ 
                  background: '#f3f4f6', 
                  border: '2.5px solid #000000',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  boxShadow: '2px 2px 0px #000000'
                }}>+91</span>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="9876543210" 
                  style={{ ...inputStyle, flex: 1 }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="qualification" style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-dark)' }}>YOUR BACKGROUND / STATUS</label>
              <select 
                id="qualification" 
                name="qualification" 
                required 
                value={formData.qualification}
                onChange={handleInputChange}
                style={{ 
                  ...inputStyle, 
                  appearance: 'none', 
                  backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000000\' stroke-width=\'2.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', 
                  backgroundRepeat: 'no-repeat', 
                  backgroundPosition: 'right 16px center', 
                  backgroundSize: '16px' 
                }}
              >
                <option value="" disabled>Select...</option>
                <option value="Absolute Beginner">Absolute Beginner (No coding experience)</option>
                <option value="College Student">College Student / Graduate</option>
                <option value="Working Professional">Working Professional (Non-Tech)</option>
                <option value="Self-Taught Coder">Self-Taught / Already learning</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '12px', width: '100%' }}>
              Send Verification Code
            </button>
          </form>
        )}

        {/* Step 2: OTP verification */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', fontStyle: 'italic' }}>Enter Verification Code</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                We simulated sending a 4-digit code to <strong style={{ color: 'var(--text-dark)' }}>{formData.email}</strong>.
              </p>
              <div style={{ 
                background: 'var(--accent-purple-light)', 
                border: '2px dashed var(--accent-purple)',
                padding: '8px 16px',
                borderRadius: '8px',
                display: 'inline-block',
                marginTop: '12px',
                fontSize: '0.85rem',
                color: 'var(--accent-purple)',
                fontWeight: 700
              }}>
                🔑 Mock OTP Code: <strong style={{ letterSpacing: '1px' }}>1234</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  id={`otp-${index}`}
                  maxLength="1"
                  required
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  style={{
                    width: '60px',
                    height: '60px',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    background: '#ffffff',
                    border: '2.5px solid #000000',
                    borderRadius: '8px',
                    color: '#000000',
                    outline: 'none',
                    transition: 'var(--transition-smooth)',
                    boxShadow: '2px 2px 0px #000000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                  onBlur={(e) => e.target.style.borderColor = '#000000'}
                />
              ))}
            </div>

            {otpError && (
              <span style={{ color: '#ef4444', fontSize: '0.9rem', fontWeight: 600 }}>⚠️ {otpError}</span>
            )}

            <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => setStep(1)} 
                style={{ flex: 1, padding: '12px 20px', borderRadius: '8px' }}
              >
                Back
              </button>
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ flex: 2 }}
              >
                Verify & Reserve Seat
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Verified Admit Card */}
        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ 
                color: 'var(--accent-purple)', 
                fontWeight: '900', 
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                REGISTRATION CONFIRMED!
              </span>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Your entry pass is active. The webinar stream link is unlocked below.
              </p>
            </div>

            {/* Boarding Pass Ticket UI */}
            <div className="ticket-card" style={{
              background: '#ffffff',
              border: '3px solid #000000',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '4px 4px 0px #000000'
            }}>
              {/* Ticket Top */}
              <div style={{
                padding: '24px',
                borderBottom: '3px dashed #000000',
                position: 'relative',
                background: 'var(--accent-purple-light)'
              }}>
                {/* Left ticket circle cut */}
                <div style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '-12px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  borderRight: '3px solid #000000',
                  zIndex: 2
                }}></div>
                {/* Right ticket circle cut */}
                <div style={{
                  position: 'absolute',
                  bottom: '-12px',
                  right: '-12px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  borderLeft: '3px solid #000000',
                  zIndex: 2
                }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontWeight: 900, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.2rem', letterSpacing: '0.5px' }}>
                    {CONFIG.host.name}
                  </span>
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold',
                    color: '#000000',
                    background: 'var(--accent-lime)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '2px solid #000000',
                    boxShadow: '1.5px 1.5px 0px #000'
                  }}>
                    {seatNumber}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>CANDIDATE</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>{formData.name.toUpperCase()}</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>BACKGROUND</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{formData.qualification}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>STREAM STATUS</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--accent-purple)' }}>ONLINE LIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Bottom */}
              <div style={{ padding: '24px', background: '#faf9f6' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>WHEN</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800 }}>{CONFIG.webinar.date.toUpperCase()} · {CONFIG.webinar.time}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>WHERE</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)' }}>{CONFIG.webinar.venue.toUpperCase()}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px', lineHeight: '1.4' }}>{CONFIG.webinar.address}</span>
                  </div>
                </div>

                {/* Simulated Barcode */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '6px',
                  borderTop: '2px solid #000000',
                  paddingTop: '16px'
                }}>
                  <div style={{ 
                    fontFamily: 'var(--font-mono)', 
                    letterSpacing: '3px', 
                    fontSize: '1.2rem',
                    color: '#000000',
                    height: '24px',
                    overflow: 'hidden',
                    opacity: 0.8
                  }}>
                    ||||| | |||| ||| || |||| | ||| |
                  </div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    ENTRY PASS CONFIRMED
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href={CONFIG.webinar.whatsAppCommunityUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ width: '100%', borderRadius: '8px' }}
              >
                Join WhatsApp Community
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Internal reusable input style
const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: '#ffffff',
  border: '2.5px solid #000000',
  borderRadius: '8px',
  color: '#000000',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'all 0.2s ease',
  boxShadow: '2px 2px 0px #000000'
};

