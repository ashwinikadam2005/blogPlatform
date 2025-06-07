import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { getPosts } from '../utils/storage';
import './Home.css';  // Ensure this import exists

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(getPosts());
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      <div className="blog-list">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Home;
