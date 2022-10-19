import { useState, useRef } from "react";
import ManoloLogo from "../.././assets/images/manolo-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

//link for barbershops appointment route
const bookAppointmentLink = "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside";

//only styles fot the header
const stylesHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "auto",
  width: "100vw",
  padding: "0 2rem",
  backgroundColor: "#303841",
  color: "black",
  top: 0,
  position: "sticky",
};

export default function Navbar() {
  //used to toggle on and off of the navigation bar depending on the size of the screen
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <div className='navbar-container'>
      <header style={stylesHeader}>
        <img className='manolo-logo' src={ManoloLogo} alt='Manolo Logo' />
        <nav ref={navRef}>
          <a href='#about-us'>About Us</a>
          <a href={bookAppointmentLink} target='_blank'>
            Book an Appointment
          </a>
          <a href=''>Shop</a>
          <a href='/auth'>Login</a>
          <button className='nav-btn nav-close-btn' onClick={showNav}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNav}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}
