import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import blogs from '../data/blogData';

const Blog = () => {
  return (
    <div className="page-container">
      <h1>Blog</h1>

      <div className="blog-list">
        {blogs.map((post) => (
          <div key={post.slug} className="blog-item">
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.description}</p>
          </div>
        ))}

        <div className="blog-item placeholder">
          <h2>More blogs coming soon...</h2>
          <p>Stay tuned!</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
