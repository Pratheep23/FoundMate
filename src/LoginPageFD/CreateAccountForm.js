import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth } from '../firebase-config';
import { db } from '../firebase-config';
import './CreateAccountForm.css';

const CreateAccountForm = ({ onButtonClick }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address,setAddress] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleCreateAccount = async () => {
    // Add your create account logic here
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await signOut(auth);
    } catch (error){
      console.log(error.message);
    }
    console.log(`Creating account with username: ${username}, email: ${email}, password: ${password}, and mobile number: ${mobileNumber}`);
    addDoc(collection(db, "usersData"), {
      name: username,
      mobile: mobileNumber,
      address: address,
      email: email,
      imageUrl: imageUrl,
    })
    

    // Clear the form after successful submission
    setUsername('');
    setMobileNumber('');
    setAddress('');
    setEmail('');
    setImageUrl('');
    // You can add further logic, like sending data to a backend for account creation
    if (onButtonClick) {
        onButtonClick();
    }
  };

  return (
    <div className="create-account-form">
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Mobile Number:
        <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default CreateAccountForm;
