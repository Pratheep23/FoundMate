import React, { useState, useEffect } from 'react';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { auth } from '../firebase-config';
import { db } from '../firebase-config';
import './Myaccount.css';
import '../index.css';

const Myaccount = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {

        try {
          const userSnapshot = await getDocs(query(collection(db, "usersData"), where("email", "==", currentUser.email)));

          if (!userSnapshot.empty) {
            const userData = userSnapshot.docs[0].data();
            setUserDetails(userData);
            console.log(userData);
          } else {
            console.error('User not found in Firestore');
            setUserDetails(null);
          }
        } catch (error) {
          console.error('Error fetching user details:', error.message);
          setUserDetails(null);
        }
      } else {
        setUserDetails(null);
      }
    };

    // Fetch user details when the component mounts
    fetchUserDetails();
  }, []);

  return (
    <>

      <section >
        <div className="container">
          <div className="Myaccount">
            <div className="profile">
              <div className="circularDiv">

              <img src={ process.env.PUBLIC_URL + '/images/myaccount/profile-pic.png'} alt="profile-img" className="profile-photo" />

              </div>
            
              <h2>{userDetails?.name}</h2>
              <br />
              <p>
                <a href="#"> <img src={ process.env.PUBLIC_URL + '/images/socialmedia/whatsapp.png'} alt='whatsapplogo' /></a>
                <a href="#"><img src={ process.env.PUBLIC_URL + '/images/socialmedia/instagram.png'} alt='instagramlogo' /></a>
                <a href="#"><img src={ process.env.PUBLIC_URL + '/images/socialmedia/twitter.png'} alt='twitterlogo' /></a>
                <a href="#"><img src={ process.env.PUBLIC_URL + '/images/socialmedia/facebook.png'} alt='facebooklogo' /></a>
              </p>
            </div>
            <div className='profile-desc'>
              <h1>Name : {userDetails?.name}</h1>
              <h1>Email : {userDetails?.email}</h1>
              <h1>PHONE No : {userDetails?.mobile}</h1>
              <h1>Address : {userDetails?.address}</h1>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Myaccount;
