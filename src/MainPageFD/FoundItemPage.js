import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage, db } from '../firebase-config'; // Adjust the path accordingly
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import './LostItemPage.css'; // Import your CSS file

const LostItemForm = () => {
  const [type, setType] = useState('Found');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lostLocation, setLostLocation] = useState('');
  const [reward, setReward] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleGoBack = (e) => {
    navigate('/main')
  }
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

  return (
    <>
      <div className="go-back-button">
          <button type="go-back" onClick={handleGoBack}>Go back</button>
      </div>
      <div className="lost-item-form-container">
        <h2>Enter the details of the item you lost</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
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
    </>
  );
};

export default LostItemForm;