import React from 'react'
import './Home.css'

const Home = () => {
  return (
   
    <div>
    <header>
        <div class="header-title">
            <h1>Citizen Helpdesk</h1>
        </div>
        <nav class="navbar">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

    <section class="hero">
        <div class="container">
            <h2>Get Quick and Accurate Information on Government Services</h2>
            <p>Your one-stop platform for accessing essential information on government procedures, documentation, and services.</p>
            <button onclick="startChat()">Ask the Chatbot</button>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2>Our Services</h2>
            <div class="card-container">
                <div class="card" onclick="location.href='/citizenship'">
                    <h3>Citizenship Application</h3>
                    <p>Get guidance on applying for citizenship, document requirements, and procedures.</p>
                </div>
                <div class="card" onclick="location.href='/passport'">
                    <h3>Passport Application</h3>
                    <p>Learn about the passport application process, required documents, and fees.</p>
                </div>
                <div class="card" onclick="location.href='/other-services'">
                    <h3>Other Government Services</h3>
                    <p>Access information on services such as birth certificates, national IDs, and more.</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 Citizen Helpdesk. All rights reserved.</p>
    </footer>
</div>



  )
}

export default Home