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
            I have a passion for leadership and with it, create a new wave of successful entrepenuers to continue bringing value to the marketplace.
          </p>
        </section>
      </div>
    </div>
  );
}
