import React from "react";
import { getPosts } from "../utils/storage";
import "./Categories.css";

function Categories() {
  const blogs = getPosts() || [];
  const grouped = blogs.reduce((acc, blog) => {
    acc[blog.category] = acc[blog.category] || [];
    acc[blog.category].push(blog);
    return acc;
  }, {});

  return (
    <div className="categories-container">
      <h2 className="categories-title">Categories</h2>
      {Object.keys(grouped).map((cat) => (
        <div key={cat} className="category-group">
          <h3 className="category-name">{cat}</h3>
          <ul className="blog-list">
            {grouped[cat].map((blog) => (
              <li key={blog.id} className="blog-item">
                {blog.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Categories;
