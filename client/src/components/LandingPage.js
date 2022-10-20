import manoloBackground from "../assets/images/manolo-background.jpg";
import Navbar from "./navbar/Navbar";

const styles = {
  height: "100vh",
  width: "100vh",
};

const imageStyle = {
  position: "absolute",
  width: "100%",
  height: "93%",
};

export default function LandingPage() {
  return (
    <div>
      <div style={styles}>
        <Navbar />
        <div className='landing-image-container'>{/* <img style={imageStyle} src={manoloBackground}></img> */}</div>
    </div>
    </div>
  );
}
