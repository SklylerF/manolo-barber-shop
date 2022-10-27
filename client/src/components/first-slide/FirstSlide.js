import ManoloBackground from "../../assets/images/manolo-logo.png";
import "./firstslide.css";

const bookAppointmentLink = "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside";

export default function FirstSlide() {
  return (
    <div>
      <div className='first-slide-container'>
        <div>
          <div className='content-container'>
            <img className='transparent-logo' src={ManoloBackground}></img>
            <a href={bookAppointmentLink} className='book-button'>
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
