import React, { useState } from 'react';

export default function PasswordStrengthchecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState({ level: '', score: 0, color: '' });

  const checkStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score += 25;
    if (/[A-Z]/.test(pwd)) score += 25;
    if (/[0-9]/.test(pwd)) score += 25;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 25;

    let level = '';
    let color = '';

    if (score <= 25) {
      level = 'Weak';
      color = 'red';
    } else if (score <= 50) {
      level = 'Fair';
      color = 'orange';
    } else if (score <= 75) {
      level = 'Good';
      color = 'blue';
    } else {
      level = 'Strong';
      color = 'green';
    }

    setStrength({ level, score, color });
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    checkStrength(pwd);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div
        style={{
          width: '400px',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Password Strength Checker
        </h2>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <div
          style={{
            width: '100%',
            height: '10px',
            backgroundColor: '#e0e0e0',
            borderRadius: '5px',
            marginTop: '10px',
          }}
        >
          <div
            style={{
              width: `${strength.score}%`,
              height: '100%',
              backgroundColor: strength.color,
              borderRadius: '5px',
              transition: 'width 0.3s',
            }}
          />
        </div>
        {password && (
          <p
            style={{
              textAlign: 'center',
              marginTop: '10px',
              color: strength.color,
            }}
          >
            Strength: {strength.level}
          </p>
        )}
      </div>
    </div>
  );
}
