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
    </BrowserRouter>
  );
}

export default App;
