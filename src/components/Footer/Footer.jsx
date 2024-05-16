import React from "react";
import { SiGmail } from "react-icons/si";
import FooterLogo from "../../assets/logo.png";
import {
  FaGithub,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} alt="" className="mb-[-100px] mt-[-100px] w-[300px]" />
              {/* TravelloGo */}
            </h1>
            <p className="text-sm">
              RoutWise helps you to  travel the  best places.   
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Chitkara University,Himachal Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* social handles */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="">
                  <FaInstagram className="text-3xl" />
                  Instagram
                </a>
                <br />
                <a href="https://github.com/jatin7876">
                  <FaGithub className="text-3xl" />
                  GitHub
                </a>
                <br />
                <a href="mailto:thakurjatin8882@gmail.com">
                  <SiGmail className="text-3xl" />
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="py-8 px-4 ml-auto text-2xl">


            <h1 className="text-xl font-bold text-justify sm:text-left mb-3 ">
              <p className="text-2xl">Important Links</p>
            </h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link, index) => (
                <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700 dark:text-gray-200">
                  <Link
                    to={link.link}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
        @copyright 2024 All rights reserved || Made by Team RouteWise
      </div>
    </div>
  );
};

export default Footer;
