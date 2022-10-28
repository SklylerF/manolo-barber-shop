import Navbar from "./navbar/Navbar";
import FirstSlide from "./first-slide/FirstSlide";
import ImageSlider from "./carousel/ImageSlider";
import AboutUs from "./AboutUs/AboutUs";
import Owner from "./OurTeam/OurTeam";
import Footer from "./Footer/Footer";
import "../App.css";
import { SliderData } from "./carousel/SliderData.js";

export default function LandingPage() {
  return (
    <div className='page'>
      <div className='first'>
        <Navbar />
        <div className='first-content'>
          <FirstSlide />
        </div>
      </div>
      <section>
        <AboutUs />
      </section>
      <section>
        <Owner />
      </section>
      <ImageSlider slides={SliderData} />;
      <div>
        <Footer />
      </div>
    </div>
  );
}
