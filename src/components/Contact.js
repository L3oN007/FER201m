import React from 'react';
function ContactPage() {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h1>Contact Information</h1>
                <div className="info">
                    <p><i class="fa-solid fa-envelope"></i> Email: <a href="mailto:contact@netflix.com"> contact@netphic.com</a></p>
                    <p><i class="fa-solid fa-phone"></i> Phone: 123-456-7890</p>
                    <p><i class="fa-sharp fa-solid fa-location-dot"></i> Address: FER201m - Vu Minh Nhat</p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Contact Us </h2>
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
