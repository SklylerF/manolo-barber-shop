import "./App.css";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <LandingPage />
    </div>
      <Routes>
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
