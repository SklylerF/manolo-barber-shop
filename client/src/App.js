import "./App.css";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import ImageSlider from "./components/carousel/ImageSlider";
import { SliderData } from "./components/carousel/SliderData";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </div>
      <section>
        <div>
          <h2 id='gallery'> Gallery </h2>
          <ImageSlider slides={SliderData} />;
        </div>
      </section>
      <Routes>
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
