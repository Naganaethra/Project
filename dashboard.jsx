/*import React from 'react';
import './dashboard.css';

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <h1>Welcome to Inventory Management Dashboard</h1>
      <div className="metrics">
        <div className="metric-card">Total Inventory: 500</div>
        <div className="metric-card">Low Stock Items: 10</div>
        <div className="metric-card">Recent Orders: 20</div>
        <div className="metric-card">System Status: All Systems Operational</div>
      </div>
    </section>
  );
};

export default DashboardOverview;*/
import React, { useState, useEffect } from 'react';
import './dashboard.css';

const DashboardOverview = () => {
  const [totalInventory, setTotalInventory] = useState(500);
  const [lowStockItems, setLowStockItems] = useState(10);
  const [recentOrders, setRecentOrders] = useState(20);
  const [systemStatus, setSystemStatus] = useState("All Systems Operational");

  const handlePlaceOrder = () => {
    setRecentOrders((prevOrders) => prevOrders + 1);
  };

  useEffect(() => {
    const inventoryInterval = setInterval(() => {
      setTotalInventory((prevInventory) => {
        const newInventory = prevInventory - Math.floor(Math.random() * 5);
        return newInventory < 0 ? 0 : newInventory;
      });
    }, 5000); 

    const lowStockInterval = setInterval(() => {
      setLowStockItems((prevLowStock) => {
        const newLowStock = prevLowStock + Math.floor(Math.random() * 3);
        return newLowStock > 50 ? 50 : newLowStock;
      });
    }, 7000); 

    const statusInterval = setInterval(() => {
      const statuses = ["All Systems Operational", "Maintenance Required", "System Overload", "Network Issues Detected"];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setSystemStatus(randomStatus);
    }, 10000); // Change status every 10 seconds

    return () => {
      clearInterval(inventoryInterval);
      clearInterval(lowStockInterval);
      clearInterval(statusInterval);
    };
  }, []);

  return (
    <section className="dashboard-overview">
      <h1>Welcome to Inventory Management Dashboard</h1>
      <div className="metrics">
        <div className="metric-card">
          <div className="metric-title">Total Inventory</div>
          <div className="metric-value">{totalInventory}</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Low Stock Items</div>
          <div className="metric-value">{lowStockItems}</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Recent Orders</div>
          <div className="metric-value">{recentOrders}</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">System Status</div>
          <div className={`metric-value status ${systemStatus.replace(/\s+/g, '-').toLowerCase()}`}>
            {systemStatus}
          </div>
        </div>
      </div>
      <button className="place-order-button" onClick={handlePlaceOrder}>
        Place New Order
      </button>
    </section>
  );
};

export default DashboardOverview;
