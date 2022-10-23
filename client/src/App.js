import "./App.css";
import LandingPage from "./components/LandingPage";
import Shop from "../src/components/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductOne from "./assets/images/product-one.jpg";
import ProductTwo from "./assets/images/product-two.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
