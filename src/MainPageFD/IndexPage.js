import React from 'react'
import Header from '../Components/Header'
import { NavLink } from 'react-router-dom'

import './IndexPage.css'

export default function IndexPage() {
  return (
    <>
      <Header/>
      <section className=' container index-main-container' >
        <div className='maxw maxw-main'>
          <div className='foundmate-content' > 
            <h1>Hey! Guess what I found? Your lost treasure!</h1>
            <p>FoundMate the perfect platform for getting your lost item</p>
          </div>
          <div className='foundmate-pic'>
            <img  alt='pic' src={ process.env.PUBLIC_URL + "/images/indexpic1.png"}/>
          </div>
        </div>
      </section>

      <section className='container index-boxes-container' >
        <div className='maxw maxw-boxes'>
          <div>
            <p>Come Quick, Lets see has someone found your item <NavLink to="/account">Click</NavLink></p>
            <p>Dont have an Account? <NavLink to="/createaccount">Click</NavLink> Me</p>
          </div>
          <div>
            <h3>- Our Stats -</h3>
            <p>FoundMate as successfully helped 10,000 people in finding their lost item </p>
          </div>
          <div>
            <p>We have the most active users and crew who will and work bring your item to you</p>
          </div>
        </div>
      </section>

    </>
  )
}
