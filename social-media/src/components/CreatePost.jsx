import React, { useState } from 'react';
import { createPost } from '../api';

function CreatePost({ onPostCreated, fetchPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, content });
      setTitle('');
      setContent('');
      fetchPosts();
    } catch (err) {
      setError('Failed to create post');
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
