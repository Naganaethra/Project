/*import React from 'react';
import './recentActivity.css';

const RecentActivity = () => {
  return (
    <section className="recent-activity">
      <h2>Recent Activity</h2>
      <table className="activity-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Item Name</th>
            <th>Type</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-08-31</td>
            <td>Item A</td>
            <td>Addition</td>
            <td>50</td>
          </tr>
          <tr>
            <td>2024-09-1</td>
            <td>Item B</td>
            <td>Addition</td>
            <td>500</td>
          </tr>
          <tr>
            <td>2024-09-2</td>
            <td>Item C</td>
            <td>Addition</td>
            <td>60</td>
          </tr>
          
        </tbody>
      </table>
    </section>
  );
};

export default RecentActivity;*/
import React, { useState } from 'react';
import './recentActivity.css';

const RecentActivity = () => {
  // Dummy data to simulate more entries
  const [activities, setActivities] = useState([
    { date: '2024-08-31', item: 'Item A', type: 'Addition', quantity: 50 },
    { date: '2024-09-01', item: 'Item B', type: 'Addition', quantity: 500 },
    { date: '2024-09-02', item: 'Item C', type: 'Addition', quantity: 60 },
    { date: '2024-09-03', item: 'Item D', type: 'Removal', quantity: 30 },
    { date: '2024-09-04', item: 'Item E', type: 'Addition', quantity: 120 },
    { date: '2024-09-05', item: 'Item F', type: 'Removal', quantity: 20 },
    // Additional items can be added here or loaded from a database.
  ]);

  const handleLoadMore = () => {
    // Mock function to simulate loading more activities
    const moreActivities = [
      { date: '2024-09-06', item: 'Item G', type: 'Addition', quantity: 80 },
      { date: '2024-09-07', item: 'Item H', type: 'Addition', quantity: 150 },
      { date: '2024-09-08', item: 'Item I', type: 'Removal', quantity: 70 },
    ];
    setActivities(prevActivities => [...prevActivities, ...moreActivities]);
  };

  return (
    <section className="recent-activity">
      <h2>Recent Activity</h2>
      <table className="activity-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Item Name</th>
            <th>Type</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.date}</td>
              <td>{activity.item}</td>
              <td>{activity.type}</td>
              <td>{activity.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="load-more" onClick={handleLoadMore}>Load More</button>
    </section>
  );
};

export default RecentActivity;
