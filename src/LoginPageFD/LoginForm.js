import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ onLoginButtonClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, username, password);
      // If login is successful, navigate to the main page
      if (user) {
        navigate('/main');
      }
      console.log('Logged In');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCreateAcc = () => {
    console.log('Create Account button Clicked');
    if (onLoginButtonClick) {
      onLoginButtonClick();
    }
  };

  return (
    <div className='form-container'>
      <div className='form-group'>
        <label className='label'>
          Username:
          <input className='input-field' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label className='label'>
          Password:
          <input className='input-field' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className='login-button' onClick={handleLogin}>
          Login
        </button>
        <button className='create-button' onClick={handleCreateAcc}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;