import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

import { useAuth0 } from "@auth0/auth0-react";
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
  
];


const Navbar = ({ handleOrderPopup }) => 
  {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const { loginWithRedirect,logout ,isAuthenticated ,user} = useAuth0();
  
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
       
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="mb-[-100px] mt-[-100px] w-[300px]" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
            <ul class="flex items-center justify-content-space-between gap-12">

                <li className="py-4 text-xl">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4 text-xl" >
                  <NavLink to="/blogs" activeClassName="active">
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4 text-xl">
                  <NavLink to="/best-places" activeClassName="active">
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4 text-xl">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                
                
              
                
                
              </ul>
            </div>
            
            
              
            <div className="flex items-center gap-7 text-lg">
            <button className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
    <a href="https://razorpay.com/payment-button/pl_HPSQMhDiClHdYq/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button" type="submit" className="PaymentButton PaymentButton--light PaymentButton--rzpTheme PaymentButton--rzp-outline-standard">
      <div className="PaymentButton-contents">
        <span className="PaymentButton-text">Support Us</span>
        <div className="PaymentButton-securedBy"></div>
      </div>
    </a>
  </button>
              {/* Mobile Hamburger icon */}
             
              {isAuthenticated ?(
                <li className="list-none"><button className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></li>
                  ):(

    <li  className="list-none"><button className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full" onClick={() => loginWithRedirect()}>Log In</button></li>

                  )}
                   <li className="list-none">
                    {isAuthenticated  && (
      <div className="text-lg font-mono flex flex-col items-center">
      <img src={user.picture} alt={user.name} className="rounded-full h-12 w-15" />
      <p>{user.name}</p>
    </div>
    )}
                  </li>
                
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
              
            </div>
          </div>
        </div>
        
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
