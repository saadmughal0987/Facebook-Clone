import React from 'react';
import SignupForm from './pages/SignupForm'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css'; 
import LoginForm from './pages/LoginForm'; 
import FbWebPage from './pages/FbWebPage'; 
import FriendsPages from './pages/FriendsPages'; 
import ProfilePage from './pages/ProfilePAge'; 
import MarketplacePage from './pages/MarketplacePage'; 


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/create-new-acc" element={<SignupForm />} />
          <Route path="/fb-page" element={<FbWebPage />} /> 
          <Route path="/frnd-page" element={<FriendsPages />} /> 
          <Route path="/profile-page" element={<ProfilePage />} /> 
          <Route path="/marketplace-page" element={<MarketplacePage />} /> 
        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
