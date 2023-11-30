import React, { useState, useEffect } from 'react';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { auth } from '../firebase-config';
import { db } from '../firebase-config';

const MainPage = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      // Get the current user from Firebase Authentication
      const currentUser = auth.currentUser;

      if (currentUser) {
        try {
          // Use the user's email to query Firestore and get user details
          const userSnapshot = await getDocs(query(collection(db, "usersData"), where("email", "==", currentUser.email)));

          if (!userSnapshot.empty) {
            // Extract user details from the Firestore document
            const userData = userSnapshot.docs[0].data();
            setUserDetails(userData);
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

  return (
    <div>
      {userDetails ? (
        <div>
          <h2>User Details</h2>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>Mobile: {userDetails.mobile}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default MainPage;
