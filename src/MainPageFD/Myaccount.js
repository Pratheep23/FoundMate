import React, { useState, useEffect } from 'react';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { auth } from '../firebase-config';
import { db } from '../firebase-config';
import './Myaccount.css';
import Navbar from "./Navbar";
import '../index.css';

const Myaccount = () => {
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
      const fetchUserDetails = async () => {
        // Get the current user from Firebase Authentication
        const currentUser = auth.currentUser;
        console.log("bro vendaam bro")
        if (currentUser) {
          console.log("currend user is there")
          try {
            // Use the user's email to query Firestore and get user details
            const userSnapshot = await getDocs(query(collection(db, "usersData"), where("email", "==", currentUser.email)));
            console.log("smap created")
            if (!userSnapshot.empty) {
              // Extract user details from the Firestore document
              console.log("so user not empty")
              const userData = userSnapshot.docs[0].data();
              setUserDetails(userData);
              console.log(userDetails);
            } else {
              console.error('User not found in Firestore');
              setUserDetails(null);
            }
          } catch (error) {
            console.error('Error fetching user details:', error.message);
            setUserDetails(null);
          }
        } else {
          // No user is currently logged in
          setUserDetails(null);
        }
      };

      // Fetch user details when the component mounts
      fetchUserDetails();
    }, []);

    return(
        <>
            <Navbar/>
            <section >
                <div className="container">
                    <div className="Myaccount">
                        <div className="profile">
                            <img src='/images/myaccount/profile-pic.png' alt="profile-img" className="profile-photo" />
                            <h2>UserName</h2>
                            <br></br>
                            <p> 
                                <a href="#"> <img src='/images/socialmedia/whatsapp.png' alt='whatsapplogo' /></a>    
                                <a href="#"><img src='/images/socialmedia/instagram.png' alt='instagramlogo' /></a>
                                <a href="#"><img src='/images/socialmedia/twitter.png' alt='twitterlogo' /></a>
                                <a href="#"><img src='/images/socialmedia/facebook.png' alt='facebooklogo' /></a>
                            </p>
                        </div>
                        <div className='profile-desc'>
                            <h1>Name : {userDetails.name}</h1>
                            <h1>Email : {userDetails.email}</h1>
                            <h1>PHONE No : {userDetails.mobile}</h1>
                            <h1>Address : {userDetails.address}</h1>\
                        </div>
                    </div>
                    <div className='Settings'>
                        <h1>Notfications Preference </h1>
                        <ul>
                            <li><p>Email : <input type="checkbox" id="notification-email" name="notification-email" value="Email"></input></p></li>
                            <li><p>Call :  <input type="checkbox" id="notification-call" name="notification-call" value="call"></input></p> </li>
                        </ul>
                    </div>
                </div>
            </section>
          </>
        
    )
};

export default Myaccount;