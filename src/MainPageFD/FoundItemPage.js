import React, { useState, useEffect } from 'react';
import { getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, storage, db } from '../firebase-config'; // Adjust the path accordingly
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import './LostItemPage.css'; // Import your CSS file
import Header from '../Components/Header';
import Accountbar from './Accountbar';
import './FoundItemPage.css';
import { Navigate } from "react-router-dom";


const LostItemForm = () => {
  const [email,setEmail] = useState('');
  const [mobile,setMobile] = useState('');
  const [type, setType] = useState('Found');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lostLocation, setLostLocation] = useState('');
  const [reward, setReward] = useState('');
  const [image, setImage] = useState(null);

  const loggedinFlag = localStorage.getItem('FoundMateUserLoggedinFlag');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {

        try {
          const userSnapshot = await getDocs(query(collection(db, "usersData"), where("email", "==", currentUser.email)));

          if (!userSnapshot.empty) {
            const userData = userSnapshot.docs[0].data();
            setEmail(userData.email);
            setMobile(userData.mobile);
          } else {
            console.error('User not found in Firestore');
          }
        } catch (error) {
          console.error('Error fetching user details:', error.message);
        }
      } else {
        console.log("no current user");
      }
    };

    // Fetch user details when the component mounts
    fetchUserDetails();
  }, []);

  
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Firebase Storage
    const storageRef = ref(storage, `items/${image.name}`);
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);

    // Add details to Firestore
    try {
      const docRef = await addDoc(collection(db, 'feedCollection'), {
        type,
        name,
        description,
        lostLocation,
        reward,
        email,
        mobile,
        imageUrl,
      });

      console.log('Document written with ID:', docRef.id);
      // You can redirect or show a success message here
    } catch (error) {
      console.error('Error adding document:', error);
      // Handle the error, show an error message, etc.
    }
    navigate('/main');
  };

  if (loggedinFlag !== "yes") {
    return <Navigate to="/" />;
  }

  return (
    <>
      
      <Header/>
      <Accountbar/>

      <section  className='container foundform-container'>
        <div className='maxw-foundform'>
          <h1>Enter the details of the item you Found</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name of Found Item:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Description:
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
              Found Location:
              <input type="text" value={lostLocation} onChange={(e) => setLostLocation(e.target.value)} required />
            </label>
            <label>
              Upload Image:
              <input type="file" accept="image/*" onChange={handleImageChange} required />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LostItemForm;

