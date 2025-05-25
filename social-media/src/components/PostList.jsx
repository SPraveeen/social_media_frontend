import React from 'react';
import { deletePost, votePost } from '../api';

function PostList({ posts, fetchPosts }) {
  const [error, setError] = React.useState('');

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      fetchPosts();
    } catch (error) {
      setError("Failed to delete post");
    }
  };

  const handleVote = async (postId, dir) => {
    try {
      await votePost(postId, dir);
      fetchPosts();
    } catch (err) {
      setError('Failed to vote');
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <div key={post.Post.id}>
          <h3>{post.Post.title}</h3>
          <p>{post.Post.content}</p>
          <p>Votes: {post.votes}</p>
          <button onClick={() => handleVote(post.Post.id, 1)}>Upvote</button>
          <button onClick={() => handleVote(post.Post.id, -1)}>Downvote</button>
          <button onClick={() => handleDelete(post.Post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;
