import React, { useState } from 'react';
import LoginForm from './LoginForm'
import './LoginPage.css';
import CreateAccountForm from './CreateAccountForm';


const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const handleLoginFormButtonClick = () => {
    setShowLoginForm(false);
  };
  const handleCreateAccountButtonClick = () => {
    // Show the LoginForm again
    setShowLoginForm(true);
  };
  return (
    <div className="page-container">
        <div className="login-container">
            <div id='loginLogo'>
                <img src='images/foundmate-logo.jpg' alt="FoundMateLogo" />
            </div>
        {showLoginForm ? (
          <LoginForm onLoginButtonClick={handleLoginFormButtonClick} />
        ) : (
          <CreateAccountForm onButtonClick={handleCreateAccountButtonClick}/>
        )}
        </div>
    </div>
  );
};

export default LoginPage;