import React from 'react';

function ContactPage() {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h1>Contact Information</h1>
                <div className="info">
                    <p> Email: <a href="mailto:contact@netflix.com"> contact@netflix.com</a></p>
                    <p> Phone: 123-456-7890</p>
                    <p> Address: 123 Netflix Street, Los Angeles, CA</p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
