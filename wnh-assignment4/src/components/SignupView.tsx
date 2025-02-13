import React, { useState } from 'react';

interface SignupViewProps {
  toggleView: () => void;
}

const SignupView: React.FC<SignupViewProps> = ({ toggleView }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password === confirmPassword) {
      console.log('Signing up with:', fullName, email, password);
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <div className="signup-container">
      {/* Arrow Icon for Navigation */}
      <i
        className="fa fa-arrow-left"
        style={{ cursor: 'pointer', color: 'blue', fontSize: '24px', marginBottom: '20px' }}
        onClick={toggleView} // Navigate back on click
      ></i>

      <h2>Sign Up</h2>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
        />
      </div>
      <button onClick={handleSignup}>Signup</button>
      <div className="links">
        <span onClick={toggleView} style={{ cursor: 'pointer', color: 'blue' }}>
          Already have an account? Sign In
        </span>
      </div>
    </div>
  );
};

export default SignupView;
