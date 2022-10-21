import Navbar from "./navbar/Navbar";
import FirstSlide from "./first-slide/FirstSlide";
import ImageSlider from "./carousel/ImageSlider";
import { SliderData } from "./carousel/SliderData.js";
import Contacts from "./Contacts/Contact"

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
        <div className='landing-image-container'></div>
      </div>
      <div className='landing-image-container'>
        <FirstSlide />
      </div>
      <section>
        <div>
          <ImageSlider slides={SliderData} />;
        </div>
      </section>
      <section>
     <div>
        <Contacts />
     </div>
     </section>
    </div>
  );
}
