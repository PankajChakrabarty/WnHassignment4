import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import LoginView from './components/LoginView';
import SignupView from './components/SignupView';

const App: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="App">
      {isLoginView ? (
        <LoginView toggleView={() => setIsLoginView(false)} />
      ) : (
        <SignupView toggleView={() => setIsLoginView(true)} />
      )}
    </div>
  );
};

export default App;
