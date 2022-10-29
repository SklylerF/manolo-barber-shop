import "./ourteam.css";
import OwnerImg from "../../assets/images/owner-profile.jpg";

export default function Owner() {
  return (
    <div>
      <div className='about-owner-container'>
        <div className='image-about-owner-container'>
          <img src={OwnerImg}></img>
        </div>
        <section className='owner-about'>
          <h2>CEO: Edgar Alexis Perez BusTamante</h2>
          <p className='owner-about-content'>
            For as long as I can remember, the goal of establishing business has been a dream. For now, my third business under my belt, I feel more
            confident than ever in what I do. I have a passion for leadership and with it, create a new wave of successful entrepenuers to continue
            bringing value to the marketplace.
          </p>
        </section>
      </div>
    </div>
  );
}
