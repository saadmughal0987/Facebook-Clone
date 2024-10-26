import React, { useState } from 'react';
import '../styles/SideBarLeft.css'; // External CSS

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // Define menu items
  const mainMenuItems = [
    { src: 'images/saad.jpg', label: 'Muhammad Saad', isProfile: true },
    { src: '/images/friend.png', label: 'Find Friends' },
    { src: '/images/bookmark.png', label: 'Saved' },
    { src: '/images/memories.png', label: 'Memories' },
    { src: '/images/groups.png', label: 'Groups' },
    { src: '/images/video.png', label: 'Video' },
    { src: '/images/shop.png', label: 'Marketplace', customSize: true },
    { src: '/images/feed.png', label: 'Feeds' },
    { src: '/images/event.png', label: 'Events', customSize: true },
    { src: '/images/chart.png', label: 'Ads Manager', customSize: true },
  ];

  const extraMenuItems = [
    { src: '/images/gift.png', label: 'Birthdays' },
    { src: '/images/global-warming.png', label: 'Climate Science Center' },
    { src: '/images/Fundraising.png', label: 'Fundraising' },
    { src: '/images/msg.png', label: 'Messenger' },
    { src: '/images/ms.png', label: 'Messenger Kids' },
    { src: '/images/wallet.png', label: 'Orders and Payments' },
    { src: '/images/location.png', label: 'Pages' },
    { src: '/images/game.png', label: 'Play games' },
    { src: '/images/activity.png', label: 'Recent ad activity' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {/* Main Menu Items */}
        {mainMenuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img
              src={item.src}
              alt={item.label}
              className="icon"
              style={item.customSize ? { height: '27px', width: '27px' } : {}}
            />
            <span>{item.label}</span>
          </div>
        ))}

        {/* Show more toggle */}
        {!showMore && (
          <div className="menu-item see-more" onClick={handleShowMore}>
            <img src="/images/down.png" alt="Dropdown" className="icon" />
            <span>See more</span>
          </div>
        )}

        {/* Extra Menu Items */}
        {showMore && (
          <>
            <div className="extra-menu">
              {extraMenuItems.map((item, index) => (
                <div key={index} className="menu-item">
                  <img src={item.src} alt={item.label} className="icon" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* See Less Button */}
            <div className="menu-item see-more" onClick={handleShowMore}>
              <img src="/images/drop-up.png" alt="Dropdown" className="icon" />
              <span>See less</span>
            </div>
          </>
        )}
        <hr />
      </div>

      <div className="shortcuts">
        <h4>Your shortcuts</h4>
        <div className="shortcut-item">
          <img src="/images/8 ball.jpeg" alt="8 Ball Pool" className="icon" />
          <span>8 Ball Pool</span>
        </div>
      </div>

      <div className="footer">
        <span>Privacy · Terms · Advertising · Ad choices · Cookies · More · Meta © 2024</span>
      </div>
    </div>
  );
};

export default Sidebar;
