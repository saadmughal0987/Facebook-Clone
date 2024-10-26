import React from 'react';
import Header from '../components/Header.jsx'; 
import ProfileSection from '../components/ProfileSection.jsx'; 



const ProfilePage = () => {
  return (
    <div className="fb-page-wrapper">
      <Header />
      <div className="profile-page-content">
        <ProfileSection />
      </div>
    </div>
  );
};

export default ProfilePage; 
