import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import { getPosts } from './api';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
      fetchPosts();
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setIsLoggedIn(true);
    fetchPosts();
  };

  const handleSignup = () => {
   console.log('User signed up');
   alert('User signed up successfully! Please log in.');
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Social Media App</h1>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <CreatePost fetchPosts={fetchPosts} />
          <PostList posts={posts}/>
        </div>
      ) : (
        <div>
                <LandingPage />

          <LoginPage onLogin={handleLogin} />
          <SignupPage onSignup={handleSignup} />
          
      <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
