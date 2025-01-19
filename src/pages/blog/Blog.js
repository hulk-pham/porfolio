import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import BlogCard from "../../components/blogCard/BlogCard";
import { Fade } from "react-reveal";
import { blogData } from "../../portfolio";
import "./Blog.css";

function Blog(props) {
  const theme = props.theme;

  return (
    <div className="blog-main">
      <Header theme={theme} />
      <div className="main">
        <div className="blog-header">
          <Fade bottom duration={1000} distance="20px">
            <h1 className="blog-header-text" style={{ color: theme.text }}>
              My Blog Posts
            </h1>
            <p className="blog-subtitle" style={{ color: theme.secondaryText }}>
              Sharing thoughts and experiences about software development
            </p>
          </Fade>
        </div>
        <div className="blog-cards-div">
          {blogData.data.map((blog) => (
            <BlogCard key={blog.id} blog={blog} theme={theme} />
          ))}
        </div>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Blog;
