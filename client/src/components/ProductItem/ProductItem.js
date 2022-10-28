import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "../../components/Cards/cards.css";
function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const [flip, setFlip] = useState(false);

  const { image, name, _id, price, quantity, description } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className={`cards ${flip ? "flip" : ""}`} onClick={() => setFlip(!flip)}>
      <div className='card-back'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className='card-front'>
        <h2>{name}</h2>
        <h2>${price}</h2>
        <img src={`static/media/${image}`} />
        <button onClick={addToCart}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductItem;
