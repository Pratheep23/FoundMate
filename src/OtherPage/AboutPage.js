import React from 'react'
import Header from '../Components/Header'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <>
        <Header/>
        <section className='container about-container'>
            <div className='maxw maxw-about'>
                <div className='foundmatelogo'>
                    <img src="%PUBLIC_URL%/images/foundmate-logo.jpg" alt="found mate img"/>
                </div>
                <div className='about-content'>
                    <p>FoundMate is an innovative lost and found website built using ReactJS and Firebase. Utilizing Firestore for data storage and Firebase Authentication for secure user management, FoundMate ensures a seamless and secure user experience. The platform is designed with responsive web design, making it accessible on any device. Users can easily create accounts and upload images of lost or found items. FoundMate features multiple pages for comprehensive navigation and protected web pages to ensure user privacy and security. Whether you’re looking to report a lost item or searching for found items, FoundMate offers a reliable and user-friendly solution.</p>
                </div>
            </div>
        </section>
    </>
  )
}
