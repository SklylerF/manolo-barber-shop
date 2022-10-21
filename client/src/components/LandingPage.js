import Navbar from "./navbar/Navbar";
import FirstSlide from "./first-slide/FirstSlide";
import ImageSlider from "./carousel/ImageSlider";
import AboutUs from "./AboutUs/AboutUs";
import { SliderData } from "./carousel/SliderData.js";

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
      </div>
      <div className='landing-image-container'>
        <FirstSlide />
      </div>
      <section>
        <AboutUs />
      </section>
      <section>
        <div>
          <ImageSlider slides={SliderData} />;
        </div>
      </section>
    </div>
  );
}
