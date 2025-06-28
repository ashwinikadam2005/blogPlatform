import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p>{blog.content.slice(0, 100)}...</p>
      <p>
        <b>Author:</b> {blog.author}
      </p>
      <p>
        <b>Category:</b> {blog.category}
      </p>
      <Link to={`/post/${blog.id}`}>Read More</Link>
    </div>
  );
}

export default BlogCard;
