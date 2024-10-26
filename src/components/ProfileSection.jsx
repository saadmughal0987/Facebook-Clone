import React from 'react';
import '../styles/ProfileSection.css'; // Custom CSS for styling the profile page

function ProfilePage() {
  const friendSuggestions = [
    { image: '/images/1.jpeg', name: 'John Doe' },
    { image: '/images/2.jpeg', name: 'Jane Smith' },
    { image: '/images/3.jpeg', name: 'Bob Johnson' },
    { image: '/images/4.jpeg', name: 'Alice Williams' },
    { image: '/images/5.jpeg', name: 'Charlie Brown' },
    { image: '/images/6.jpeg', name: 'Eve Adams' },
    { image: '/images/7.jpeg', name: 'Eve Adams' },
    { image: '/images/8.jpeg', name: 'Eve Adams' },
    { image: '/images/9.jpeg', name: 'Eve Adams' },
    { image: '/images/10.jpeg', name: 'Eve Adams' },
    { image: '/images/11.jpeg', name: 'Eve Adams' },
    { image: '/images/12.jpeg', name: 'Eve Adams' },
    // Add more friends if needed
  ];

  return (
    <div className="profile-page">
      {/* Cover Photo Section */}
      <div className="cover-photo">
        <img src="/images/cvr.jpg" alt="Cover" />
        <button className="edit-cover-btn">Edit cover photo</button>
      </div>

      {/* Profile Information Section */}
      <div className="profile-info">
        <div className="profile-picture">
          <img src="/images/saad.jpg" alt="Profile" />
        </div>
        <div className="profile-details">
          <h1>Muhammad Saad</h1>
          <p>37 friends</p>
          <div className="friends-list">
            {friendSuggestions.slice(0, 6).map((friend, index) => (
              <img key={index} src={friend.image} alt={`Friend ${index}`} />
            ))}
          </div>
        </div>
        <div className="profile-actions">
          <button className="add-story-btn">+ Add to story</button>
          <button className="edit-profile-btn">Edit profile</button>
        </div>
      </div>

      {/* Friend Suggestions Section */}
      <div className="friend-suggestions">
        <h3>People you may know</h3>
        <div className="suggestion-cards">
          {friendSuggestions.map((person, index) => (
            <div key={index} className="suggestion-card">
              <img src={person.image} alt={person.name} />
              <h4>{person.name}</h4>
              <button className="add-friend-btn">Add friend</button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="profile-nav">
        <ul>
          <li>Posts</li>
          <li>About</li>
          <li>Friends</li>
          <li>Photos</li>
          <li>Videos</li>
          <li>Reels</li>
          <li>More</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
