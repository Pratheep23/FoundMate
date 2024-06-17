import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth } from '../firebase-config';
import { db } from '../firebase-config';

import './CreateAccount.css';
import Header from '../Components/Header';
import { Navigate } from 'react-router-dom';

export default function CreateAccount() {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address,setAddress] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [createaccountflag,setCreateaccountflag] = useState(false);

    const handleCreateAccount = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await signOut(auth);
        } catch (error) {
            console.log(error.message);
        }

        addDoc(collection(db, "usersData"), {
            name: username,
            mobile: mobileNumber,
            address: address,
            email: email,
            imageUrl: imageUrl,
        })

        setUsername('');
        setMobileNumber('');
        setAddress('');
        setEmail('');
        setImageUrl('');
        setCreateaccountflag(true);

        // Call onButtonClick if it's defined
        // if (typeof onButtonClick === 'function') {
        //     onButtonClick();
        // }

        // Wait for 3 seconds and then navigate to "/account"
        // setTimeout(() => {
        //     Navigate("/account");
        // }, 3000);

        

    }; 

    return (
        <>
            <Header/>
            <section className='container creatacc-container'>
                <div className='maxw-createacc' >
                    <div className='createacc-img'> 
                        <img src={ process.env.PUBLIC_URL + "/images/foundmate-logo.jpg"} alt="FoundMateLogo" />
                    </div>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </label>
                    
                    <label>
                        Email:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    
                    <label>
                        Mobile Number:
                        <input type="number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}  required/>
                    </label>
                    
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </label>
                    
                    <button onClick={handleCreateAccount}>Create Account</button>

                    {createaccountflag && <p>Account Created</p>}

                </div>
            </section>
        </>
    )
}
