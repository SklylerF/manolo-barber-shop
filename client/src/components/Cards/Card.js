import { useState } from "react";

import "./cards.css";
export default function Cards(item) {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`cards ${flip ? "flip" : ""}`} onClick={() => setFlip(!flip)}>
      <div className='card-back'>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button>ADD TO CART</button>
      </div>
      <div className='card-front'>
        <h2>{item.name}</h2>
        <h3>${item.price}</h3>
        <img src={item.image}></img>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
}
