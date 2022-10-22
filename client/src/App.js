import "./App.css";
import LandingPage from "./components/LandingPage";
import Shop from "../src/components/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  const shopItems = [
    {
      name: "Item 1",
      category: "Hair",
      price: 100,
    },
    {
      name: "Item 2",
      category: "Hair",
      price: 100,
    },
    {
      name: "Item 3",
      category: "Hair",
      price: 100,
    },
    {
      name: "Item 4",
      category: "Hair",
      price: 100,
    },
    {
      name: "Item 5",
      category: "Hair",
      price: 100,
    },
    {
      name: "Item 6",
      category: "Hair",
      price: 100,
    },
    {
      name: "Item 7",
      category: "Hair",
      price: 100,
    },
    {
      name: "Item 8",
      category: "Hair",
      price: 100,
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
