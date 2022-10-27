import Navbar from "./navbar/Navbar";
import FirstSlide from "./first-slide/FirstSlide";
import ImageSlider from "./carousel/ImageSlider";
import AboutUs from "./AboutUs/AboutUs";
import OurTeam from "./OurTeam/OurTeam";
import Footer from "./Footer/Footer";
import "../App.css";
import { SliderData } from "./carousel/SliderData.js";

import TemplateImage from "../assets/images/manolo-background.jpg";

const team = [
  {
    name: "Victoria Gonzalez",
    role: "Barber",
    image: TemplateImage,
    bookUrl: "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside/staffer/694456#ba_s=bd_1",
  },
  {
    name: "Adan Zarate",
    role: "Barber",
    image: TemplateImage,
    bookUrl: "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside/staffer/694457#ba_s=bd_1",
  },
  {
    name: "Eduardo Gallegos",
    role: "Barber",
    image: TemplateImage,
    bookUrl: "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside/staffer/694461#ba_s=bd_1",
  },
  {
    name: "Edward Valdez",
    role: "Barber",
    image: TemplateImage,
    bookUrl: "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside/staffer/695383#ba_s=bd_1",
  },
  {
    name: "Leticia Delgado",
    role: "Barber",
    image: TemplateImage,
    bookUrl: "https://booksy.com/en-us/739943_manolo-barbershop_barber-shop_134628_riverside/staffer/694455#ba_s=bd_1",
  },
  {
    name: "Alexis Bustamante",
    role: "Owner",
    image: TemplateImage,
  },
];

export default function LandingPage() {
  return (
    <div>
      <div className='first'>
        <Navbar />
      </div>
      <div className='landing-image-container'>
        <FirstSlide />
      </div>
      <section>
        <AboutUs />
      </section>
      <section>
        <OurTeam team={team} />
      </section>
      <ImageSlider slides={SliderData} />;
      <div>
        <Footer />
      </div>
    </div>
  );
}
