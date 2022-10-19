import { useState, useRef } from "react";
import ManoloLogo from "../.././assets/images/manolo-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

//link for barbershops appointment route
const bookAppointmentLink = "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside";

//only styles fot the header

export default function Navbar() {
  //used to toggle on and off of the navigation bar depending on the size of the screen
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <div className='navbar-container'>
      <header className='header-container'>
        <img className='manolo-logo' src={ManoloLogo} alt='Manolo Logo' />
        <h2>MANOLO BARBERSHOP</h2>
        <nav ref={navRef}>
          <img className='manolo-logo-nav' src={ManoloLogo} alt='Manolo Logo' />
          <div className='nav-text'>
            <a href='#about-us'>ABOUT US</a>
            {/* change this instead of using an anchor tag */}
            <a href={bookAppointmentLink} target='_blank'>
              BOOK APPOINTMENT
            </a>
            <a href=''>SHOP</a>
            <a href=''>LOGIN</a>
            <button className='nav-btn nav-close-btn' onClick={showNav}>
              <FaTimes />
            </button>
          </div>
        </nav>
        <button className='nav-btn' onClick={showNav}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}
