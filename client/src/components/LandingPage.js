import manoloBackground from "../assets/images/manolo-background.jpg";
import Navbar from "./navbar/Navbar";
import FirstSlide from "./first-slide/FirstSlide";

const styles = {
  backgroundColor: "black",
  height: "100vh",
  width: "100vw",
};

export default function LandingPage() {
  return (
    <div>
      <div style={styles}>
        <Navbar />
        <div className='landing-image-container'>{/* <img style={imageStyle} src={manoloBackground}></img> */}</div>
      </div>

      <div className='landing-image-container'>
        {/* <img style={imageStyle} src={manoloBackground}></img> */}
        <FirstSlide />
      </div>
    </div>
  );
}
