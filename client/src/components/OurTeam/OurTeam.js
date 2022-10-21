import "./ourteam.css";
import TemplateImage from "../../assets/images/manolo-background.jpg";

export default function OurTeam() {
  return (
    <div>
      <div className='our-team-container'>
        <h2>OUR TEAM</h2>
        <div className='team-flex-container'>
          <div className='team'>
            <p>VICTORIA GONZALEZ (BARBER)</p>
            <img src={TemplateImage} alt='Image of Victoria Gonzalez, one of the barbers working at the shop'></img>
          </div>
          <div className='team'>
            <p>ADAN ZARATE (BARBER)</p>
            <img src={TemplateImage} alt='Image of Adan Zarate, one of the barbers working at the shop'></img>
          </div>

          <div className='e team'>
            <p>EDUARDO GALLEGOS (BARBER)</p>
            <img src={TemplateImage} alt='Image of Eduardo Gallegos, one of the barbers working at the shop'></img>
          </div>

          <div className=' team'>
            <p>EDWARD VALDEZ (BARBER)</p>
            <img src={TemplateImage} alt='Image of Edward Valdez, one of the barbers working at the shop'></img>
          </div>

          <div className=' team'>
            <p>LETICIA DELGADO (BARBER)</p>
            <img src={TemplateImage} alt='Image of Leticia Delgado, one of the barbers working at the shop'></img>
          </div>

          <div className='team'>
            <p>ALEXIS BUSTAMANTE (OWNER)</p>
            <img src={TemplateImage} alt='Image of Alexis Bustamante, the owner of the shop'></img>
          </div>
        </div>
      </div>
    </div>
  );
}
