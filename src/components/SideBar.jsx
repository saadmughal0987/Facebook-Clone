import React from 'react';
import '../styles/SideBar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const sidebarItems = [
  { icon: <FontAwesomeIcon icon={faUserFriends} />, label: 'Home' },
  { icon: <img src="/images/add-friend.png" alt="Friend Requests" />, label: 'Friend Requests' },
  { icon: <img src="/images/add-friend.png" alt="Suggestions" />, label: 'Suggestions' },
  { icon: <img src="/images/gifts.png" alt="Birthdays" />, label: 'Birthdays' },
  { icon: <img src="/images/add-friend.png" alt="Custom Lists" />, label: 'Custom Lists' },
];

const SideBar = () => {
  return (
    <div className="sidebarfrnd">
      <div> 
        <div className="frnd">
          <h3>Friends</h3>
          <div className='circle-bg'>
          <img src="/images/settings.png" alt="Settings" />
          </div>
        </div>
      </div>
      <div className="sidebarfrnd-section">
        <ul>
          {sidebarItems.map((item, index) => (
            <li className={`sidebarfrnd-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="circle-bg">
                {item.icon}
              </div>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
