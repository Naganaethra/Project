import React from 'react';
import Navbar from './Navbar';
import DashboardOverview from './dashboard';
import QuickActions from './quickActions';
import RecentActivity from './recentActivity';
import Footer from './Footer';
import './Make.css';


const Make = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <div className="main-content">
        <DashboardOverview/>
        <QuickActions/>
        <RecentActivity/>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Make;