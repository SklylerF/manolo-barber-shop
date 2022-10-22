import "./footer.css";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

// fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationPin, faEnvelope, faCalendarCheck, faBellConcierge, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyAx6JeOTxyWkbx-2KGZqflXLvu7V01VVWA" });

  function Map() {
    const center = useMemo(() => ({ lat: 33.9753928, lng: -117.3601247 }), []);
    if (!isLoaded) return <div>Loading...</div>;
    return (
      <GoogleMap zoom={15} center={center} mapContainerClassName='map'>
        <MarkerF position={center} />
      </GoogleMap>
    );
  }

  return (
    <div>
      <div className='footer-container'>
        <div className='footer-left'>
          <Map />
        </div>
        <div className='footer-right'>
          <div className='footer-right-left'>
            <div>
              <a>GIVE US A CALL</a>
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <a href='tel:9514058881' className='phone'>
                (951) 405-8881
              </a>
            </div>
            <div>
              <a>FIND US</a>
              <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
              <a
                href='https://www.google.com/maps/place/Manolo+Barbershop/data=!3m1!4b1!4m2!3m1!1s0x80dcaff899c235d3:0x89082fa29abbfde6'
                className='find-us'
                target='__blank'
              >
                2308 University Avenue #102 Riverside, CA 92507 USA
              </a>
            </div>
            <div>
              <a target='__blank' className='book-appointment' href='https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside'>
                BOOK AN APPOINTMENT
              </a>
              <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon>
            </div>
            <div>
              <a className='services'>SERVICES</a>
              <FontAwesomeIcon icon={faBellConcierge}></FontAwesomeIcon>
            </div>
            <div>
              <a
                className='review'
                href='https://www.google.com/search?hl=en-US&gl=us&q=Manolo+Barbershop,+2308+University+Ave+%23102,+Riverside,+CA+92507&ludocid=9874194558437031398&lsig=AB86z5Vcg8MLa0hNR-6fAPHXUgc6#lrd=0x80dcaff899c235d3:0x89082fa29abbfde6,3'
                target='__blank'
              >
                REVIEW US!
              </a>
              <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
            </div>
          </div>
          <div className='footer-right-right'>
            <p>STORE HOURS</p>
            <a>Monday: 9:00 AM - 7:00 PM</a>
            <a>Tuesday: CLOSED</a>
            <a>Wednesday: 9:00 AM - 7:00 PM</a>
            <a>Thursday: 9:00 AM - 7:00 PM</a>
            <a>Friday: 9:00 AM - 7:00 PM</a>
            <a>Saturday: 9:00 AM - 7:00 PM</a>
            <a>Sunday: 9:00 AM - 4:00 PM</a>
          </div>
        </div>
      </div>
    </div>
  );
}
