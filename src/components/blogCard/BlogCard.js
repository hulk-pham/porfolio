import React from "react";
import "./BlogCard.css";
import { Fade } from "react-reveal";

export default function BlogCard({ blog }) {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="blog-card">
        <div className="blog-card-header">
          <p className="blog-date">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <h3 className="blog-title">{blog.title}</h3>
        </div>
        <p className="blog-description">{blog.description}</p>
        <div className="blog-tags">
          {blog.tags.map((tag) => (
            <span key={tag} className="blog-tag">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-link"
        >
          Read More →
        </a>
      </div>
    </Fade>
  );
}
