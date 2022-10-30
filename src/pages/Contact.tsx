import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
        <div className="leftSide"
        style={{backgroundImage:`url(${PizzaLeft})`}}>

        </div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form action="#" id="contact-form" method='post'>
                <label htmlFor="name">Full Name</label>
                <input name="name" type="text" placeholder='Enter full name...' required/>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" placeholder='Enter email...' required/>
                <label htmlFor="message">Message</label>
                <textarea 
                    name="message" placeholder='Enter message...'></textarea>
                    <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}
