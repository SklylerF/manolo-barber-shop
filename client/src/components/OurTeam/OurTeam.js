import "./ourteam.css";
import TemplateImage from "../../assets/images/manolo-background.jpg";

const vitoriaBook = "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside/staffer/694456#ba_s=bd_1";
const adanBook = "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside/staffer/694457#ba_s=bd_1";
const eduardoBook = "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside/staffer/694461#ba_s=bd_1";
const edwardBook = "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside/staffer/695383#ba_s=bd_1";
const leticiaBook = "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside/staffer/694455#ba_s=bd_1";

export default function OurTeam() {
  return (
    <div>
      <div className='our-team-container'>
        <h2>OUR TEAM</h2>
        <div className='team-flex-container'>
          <div className='team'>
            <p>VICTORIA GONZALEZ (BARBER)</p>
            <img src={TemplateImage} alt='Image of Victoria Gonzalez, one of the barbers working at the shop'></img>
            <div className='book-with-btn-container'>
              <a className='book-with' href={vitoriaBook}>
                BOOK
              </a>
            </div>
          </div>
          <div className='team'>
            <p>ADAN ZARATE (BARBER)</p>
            <img src={TemplateImage} alt='Image of Adan Zarate, one of the barbers working at the shop'></img>
            <div className='book-with-btn-container'>
              <a className='book-with' href={adanBook}>
                BOOK
              </a>
            </div>
          </div>

          <div className='e team'>
            <p>EDUARDO GALLEGOS (BARBER)</p>
            <img src={TemplateImage} alt='Image of Eduardo Gallegos, one of the barbers working at the shop'></img>
            <div className='book-with-btn-container'>
              <a className='book-with' href={eduardoBook}>
                BOOK
              </a>
            </div>
          </div>

          <div className=' team'>
            <p>EDWARD VALDEZ (BARBER)</p>
            <img src={TemplateImage} alt='Image of Edward Valdez, one of the barbers working at the shop'></img>
            <div className='book-with-btn-container'>
              <a className='book-with' href={edwardBook}>
                BOOK
              </a>
            </div>
          </div>

          <div className=' team'>
            <p>LETICIA DELGADO (BARBER)</p>
            <img src={TemplateImage} alt='Image of Leticia Delgado, one of the barbers working at the shop'></img>
            <div className='book-with-btn-container'>
              <a className='book-with' href={leticiaBook}>
                BOOK
              </a>
            </div>
          </div>

          <div className='team'>
            <p>ALEXIS BUSTAMANTE (OWNER)</p>
            <img src={TemplateImage} alt='Image of Alexis Bustamante, the owner of the shop'></img>
            <div className='book-with-btn-container'>
              <a className='book-with'>CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
