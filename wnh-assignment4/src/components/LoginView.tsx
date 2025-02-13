import React, { useState } from 'react';

interface LoginViewProps {
  toggleView: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ toggleView }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', username, password);
  };

  const handlePasswordRetrieval = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    console.log('Forgot Password clicked!');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div className="password-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <span className="forgot-password" onClick={handlePasswordRetrieval}>
          Forgot?
        </span>
      </div>
      <button onClick={handleLogin}>Login</button>
      <div className="links">
        <span onClick={toggleView} style={{ cursor: 'pointer', color: 'blue' }}>
          Don’t have an account? Sign Up
        </span>
      </div>
    </div>
  );
};

export default LoginView;
