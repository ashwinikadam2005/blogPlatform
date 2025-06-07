import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import { getPosts, savePosts } from '../utils/storage';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogs = getPosts() || [];
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) return <p>Post not found.</p>;

  const handleUpdate = (data) => {
    const updatedBlogs = blogs.map(b => (b.id === blog.id ? { ...data, id: blog.id } : b));
    savePosts(updatedBlogs);
    navigate(`/post/${blog.id}`);
  };

  return <BlogForm initialData={blog} onSubmit={handleUpdate} />;
}

export default EditPost;

