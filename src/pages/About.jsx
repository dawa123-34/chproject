import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <header>
      <div class="header-title">
            <h1>Citizen Helpdesk</h1>
        </div>
            <nav>
                <a href="/">Home</a>
                <a href="/contact">Contact</a>
            </nav>
        
       </header>

    
    <section class="about">
        <div class="container">
            <h2>About Citizen Helpdesk</h2>
            <p>Citizen Helpdesk is a public service information platform designed to help citizens access accurate, up-to-date information on government services, policies, and documentation requirements. With an integrated chatbot, we aim to simplify complex procedures, ensuring transparency and accessibility for all.</p>
        </div>
    </section>

    
    <section id="mission" class="mission">
        <div class="container">
            <h2>Our Mission</h2>
            <p>Our mission is to bridge the information gap between citizens and government services. By providing a digital platform equipped with chatbot assistance, we strive to make government procedures clearer, reducing misinformation and protecting citizens from unnecessary fees and intermediaries.</p>
        </div>
    </section>


    <section id="team" class="team">
        <div class="container">
            <h2>Our Team</h2>
            <div class="team-member">
                <h3>Sunil Karki</h3>
                <p>Lead Developer & Project Manager</p>
            </div>
            <div class="team-member">
                <h3>Sunil Karki</h3>
                <p>Chatbot Developer & Data Analyst</p>
            </div>
            <div class="team-member">
                <h3>Dawa Dorje Tamang</h3>
                <p>UI/UX Designer</p>
            </div>
            <div class="team-member">
                <h3>ALL</h3>
                <p>Content Strategist & Policy Advisor</p>
            </div>
        </div>
    </section>

    
    <footer>
        <p>&copy; 2024 Citizen Helpdesk. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default About
