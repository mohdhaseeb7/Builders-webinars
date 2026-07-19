import React, { useState } from 'react';
import { CONFIG } from '../config';

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: ''
  });
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [joinedCommunity, setJoinedCommunity] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.qualification || !joinedCommunity) {
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
    
    // Accept standard mock OTP '1234' (or let it accept any 4-digit code for convenience, but check for 1234 for realism)
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
    <section className="section-narrow register-section" id="register">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '8px' }}>Reserve Your Seat</h2>
        <p className="section-subtitle" style={{ marginBottom: '0' }}>
          {CONFIG.webinar.badge}. Seats are limited. Registration is mandatory.
        </p>
      </div>

      <div className="glass-card" style={{ 
        position: 'relative'
      }}>
        {/* Step 1: Input details */}
        {step === 1 && (
          <form onSubmit={handleSendCode} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>Full Name</label>
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
              <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>Email Address</label>
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
              <label htmlFor="phone" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>WhatsApp Number</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid var(--border-silent)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '0.95rem'
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
              <label htmlFor="qualification" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>Your Background / Status</label>
              <select 
                id="qualification" 
                name="qualification" 
                required 
                value={formData.qualification}
                onChange={handleInputChange}
                style={{ ...inputStyle, appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2394a3b8\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
              >
                <option value="" disabled>Select...</option>
                <option value="Absolute Beginner">Absolute Beginner (No coding experience)</option>
                <option value="College Student">College Student / Graduate</option>
                <option value="Working Professional">Working Professional (Non-Tech)</option>
                <option value="Self-Taught Coder">Self-Taught / Already learning</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* WhatsApp Community Box */}
            <div style={{
              background: 'rgba(124, 58, 237, 0.05)',
              border: '2.5px solid var(--accent-blue)',
              borderRadius: '12px',
              padding: '16px',
              marginTop: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>📢</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-dark)' }}>Join WhatsApp Community (Required)</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.4' }}>
                    Webinar entry links, reminders, and direct live updates will be sent exclusively inside this community.
                  </div>
                </div>
              </div>
              
              <a 
                href={CONFIG.webinar.whatsAppCommunityUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setJoinedCommunity(true)}
                className="btn-secondary" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px', 
                  padding: '10px 16px', 
                  fontSize: '0.85rem',
                  background: 'var(--accent-blue)',
                  color: '#ffffff',
                  borderColor: 'var(--border-silent)',
                  boxShadow: '2px 2px 0 var(--border-silent)',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  textDecoration: 'none',
                  borderRadius: '9999px',
                  cursor: 'pointer'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.004 2c-5.518 0-9.998 4.479-9.998 9.997 0 2.006.592 3.868 1.613 5.438L2.09 22.06l4.787-1.53c1.488.89 3.224 1.41 5.127 1.41 5.52 0 10-4.482 10-10C22.004 6.479 17.522 2 12.004 2zm0 1.666c4.593 0 8.33 3.738 8.33 8.33 0 4.593-3.737 8.333-8.33 8.333-1.637 0-3.155-.47-4.444-1.28l-.317-.197-2.923.935.95-2.83-.223-.335c-.886-1.32-1.393-2.905-1.393-4.606 0-4.593 3.738-8.33 8.33-8.33z"/>
                </svg>
                Join WhatsApp Community
              </a>

              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', textAlign: 'left' }}>
                <input 
                  type="checkbox" 
                  checked={joinedCommunity} 
                  onChange={(e) => setJoinedCommunity(e.target.checked)}
                  style={{ width: '16px', height: '16px', accentColor: 'var(--accent-blue)', flexShrink: 0 }} 
                />
                <span>I have joined the WhatsApp community.</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              disabled={!formData.name || !formData.email || !formData.phone || !formData.qualification || !joinedCommunity}
              style={{ 
                marginTop: '16px', 
                width: '100%',
                boxShadow: (!formData.name || !formData.email || !formData.phone || !formData.qualification || !joinedCommunity) ? 'none' : '3px 3px 0 var(--border-silent)',
                background: (!formData.name || !formData.email || !formData.phone || !formData.qualification || !joinedCommunity) ? '#e2e8f0' : 'var(--accent-cyan)',
                color: (!formData.name || !formData.email || !formData.phone || !formData.qualification || !joinedCommunity) ? '#94a3b8' : '#ffffff',
                borderColor: (!formData.name || !formData.email || !formData.phone || !formData.qualification || !joinedCommunity) ? '#cbd5e1' : 'var(--border-silent)',
                cursor: (!formData.name || !formData.email || !formData.phone || !formData.qualification || !joinedCommunity) ? 'not-allowed' : 'pointer',
                opacity: (!formData.name || !formData.email || !formData.phone || !formData.qualification || !joinedCommunity) ? 0.75 : 1
              }}
            >
              Send Verification Code
            </button>
          </form>
        )}

        {/* Step 2: OTP verification */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Enter Verification Code</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                We simulated sending a 4-digit code to <strong style={{ color: 'var(--text-main)' }}>{formData.email}</strong>.
              </p>
              <div style={{ 
                background: 'rgba(124, 58, 237, 0.05)', 
                border: '1.5px dashed rgba(124, 58, 237, 0.3)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                display: 'inline-block',
                marginTop: '12px',
                fontSize: '0.85rem',
                color: 'var(--accent-cyan)'
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
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-silent)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-main)',
                    outline: 'none',
                    transition: 'var(--transition-smooth)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-silent)'}
                />
              ))}
            </div>

            {otpError && (
              <span style={{ color: '#ff5f56', fontSize: '0.9rem' }}>{otpError}</span>
            )}

            <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => setStep(1)} 
                style={{ flex: 1 }}
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
                color: 'var(--accent-green)', 
                fontWeight: 'bold', 
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Registration Confirmed!
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Your entry pass is active. The webinar stream link is unlocked below.
              </p>
            </div>

            {/* Boarding Pass Ticket UI */}
            <div className="ticket-card" style={{
              background: '#ffffff',
              border: '1px solid var(--border-silent)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(43, 45, 53, 0.03)'
            }}>
              {/* Ticket Top */}
              <div style={{
                padding: '24px',
                borderBottom: '2px dashed var(--border-silent)',
                position: 'relative'
              }}>
                {/* Left ticket circle cut */}
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '-10px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--bg-darker)',
                  borderRight: '1px solid var(--border-silent)'
                }}></div>
                {/* Right ticket circle cut */}
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: '-10px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--bg-darker)',
                  borderLeft: '1px solid var(--border-silent)'
                }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontWeight: 800, fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                    Mohammed Irfan Ahmed
                  </span>
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8rem', 
                    color: 'var(--accent-cyan)',
                    background: 'rgba(132, 204, 22, 0.08)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    border: '1.5px solid rgba(132, 204, 22, 0.25)'
                  }}>
                    {seatNumber}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>CANDIDATE</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{formData.name}</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>BACKGROUND</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{formData.qualification}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>STREAM STARTS</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--accent-blue)' }}>1:45 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Bottom */}
              <div style={{ padding: '24px', background: '#faf9f6' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>WHEN</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{CONFIG.webinar.date} · {CONFIG.webinar.time}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>WHERE</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{CONFIG.webinar.venue}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>{CONFIG.webinar.address}</span>
                  </div>
                </div>

                {/* Simulated Barcode */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '6px',
                  borderTop: '1px solid var(--border-silent)',
                  paddingTop: '16px'
                }}>
                  <div style={{ 
                    fontFamily: 'var(--font-mono)', 
                    letterSpacing: '3px', 
                    fontSize: '1.2rem',
                    color: 'rgba(0,0,0,0.2)',
                    height: '24px',
                    overflow: 'hidden'
                  }}>
                    ||||| | |||| ||| || |||| | ||| |
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    ENTRY PASS CONFIRMED
                  </span>
                </div>
              </div>
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
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--border-silent)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-main)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'all 0.3s ease',
  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
};
