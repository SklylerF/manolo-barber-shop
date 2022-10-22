import "./App.css";
import LandingPage from "./components/LandingPage";
import Shop from "../src/components/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductOne from "./assets/images/product-one.jpg";
import ProductTwo from "./assets/images/product-two.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  const shopItems = [
    {
      name: "Item 1",
      category: "Hair",
      price: 13.99,
      image: ProductOne,
    },
    {
      name: "Item 2",
      category: "Hair",
      price: 13.99,
      image: ProductTwo,
    },
  ];
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/shop' element={<Shop shopItems={shopItems} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
