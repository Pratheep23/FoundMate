import React from 'react'
import Header from '../Components/Header'
import './FaqPage.css'

export default function () {
  return (
    <>
        <Header/>
        <section className='container  faq-container' >
            <div className='maxw maxw-faq'>
                <h1> - FAQ -</h1>
                <ul>
                    <li>
                        <p><b>How do I report a lost item on FoundMate?</b></p>
                        <p>To report a lost item, simply create an account or log in to your existing account. Once logged in, navigate to the "Report Lost Item" section, fill out the required details such as the item description, last known location, and a photo if available. After submitting the form, your lost item report will be added to our database and visible to other users.</p>
                    </li>

                    <li>
                        <p><b>How can I search for a found item on FoundMate?</b></p>
                        <p> To search for a found item, log in to your account and go to the "Search Found Items" section. You can use filters such as item type, location, and date found to narrow down the search results. If you find an item that matches your lost item, you can contact the person who reported it through the provided contact details.</p>
                    </li>

                    <li>
                        <p><b>What should I do if I find an item and want to return it to the owner?</b></p>
                        <p> If you find an item and want to return it, log in to your account and navigate to the "Report Found Item" section. Fill in the details of the item, including a description, location where it was found, and a photo if possible. Once submitted, the owner of the item can contact you through the provided contact information to arrange for the item's return.</p>
                    </li>

                    <li>
                        <p><b>Is there a fee for using FoundMate services?</b></p>
                        <p>FoundMate is free to use for all users. There are no fees for reporting lost or found items, searching the database, or contacting other users. Our mission is to help people reunite with their lost items as quickly and efficiently as possible.</p>
                    </li>

                    <li>
                        <p><b>How does FoundMate protect my personal information?</b></p>
                        <p>FoundMate takes your privacy and security seriously. We only collect necessary information to help facilitate the return of lost items. Personal contact details are only shared with users who have found or reported items that match your description. Additionally, we use secure encryption protocols to protect your data and prevent unauthorized access.</p>
                    </li>
                </ul>
            </div>
        </section>
    </>
  )
}
