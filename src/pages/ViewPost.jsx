import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPosts, savePosts } from '../utils/storage';
import './ViewPost.css';

function ViewPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const blogs = getPosts();
    const blog = blogs.find(b => b.id === parseInt(id));
  
    const handleDelete = () => {
      if (window.confirm('Delete this post?')) {
        savePosts(blogs.filter(b => b.id !== blog.id));
        navigate('/');
      }
    };
  
    if (!blog) return <p>Post not found.</p>;
  
    return (
      <div className="view-post-container">
        <h2>{blog.title}</h2>
        <img src={blog.coverImage} alt="cover" />
        <p><b>Author:</b> {blog.author}</p>
        <p><b>Category:</b> {blog.category}</p>
        <p>{blog.content}</p>
        <div className="view-post-actions">
          <Link to={`/edit/${blog.id}`}>Edit</Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
  
export default ViewPost;
