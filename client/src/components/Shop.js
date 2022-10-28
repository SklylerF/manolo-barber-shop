import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";
import CardList from "./Cards/CardList";
import { Link } from "react-router-dom";
//importing product images
import ProductOne from "../assets/images/product-one.jpg";
import ProductTwo from "../assets/images/product-two.jpg";
import Auth from "../utils/Auth";

import Cart from "../components/Cart/Cart";
import ProductList from "./ProductList/ProductList";

export default function Shop() {
  const shopItems = [
    {
      id: 1,
      name: "Kalive Urban Pomade for Men",
      description:
        "Kalive Pomade will give your hair all the control and flexibility needed to easily create your desired look all while nourishing your hair with natural ingredients. Our premium water-based pomade can be washed out easily, won’t damage your hair and won’t clog your pores.",
      price: 13.99,
      image: ProductOne,
    },
    {
      id: 2,
      name: "Kalive2style Mens Hair Styling Gel",
      description:
        "Our styling hair gel is made to offer a strong hold to give you the freedom to tame your hair and get it to look just the way you want while adding just a touch of shine",
      price: 13.99,
      image: ProductTwo,
    },
  ];

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='item-shop'>
        <Cart />
        <ProductList item={shopItems} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
