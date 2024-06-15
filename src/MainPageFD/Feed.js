
import React, { useState, useEffect } from 'react';
import { db } from "../firebase-config";
import { collection,getDocs } from "firebase/firestore";

import './feed.css'
import '../index.css';
import Accountbar from "./Accountbar";
import Header from "../Components/Header";
import { Navigate } from "react-router-dom";

function Feed() {

    const loggedinFlag = localStorage.getItem('FoundMateUserLoggedinFlag');
    

    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
            const dataRef = await collection(db, 'feedCollection');
            const dataSnapshot = await getDocs(dataRef);
            const newData = dataSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setData(newData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      };
        fetchData();
    }, []); 

    if (loggedinFlag !== "yes") {
      return <Navigate to="/" />;
    }

    return (
      <>
      
        <Header/>
        <Accountbar/>
        <section className="container feed-container">
          <div className="maxw-feed">
            <div className="Feed">
              {data.map((objarr) => (
              <div
                className={`Post-post ${objarr.type === 'Found' ? 'found-post' : ''}`}
                key={objarr.id}
              >
                <div className="Post-details">
                <h2 style={{ textTransform: 'uppercase' }}>{objarr.name}</h2>
                </div>
                <div className="Post-image">
                  <img src={objarr.imageUrl} alt={objarr.name} />
                  {objarr.type === 'Lost' && <p><b>Reward: {objarr.reward}</b></p>}
                </div>
                <div className="Post-desc">
                  <p>{objarr.description}</p>
                  <p>Location: {objarr.lostLocation}</p>
                  <p>Contact Details: <br/>{objarr.mobile} | {objarr.email} </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      
      </>
    );
  }
  
  export default Feed;