import { useRef } from "react";
import ManoloLogo from "../.././assets/images/manolo-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
import Auth from "../../utils/Auth";

//link for barbershops appointment route
const bookAppointmentLink = "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside";

//only styles fot the header

export default function Navbar() {
  const logout = () => {
    Auth.logout();
  };
  //used to toggle on and off of the navigation bar depending on the size of the screen
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <div className='navbar-container'>
      <header className='header-container'>
        <Link to='/'>
          <img className='manolo-logo' src={ManoloLogo} alt='Manolo Logo' />
          <h2>MANOLO BARBERSHOP</h2>
        </Link>
        <nav ref={navRef}>
          <img className='manolo-logo-nav' src={ManoloLogo} alt='Manolo Logo' />
          <div className='nav-text'>
            {/* change this instead of using an anchor tag */}
            <a href={bookAppointmentLink} target='__blank'>
              BOOK APPOINTMENT
            </a>
            <Link to='/shop'>SHOP</Link>
            {Auth.loggedIn() ? (
              <>
                <Link to='/cart'>
                  <a onClick={logout}>LOGOUT</a>
                </Link>
                <a className='profile'>{Auth.getProfile().data.username.toUpperCase()}</a>
              </>
            ) : (
              <>
                <Link to='/login'>LOGIN</Link>
                <Link to='/signup'>SIGNUP</Link>
              </>
            )}
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
