import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import ViewPost from './pages/ViewPost';
import EditPost from './pages/EditPost';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:id" element={<ViewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;