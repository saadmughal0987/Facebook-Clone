import React from 'react';
import '../styles/RightSidebar.css'; // External CSS

const contacts = [
    { id: 1, name: 'Shane', img: '/images/1.jpeg' },
    { id: 2, name: 'Paul', img: '/images/2.jpeg' },
    { id: 3, name: 'John', img: '/images/3.jpeg' },
    { id: 4, name: 'Emily', img: '/images/4.jpeg' },
    { id: 5, name: 'Brock', img: '/images/5.jpeg' },
    { id: 6, name: 'Fina', img: '/images/6.jpeg' },
    { id: 7, name: 'Eddie', img: '/images/7.jpeg' },
    { id: 8, name: 'Angelina', img: '/images/8.jpeg' },
    { id: 9, name: 'Franklin', img: '/images/9.jpeg' },
    { id: 10, name: 'Michael', img: '/images/10.jpeg' },
];

const RightSidebar = () => {
    return (
        <div className="right-sidebar">
            {/* Sponsored Section */}
            <div className="sponsored">
                <h3>Sponsored</h3>
                <div className="ad">
                    <img src="/images/cokacola.jpeg" alt="Ad 1" />
                    <p>Download and try it free for one year</p>
                </div>
            </div>
            <hr />

            {/* Birthdays Section */}
            <div className="birthdays">
                <h4>Birthdays</h4>
                <div className="birthday-item">
                    <img src="/images/gift.png" alt="Birthday Icon" />
                    <p>Hamza Ali's birthday is today.</p>
                </div>
            </div>
            <hr />

            {/* Contacts Section */}
            <div className="contacts">
                <div className='titles'>
                    <div><h4>Contacts</h4></div>
                    <div style={{ marginTop: '10px' }}>
                        <a href="">
                            <img style={{ marginRight: '10px' }} src="./images/search1.png" alt="search icon" />
                            <img src="./images/option.png" alt="" />
                        </a>
                    </div>
                </div>

                {contacts.map(contact => (
                    <div key={contact.id} className="contact-item">
                        <img src={contact.img} alt={`Contact ${contact.name}`} />
                        <span>{contact.name}</span>
                    </div>
                ))}
            </div>
            <hr />

            {/* Group Chats Section */}
            <div className="group-chats">
                <h4>Group Chats</h4>
                <div className="contact-item">
                    <img style={{ borderRadius: '50%', backgroundColor: 'rgb(236, 236, 236)' }} src="/images/Plus.png" alt="Group 1" />
                    <span style={{ color: 'black', fontSize: 'medium' }}>Create Group chats</span>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
