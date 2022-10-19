import ManoloBackground from "../../assets/images/manolo-logo.png";
import "./firstslide.css";

const bookAppointmentLink = "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside";

export default function FirstSlide() {
  return (
    <div>
      {/* Change this to change the image of the of the first slide */}
      <div className='first-slide-container'>
        <div>
          <img className='transparent-logo' src={ManoloBackground}></img>
          <div className='button-container'>
            {/* Change this to a link tag */}
            <a href={bookAppointmentLink} className='book-button'>
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
