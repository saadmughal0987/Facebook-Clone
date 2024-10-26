import React from 'react';
import '../styles/Header.css';

const Header = () => {
  const navIcons = [
    { src: '/images/home.png', alt: 'Home', link: '/fb-page' },
    { src: '/images/friends.png', alt: 'Friends', link: '/frnd-page' },
    { src: '/images/marketplace.png', alt: 'Games', link: '/marketplace-page' },
    { src: '/images/facebook.png', alt: 'Users', link: '/users' },
    { src: '/images/group.png', alt: 'Profile', link: '/profile' },
  ];

  const rightIcons = [
    { src: '/images/dots-menu.png', alt: 'Menu', link: '/icon1' },
    { src: '/images/messenger.png', alt: 'Messenger', link: '/icon2' },
    { src: '/images/notification-bell.png', alt: 'Notifications', link: '/icon3' },
  ];

  const profileIcon = { src: '/images/saad.jpg', alt: 'Profile', link: '/icon4' };

  return (
    <div className="my-header"> 
      <div className="header-left">
        <img src="/images/logo.png" alt="Facebook Logo" className="logo" />
        <input type="text" placeholder="" className="search-bar" />
        <div className="my-placeholder">
          <img src="/images/search.png" alt="Search Icon" className="search-icon" />
          <div style={{ fontSize: 'smaller' }}>Search Facebook</div>
        </div>
      </div>

      <div className="header-center">
        {navIcons.map((icon) => (
          <div className="nav-icon" key={icon.alt}>
            <a href={icon.link}>
              <img src={icon.src} alt={icon.alt} />
            </a>
          </div>
        ))}
      </div>

      <div className="header-right">
        {rightIcons.map((icon) => (
          <div className="right-ico" key={icon.alt}>
            <a href={icon.link}>
              <img src={icon.src} alt={icon.alt} />
            </a>
          </div>
        ))}

        <div className="profile">
          <a href="/profile-page">
            <img src={profileIcon.src} alt={profileIcon.alt} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
