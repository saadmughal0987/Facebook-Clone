import React from 'react';
import Header from '../components/Header.jsx';
import MarketSideBar from '../components/MarketSideBar.jsx'; // Make sure the path is correct
// import MarketCards from '../components/MarketCards.jsx';

const MarketplacePage = () => {
  return (
    <div className="fb-page-wrapper">
    {/* Enclose the Header and Sidebar inside the same parent div */} 
    <Header />
    <div className="frnd-page-content">
      <MarketSideBar />
      {/* You can add more content here for the main area */}
    </div>
    {/* <div className="frnd-page-content">
      <MarketCards />
    </div> */}
  </div>
   
   
  );
}

export default MarketplacePage;
