import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div>
       <header>
       <div class="header-title">
            <h1>Citizen Helpdesk</h1>
        </div>

            <nav>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
            </nav>
        
       </header>

    
    <section id="contact-section" class="contact">
        <div class="container contact-container">
            
        
            <div class="contact-info">
                <h2>Contact Information</h2>
                <p>We’re here to help. Reach out to us through the form or contact us directly.</p>
                <ul>
                    <li><strong>Email:</strong> support@citizenhelpdesk.com</li>
                    <li><strong>Phone:</strong> +977-123-456789</li>
                    <li><strong>Address:</strong>  Biratnagar, Nepal</li>
                </ul>
            </div>

            
            <div class="contact-form">
                <h2>Send Us a Message</h2>
                <form action="#" method="POST">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required/>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>

                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
            
        </div>
    </section>

    <footer>
        <p>&copy; 2024 Citizen Helpdesk. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Contact
