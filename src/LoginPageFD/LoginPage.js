import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';

import Header from '../Components/Header';
import './LoginPage.css';



const LoginPage = () => {



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
      const flag = "yes";
      localStorage.setItem('FoundMateUserLoggedinFlag',flag)

    } catch (error) {
      console.log(error.message);
    }
  };


  

  return (

    <>
      <Header/>
      <section className='container loginform-container'>
        <div className='maxw-loginform'>

          <div classNa me='loginform-img'>
            <img src={ process.env.PUBLIC_URL + "/images/foundmate-logo.jpg"} alt="FoundMateLogo" />
          </div>

          <label>
           Email:
            <input className='' type="text" value={username} onChange={(e) => setUsername(e.target.value)}  required/>
          </label>
          
          <label>
            Password:
            <input className='' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </label>
          
          <button  onClick={handleLogin}>Login</button>

          <p>Dont have an account ?, <NavLink to="/createaccount">CREATE</NavLink></p>

        </div>
      </section>
    </>

    
  );
};

export default LoginPage;