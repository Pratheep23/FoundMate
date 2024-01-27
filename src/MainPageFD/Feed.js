import Navbar from "./Navbar";
import './feed.css'
import '../index.css';
import React, { useState, useEffect } from 'react';
import { db } from "../firebase-config";
import { collection,getDocs } from "firebase/firestore";

function Feed() {
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
  
    // checking if data is received

    return (
      <div>
        <Navbar />
        <section className="back-color">
          <div className="container">
            <div className="Feed">
              {/* {data.map((objarr) => (
                <div className="Post-post" key={objarr.id}>
                  <div className="Post-details">
                    <h2>{objarr.name}</h2>
                  </div>
                  <div className="Post-image">
                    <img src={objarr.imageUrl} alt={objarr.name} />
                    <h1>Reward: {objarr.reward}</h1>
                  </div>
                  <div className="Post-desc">
                    <p>{objarr.description}</p>
                  </div>
                </div>
              ))} */}
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
                  {objarr.type === 'Lost' && <h1>Reward: {objarr.reward}</h1>}
                </div>
                <div className="Post-desc">
                  <p>{objarr.description}</p>
                  <p>Contact Details : {objarr.mobile} | {objarr.email} </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Feed;