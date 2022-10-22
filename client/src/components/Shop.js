import "./shop.css";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";
import TemplateImg from "../assets/images/template-item-image.png";

export default function Shop({ shopItems }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className='item-shop-container'>
          <h2>SHOP</h2>
          <div className='items-container'>
            {shopItems.map((item) => (
              <div className='item'>
                <h2>{item.name}</h2>
                <img src={TemplateImg} />
                <div className='button-container'>
                  <button className='add-to-cart'> ADD TO CART FOR {item.price}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
