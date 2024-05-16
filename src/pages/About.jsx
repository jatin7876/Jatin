import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import Footer from '../components/Footer/Footer.jsx'
const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p className="font-sans text-xl">
          Welcome to ROUTE WISE, where we embark on journeys to uncover the wonders of the world and share our experiences with you. <br />
          We are students of CHITKARA UNIVERSITY,HIMACHAL PRADESH. We are  created a project name ROUTE WISE our team members are Jatin Thakur,Aryan Dhatwwalia ,Ankit  Thakur,Ankesh Kumar. <br />

          Through our carefully crafted narratives, stunning photography, and insightful guides, we aim to inspire and empower fellow travelers to embrace adventure and see the world in new ways. Our mission is simple: to ignite the spark of wanderlust within each of our readers and help them create unforgettable memories of their <br />
          But ROUTE WISE  is more than just a travel blog—it's a community of like-minded individuals who share a deep appreciation for exploration and discovery. Whether you're a seasoned globetrotter or a first-time traveler, we invite you to join us on this extraordinary journey as we explore the world together. <br />

So come along with us as we wander off the beaten path, chase sunsets, and dive into the unknown. Adventure awaits, and the world is yours to explore.

Let's write our story, one destination at a time.


    
          </p>
          <br />
          <p>
            
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
      <Footer />
    </>
  );
};

export default About;
