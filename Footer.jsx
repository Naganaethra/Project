/*import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Inventory Management System. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Support</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;*/
import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleModalOpen = (content) => {
    setModalContent(content);
  };

  const handleModalClose = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer className="footer">
        <p>&copy; 2024 Inventory Management System. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" onClick={() => handleModalOpen('support')}>Support</a>
          <a href="#" onClick={() => handleModalOpen('terms')}>Terms of Service</a>
          <a href="#" onClick={() => handleModalOpen('privacy')}>Privacy Policy</a>
          <a href="#" onClick={() => handleModalOpen('contact')}>Contact Us</a>
        </div>
      </footer>

      {modalContent && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalClose}>X</button>
            {modalContent === 'support' && (
              <>
                <h2>Support</h2>
                <p>Phone: +91 1234567890</p>
                <p>Email: support@ims.com</p>
                <h3>FAQ</h3>
                <p><strong>Q:</strong> How can I reset my password?</p>
                <p><strong>A:</strong> Click on 'Forgot Password' at the login screen, and follow the steps to reset it.</p>
              </>
            )}
            {modalContent === 'terms' && (
              <>
                <h2>Terms of Service</h2>
                <h3>User Responsibilities</h3>
                <p>Users must keep account information confidential and not engage in malicious activity.</p>
                <h3>Service Limitations</h3>
                <p>The service is provided "as-is," and any interruptions are minimized but not guaranteed.</p>
                <a href="/terms" className="read-more">Read More</a>
              </>
            )}
            {modalContent === 'privacy' && (
              <>
                <h2>Privacy Policy</h2>
                <h3>Data Collection</h3>
                <p>We collect user data like email, contact details, and usage patterns to improve services.</p>
                <h3>Cookies</h3>
                <p>Cookies are used to enhance user experience. Users can opt out by modifying browser settings.</p>
              </>
            )}
            {modalContent === 'contact' && (
              <>
                <h2>Contact Us</h2>
                <p>Location: 123, Industrial Road, Bangalore, India.</p>
                <div className="social-links">
                  <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">LinkedIn</a>
                </div>
                <form className="contact-form">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Subject" />
                  <textarea placeholder="Message"></textarea>
                  <button type="submit">Submit</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
