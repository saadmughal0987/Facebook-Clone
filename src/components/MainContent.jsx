import React from 'react';
import '../styles/MainContent.css';

const MainContent = () => {
    // Array of post data
    const posts = [
        {
            profilePic: "/images/pcb.png",
            title: "Pakistan Cricket Team",
            time: "1h · 🌍",
            content: "Chat with Harry Brook on touring Pakistan and playing against the Test side",
            hashtags: "#PAKvENG | #TestAtHome",
            mainImage: "/images/ashes.jpeg",
            likes: "5.3K",
            comments: "54 comments",
            shares: "19 shares",
        },
        {
            profilePic: "/images/ufc logo.png",
            title: "Ultimate Fighting Championship",
            time: "1h · 🌍",
            content: "Chat with Harry Brook on touring Pakistan and playing against the Test side",
            hashtags: "#UFC | #MatchAtRing",
            mainImage: "/images/download.jpeg",
            likes: "5.3K",
            comments: "54 comments",
            shares: "19 shares",
        },
        {
            profilePic: "/images/mr beast logo.png",
            title: "Mr Beast",
            time: "1h · 🌍",
            content: "Chat with Harry Brook on touring Pakistan and playing against the Test side",
            hashtags: "#MrBeast | #GoToAdveture",
            mainImage: "/images/beast.jpeg",
            likes: "5.3K",
            comments: "54 comments",
            shares: "19 shares",
        }
    ];

    return (
        <>
            <div className="grid-container">
                <div className="grid-item grid-1">
                    <div className='border'>
                        <div className='add'></div>
                        <h5>create a story</h5>
                    </div>
                </div>
                <div className="grid-item grid-2">
                    <div className='dp'></div>
                </div>
                <div className="grid-item grid-3">
                    <div className='dp3'></div>
                </div>
                <div className="grid-item grid-4">
                    <div className='dp4'></div>
                </div>
            </div>

            <div className="activity-container">
                <div className="top1">
                    <img src="/images/saad.jpg" alt="Profile" className="Profile" />
                    <div className="top2">
                        <input type="text" placeholder="What's on your mind, Muhammad Saad?" className="search-bar" />
                    </div>
                </div>
                <hr className="divider" />
                <div className="image-sequence">
                    <img src="/images/lives.png" alt="Live video" className="sequence-image" />
                    <span style={{marginLeft: '-25px', marginTop: '2px'}}>Live video</span>
                    <img src="/images/photo.png" alt="photo/video" className="sequence-image" />
                    <span style={{marginLeft: '-25px', marginTop: '2px'}}>photo/video</span>
                    <img src="/images/happy.png" alt="Feeling/activity" className="sequence-image" />
                    <span style={{marginLeft: '-25px', marginTop: '2px'}}>Feeling/activity</span>
                </div>
            </div>

            {posts.map((post, index) => (
                <div className='post-container' key={index}>
                    <div className='post'>
                        <img src={post.profilePic} alt={post.title} className="profile-pic" />
                        <div className='post-details'>
                            <div className="post-title">{post.title}</div>
                            <span className="post-time">{post.time}</span>
                            <div className="post-content">{post.content}</div>
                            <div className="hashtags">{post.hashtags}</div>
                        </div>
                    </div>
                    <div className="post-image">
                        <img src={post.mainImage} alt={post.title} className="post-main-image" />
                    </div>
                    <div className='likes'>
                        <div className='heart'>
                            <img src="/images/likes.png" alt="Likes" className='like' />
                            <img src="/images/heart.png" alt="Heart" className='hearts' />
                            <span>{post.likes}</span>
                        </div>
                        <div className='comments'>
                            <span>{post.comments}</span>
                            <span>{post.shares}</span>
                        </div>
                    </div>
                    <hr />
                    <div className='social-section'>
                        <div className="alt">
                            <img src="/images/like1.png" alt="Like" />
                            <span>Like</span>
                        </div>
                        <div className="alt">
                            <img src="/images/comment.png" alt="Comment" />
                            <span>Comment</span>
                        </div>
                        <div className="alt">
                            <img src="/images/social.png" alt="Send" />
                            <span>Send</span>
                        </div>
                        <div className="alt">
                            <img src="/images/share.png" alt="Share" />
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MainContent;
