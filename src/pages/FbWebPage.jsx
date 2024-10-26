import React from 'react';
import Header from '../components/Header.jsx'; 
import SideBarLeft from '../components/SideBarLeft.jsx'; 
import RightSidebar from '../components/RightSidebar.jsx'; 
import MainContent from '../components/MainContent.jsx'; 



import '../styles/App.css'; // External CSS

const FbWebPage = () => { 
  return (
    <div className="fb-container">
        <Header />
   <div className="left-sidebar">
    <SideBarLeft />
    </div>
    
    <div className="main-content">
     <MainContent /> 
    </div> 
   

    {/* Right Sidebar */}
    <div className="right-sidebar">
    <RightSidebar/>    </div>
  </div> 
  );
};

export default FbWebPage;
