import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../data/blogData';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="page-container"><h2>Blog post not found.</h2></div>;
  }

  return (
    <div className="page-container">
      <h1>{blog.title}</h1>
      <p><em>{blog.date}</em></p>
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetail;
