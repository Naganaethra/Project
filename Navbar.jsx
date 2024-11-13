/*import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">IMS</div>
      <ul className="nav-links">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Inventory</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
      <input type="text" className="search-bar" placeholder="Search..." />
    </nav>
  );
};

export default Navbar;*/
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showInventory, setShowInventory] = useState(false); // New state for inventory

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleReportForm = () => {
    setShowReportForm(!showReportForm);
  };

  const toggleOrderForm = () => {
    setShowOrderForm(!showOrderForm);
  };

  const toggleInventory = () => {
    setShowInventory(!showInventory); // Toggle inventory display
  };

  return (
    <nav className="navbar">
      <div className="logo">IMS</div>
      <ul className="nav-links">
        <li><a href="#">Dashboard</a></li>
        <li className="inventory-section">
          <a href="#" onClick={toggleInventory}>Inventory</a>
          {showInventory && (
            <div className="inventory-dropdown">
              <button className="inventory-button">Raw Materials</button>
              <button className="inventory-button">Work-in-Progress</button>
              <button className="inventory-button">Finished Goods</button>
            </div>
          )}
        </li>
        <li className="orders-section">
          <a href="#" onClick={toggleOrderForm}>Orders</a>
          {showOrderForm && (
            <div className="order-dropdown">
              <h3>Place an Order</h3>
              <form className="order-form">
                <label htmlFor="orderProductName">Product Name</label>
                <input type="text" id="orderProductName" placeholder="Enter product name" />

                <label htmlFor="orderQuantity">Number of Items</label>
                <input type="number" id="orderQuantity" placeholder="Enter quantity" />

                <label htmlFor="orderPrice">Price</label>
                <input type="number" id="orderPrice" placeholder="Enter price" />

                <label htmlFor="orderAddress">Delivery Address</label>
                <textarea id="orderAddress" rows="2" placeholder="Enter delivery address"></textarea>

                <button type="submit">Place Order</button>
              </form>
            </div>
          )}
        </li>
        <li className="reports-section">
          <a href="#" onClick={toggleReportForm}>Reports</a>
          {showReportForm && (
            <div className="report-dropdown">
              <h3>Report a Product</h3>
              <form className="report-form">
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" placeholder="Enter product name" />

                <label htmlFor="reason">Reason for Report</label>
                <textarea id="reason" rows="4" placeholder="Explain the reason..."></textarea>

                <button type="submit">Submit Report</button>
              </form>
            </div>
          )}
        </li>
        <li className="settings-section">
          <a href="#" onClick={toggleSettings}>Settings</a>
          {showSettings && (
            <div className="settings-dropdown">
              <div className="settings-box">
                <h4>Profile Settings</h4>
                <p>Manage your personal information</p>
              </div>
              <div className="settings-box">
                <h4>System Preferences</h4>
                <p>Adjust system-wide settings</p>
              </div>
              <div className="settings-box">
                <h4>Notification Settings</h4>
                <p>Manage your email and SMS notifications</p>
              </div>
              <div className="settings-box">
                <h4>Account Security</h4>
                <p>Change password and enable 2FA</p>
              </div>
            </div>
          )}
        </li>
        <li className="profile-section">
          <a href="#" onClick={toggleProfile}>Profile</a>
          {showProfile && (
            <div className="profile-dropdown">
              <h3>Naganaethra R K</h3>
              <div className="profile-box">
                <p><strong>Age:</strong> 18</p>
                <p><strong>Address:</strong> Bangalore, India</p>
                <p><strong>Email:</strong> naganaethra@example.com</p>
                <p><strong>Phone:</strong> +91 9876543210</p>
              </div>
            </div>
          )}
        </li>
      </ul>
      <input type="text" className="search-bar" placeholder="Search..." />
    </nav>
  );
};

export default Navbar;
