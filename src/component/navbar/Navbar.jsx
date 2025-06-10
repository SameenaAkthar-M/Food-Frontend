import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets.js';
import { PiBasketFill } from "react-icons/pi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setMenu("Home");
    } else {
      setMenu("");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const menuSection = document.getElementById("explore-menu");
      const contactSection = document.getElementById("contact-us");

      if (contactSection && scrollY >= contactSection.offsetTop - 100) {
        setMenu("Contact Us");
      } else if (menuSection && scrollY >= menuSection.offsetTop - 100) {
        setMenu("Menu");
      } else {
        setMenu("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 backdrop-blur-md pt-[10px] pb-[10px]">
      <Link to='/'>
        <img src={assets.logo} className='w-[140px]' />
      </Link>

      <ul className='hidden lg:flex list-none gap-[24px] text-lg'>
        <Link to='/'
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? 'border-b-2 pb-1 border-[#DC143C] text-[#DC143C]' : ''}>
          Home
        </Link>

        <a href='/#explore-menu'
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? 'border-b-2 pb-1 border-[#DC143C] text-[#DC143C]' : ''}>
          Menu
        </a>

        <a href='/#contact-us'
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? 'border-b-2 pb-1 border-[#DC143C] text-[#DC143C]' : ''}>
          Contact Us
        </a>
      </ul>

      <div className='flex items-center gap-6'>
        <div className='relative'>
          <Link to='/cart'>
            <PiBasketFill className="w-8 h-8" />
            <div className={`absolute w-2 h-2 bg-[#DC143C] rounded-full top-[-5px] right-[-5px] ${getTotalCartAmount() === 0 ? "hidden" : ""}`}></div>
          </Link>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)} className="text-sm border-2 border-[#DC143C] px-4 py-2 rounded-3xl hover:bg-[#DC143C] hover:text-white transition">
            Sign in
          </button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} className='cursor-pointer' />
            <ul className='nav-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
