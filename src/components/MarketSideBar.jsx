import React from 'react';
import '../styles/MarketSideBar.css'; // Combined CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faBell, faInbox, faShoppingCart, faCar,faHome,faTag,faTshirt,faMobileAlt,faVideo,faHeart,faPen, faWrench, faGuitar, faPenToSquare, faCat, faRunning, faGamepad, faUserGroup, faSeedling } from '@fortawesome/free-solid-svg-icons'; // Import notification and inbox icons

const MarketData = [
  { name: '$20', image: '/images/m1.jpeg' },
  { name: '$40', image: '/images/m2.jpeg' },
  { name: '$10', image: '/images/m3.jpeg' },
  { name: '$50', image: '/images/m4.jpeg' },
  { name: '$60', image: '/images/m5.jpeg' },
  { name: '$40', image: '/images/m6.jpeg' },
  { name: '$50', image: '/images/m7.jpeg' },
  { name: '$30', image: '/images/m8.jpeg' },
  { name: '$270', image: '/images/m9.jpeg' },
  { name: '$30', image: '/images/m10.jpeg' },
  { name: '$20', image: '/images/m11.jpeg' },
  { name: '$10', image: '/images/m12.jpeg' },
];

// Sidebar Icons Data
const SidebarIcons = [
  { src: <FontAwesomeIcon icon={faBell} className="classified-icon" />, alt: 'Notification', label: 'Notification' },
  { src: <FontAwesomeIcon icon={faInbox} className="classified-icon" />, alt: 'Inbox', label: 'Inbox' },
  { src: <FontAwesomeIcon icon={faShoppingCart} className="classified-icon" />, alt: 'Buying', label: 'Buying' },
  { src: <FontAwesomeIcon icon={faShoppingCart} className="classified-icon" />, alt: 'Selling', label: 'Selling', arrow: true },
];

// Market Icons Data with Unique Images
const MarketIcons = [
  { src: <FontAwesomeIcon icon={faCar} className="classified-icon" />, alt: 'Vehicle', label: 'Vehicle' },
  { src: <FontAwesomeIcon icon={faHome} className="classified-icon" />, alt: 'Property for Rent', label: 'Property for Rent' },
  { src: <FontAwesomeIcon icon={faTag} className="classified-icon" />  , alt: 'Classifieds', label: 'Classifieds' },
  { src: <FontAwesomeIcon icon={faTshirt} className="classified-icon" />, alt: 'Clothing', label: 'Clothing' },
  { src: <FontAwesomeIcon icon={faMobileAlt} className="classified-icon" />  , alt: 'Electronics', label: 'Electronics' },
  { src: <FontAwesomeIcon icon={faVideo} className="classified-icon" />  , alt: 'Entertainment', label: 'Entertainment' },
  { src: <FontAwesomeIcon icon={faHeart} className="classified-icon" />,  alt: 'Family', label: 'Family' },
  { src: <FontAwesomeIcon icon={faTag} className="classified-icon" />, alt: 'Free Stuff', label: 'Free Stuff' },
  { src: <FontAwesomeIcon icon={faSeedling} className="classified-icon" /> , alt: 'Garden and Outdoors', label: 'Garden and Outdoors' },
  { src:  <FontAwesomeIcon icon={faPen} className="classified-icon" />, alt: 'Hobbies', label: 'Hobbies' },
  { src:  <FontAwesomeIcon icon={faHome} className="classified-icon" />, alt: 'Home Goods', label: 'Home Goods' },
  { src: <FontAwesomeIcon icon={faWrench} className="classified-icon" />, alt: 'Home Improvement Supplies', label: 'Home Improvement Supplies' },
  { src:  <FontAwesomeIcon icon={faGuitar} className="classified-icon" />, alt: 'Musical Instruments', label: 'Musical Instruments' },
  { src: <FontAwesomeIcon icon={faTag} className="classified-icon" />, alt: 'Office Supplies', label: 'Office Supplies' },
  { src: <FontAwesomeIcon icon={faCat} className="classified-icon" />, alt: 'Pet Supplies', label: 'Pet Supplies' },
  { src: <FontAwesomeIcon icon={faHome} className="classified-icon" />, alt: 'Property for Sale', label: 'Property for Sale' },
  { src: <FontAwesomeIcon icon={faRunning} className="classified-icon" />, alt: 'Sporting Goods', label: 'Sporting Goods' },
  { src: <FontAwesomeIcon icon={faGamepad} className="classified-icon" />, alt: 'Toys and Games', label: 'Toys and Games' },
  { src: <FontAwesomeIcon icon={faUserGroup} className="classified-icon" />, alt: 'Buy and Sell Groups', label: 'Buy and Sell Groups' },
];

const MarketPage = () => {
  return (
    <div className="market-page">
      {/* Sidebar */}
      <div className="market-sidebar">
        <div className="frnd">
          <h3>Friends</h3>
          <div className='circle-bg'> 
            <img src="/images/settings.png" alt="Settings" />
          </div>
        </div>
        <div className="market-search-bar">
          <input type="text" placeholder="Search Marketplace" className="search-bar" />
          <div className="my-placeholder">
            <img src="/images/search.png" alt="Search Icon" className="search-icon" />
          </div>
        </div>
        <div className="market-marketplace">
          <FontAwesomeIcon icon={faStore} className="market-marketplace-icon" />
          <span>Browse All</span>
        </div>
        <div className="market-icon-group">
          {SidebarIcons.map((icon, index) => (
            <div className="market-icon-item" key={index}>
              {icon.src}
              <span>{icon.label}</span>
            </div>
          ))}
        </div>
        <div className='button'>
          <button className="market-create-listing">
            <img style={{height:'25px',width:'25px'}} src="/images/plus.png" alt="Plus" className="market-plus-icon" /> Create New Listing
          </button>
        </div>
        <hr />
        <div className="market-location">
          <span>Location</span>
          <ul>
            <li style={{color:'#1877f2', listStyle:'none'}}>Manchester</li>
            <li style={{color:'#1877f2',listStyle:'none'}}>United Kingdom</li>
            <li style={{color:'#1877f2',listStyle:'none'}}>Spain</li>
          </ul>
        </div>
        <hr />
        <div className="market-icons-list">
          {MarketIcons.map((item, index) => (
            <div className="market-icon-item" key={index}>
              {typeof item.src === 'string' ? (
                <img src={item.src} alt={item.alt} className="market-icon-1" />
              ) : (
                item.src // For FontAwesomeIcon
              )}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="market-cards-section">
        <div className="see-all">
          <h2>Friend Requests</h2>
          <h5>See all</h5>
        </div>
        <div className="card-container">
          {MarketData.map((friend, index) => (
            <div className="card" key={index}>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${friend.image})` }}
              ></div>
              <div className="card-content-market">
                <h4>{friend.name}</h4>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
