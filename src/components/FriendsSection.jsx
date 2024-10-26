import React from 'react';
import '../styles/FriendsSection.css'; // Ensure this path is correct

const friendsData = [
  { name: 'Shane', image: '/images/1.jpeg' },
  { name: 'Pauls', image: '/images/13.jpeg' },
  { name: 'jhon', image: '/images/3.jpeg' },
  { name: 'Emily', image: '/images/4.jpeg' },
  { name: 'Brock', image: '/images/5.jpeg' },
  { name: 'Fina', image: '/images/6.jpeg' },
  { name: 'Eddie', image: '/images/7.jpeg' },
  { name: 'Angelina', image: '/images/8.jpeg' },
  { name: 'Franklin', image: '/images/9.jpeg' },
  { name: 'Micheal', image: '/images/10.jpeg' },
  { name: 'Rock', image: '/images/11.jpeg' },
  { name: 'Bravo', image: '/images/12.jpeg' },
  // Add more friend objects as needed
];

const FriendsSection = () => { 
  return (
    <div className="friends-section">
      <div className='see-all'>
      <h2>Friend Requests</h2>
      <h5>See all</h5>
      </div>
      <div className="card-container">
        {friendsData.map((friend, index) => (
          <div className="card" key={index}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${friend.image})` }}
            ></div>
            <div className="card-content">
              <h4>{friend.name}</h4>
              <div className="card-buttons">
                <button className="confirm-btn">Confirm</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default FriendsSection;
