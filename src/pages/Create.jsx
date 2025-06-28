import React from "react";
import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import { getPosts, savePosts } from "../utils/storage";

function Create() {
  const navigate = useNavigate();

  const handleCreate = (data) => {
    const blogs = getPosts();
    data.id = Date.now();
    savePosts([...blogs, data]);
    navigate("/");
  };

  return (
    <BlogForm
      initialData={{
        title: "",
        author: "",
        category: "",
        coverImage: "",
        content: "",
      }}
      onSubmit={handleCreate}
    />
  );
}

export default Create;
