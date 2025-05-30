import React from 'react';

const Welcome2 = () => {
  return (
    <div className="contact-container">
      <div
        className="contact-sidebar"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/orchidcontact.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white'
        }}
      >
        <h2>Contact Us</h2>
        <p>Please reach out or visit our location during our open hours.</p>
        <p><strong>Address:</strong> 1030 Willagillespie Eugene, OR 97401</p>
        <p><strong>Phone:</strong> (541) 653-9158</p>
      </div>
      <div className="contact-content">
        <h2>Get in touch</h2>
        <form className="contact-form" action="https://formspree.io/f/mjkrbrdp" method="POST">
          <div className="contact-form-row">
            <div>
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div>
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Email" required />
            </div>
          </div>
          <div>
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" placeholder="Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Welcome2;