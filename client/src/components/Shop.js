import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";
import Cards from "./CardFlip/Cards";
//importing product images
import ProductOne from "../assets/images/product-one.jpg";
import ProductTwo from "../assets/images/product-two.jpg";

export default function Shop() {
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
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Cards shopItems={shopItems} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
