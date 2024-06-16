import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config'

import './Accountbar.css'


export default function Accountbar() {

    const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('FoundMateUserLoggedinFlag');
        navigate('/');
    }
    // const handleLost = () => {
    //     navigate('/main/lost');
    // }

  return (
    <>
    
        <nav className='account-navbar'>
            <ul className='account-nav'>
                <li><NavLink  to="/main/lost">LOST</NavLink></li>  
                <li><NavLink  to="/main/found">FOUND</NavLink></li>
                <li><NavLink  to="/main"><img src="%PUBLIC_URL%/images/myaccount/feed.png" /></NavLink></li>
                <li><button   onClick={handleLogout}> <img src="%PUBLIC_URL%/images/myaccount/logout.png" /> </button></li>
            </ul>
        </nav>

    </>
  )
}
