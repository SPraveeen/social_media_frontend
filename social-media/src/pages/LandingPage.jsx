import React from 'react';
import './LandingPage.css';
import Header from '../components/header';

function LandingPage() {
  return (
    <div className="landing-page">
    <Header/>
      
      <section className="features">
        <div>
          <h2>Share Your Moments</h2>
          <p>Post photos, videos, and updates to your timeline.</p>
        </div>
        <div>
          <h2>Connect with Friends</h2>
          <p>Follow your friends and see what they're up to.</p>
        </div>
        <div>
          <h2>Discover New Content</h2>
          <p>Explore trending topics and discover new interests.</p>
        </div>
      </section>
     
    </div>
  );
}

export default LandingPage;
