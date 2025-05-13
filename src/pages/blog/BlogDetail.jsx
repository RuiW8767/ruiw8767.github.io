import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../../data/blogData';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const backButton = document.querySelector('.back-button');
      if (backButton) {
        const rect = backButton.getBoundingClientRect();
        setShowTopButton(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!blog) return <div className="page-container"><h2>Blog post not found.</h2></div>;

  return (
    <div className="page-container">
      <Link to="/blog" className="back-button">
        ← Back to Blog
      </Link>

      <h1>{blog.title}</h1>
      <p><em>{blog.date}</em></p>

      <div className="blog-content">
        {blog.content}
      </div>

      {showTopButton && (
        <button className="scroll-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default BlogDetail;
