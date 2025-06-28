import React, { useState } from "react";

function BlogForm({ initialData, onSubmit }) {
  const defaultData = {
    title: "",
    author: "",
    category: "",
    coverImage: "",
    content: "",
  };

  const [formData, setFormData] = useState({ ...defaultData, ...initialData });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="author">Author</label>
      <input
        id="author"
        name="author"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <label htmlFor="coverImage">Cover Image URL</label>
      <input
        id="coverImage"
        name="coverImage"
        value={formData.coverImage}
        onChange={handleChange}
      />

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        value={formData.content}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default BlogForm;
