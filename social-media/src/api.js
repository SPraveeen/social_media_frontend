const API_BASE_URL = 'http://localhost:8000'; // Replace with your actual API base URL

async function createUser(userData) {
  const response = await fetch(`${API_BASE_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
}

async function loginUser(username, password) {
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  });
  return response.json();
}

async function getPosts(limit = 10, skip = 0, search = '') {
  const response = await fetch(`${API_BASE_URL}/posts/?limit=${limit}&skip=${skip}&search=${search}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.json();
}

async function createPost(postData) {
  const response = await fetch(`${API_BASE_URL}/posts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
    body: JSON.stringify(postData),
  });
  return response.json();
}

async function updatePost(id, postData) {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
    body: JSON.stringify(postData),
  });
  return response.json();
}

async function deletePost(id) {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response;
}

async function votePost(postId, dir) {
  const response = await fetch(`${API_BASE_URL}/vote/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
    body: JSON.stringify({ post_id: postId, dir: dir }),
  });
  return response.json();
}

export { createUser, loginUser, getPosts, createPost, updatePost, deletePost, votePost };
