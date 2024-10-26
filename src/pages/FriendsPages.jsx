import React from 'react';
import Header from '../components/Header.jsx'; 
import SideBar from '../components/SideBar.jsx'; 
import FriendsSection from '../components/FriendsSection.jsx'; 

const FriendsPages = () => {
  return (
    <div className="fb-page-wrapper">
      {/* Enclose the Header and Sidebar inside the same parent div */}
      <Header />
      <div className="frnd-page-content">
        <SideBar />
        {/* You can add more content here for the main area */}
      </div>
      <div className="frnd-page-content">
        <FriendsSection />
        {/* You can add more content here for the main area */}
      </div>
    </div>
  );
};

export default FriendsPages;
