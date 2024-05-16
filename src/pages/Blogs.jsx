import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Footer from '../components/Footer/Footer.jsx'
const Blogs = () => {
  return (
    <div className="min-h-screen pt-14 bg-gray-100">
      <BlogsComp />
      <Footer/>
    </div>
  );
};

export default Blogs;
