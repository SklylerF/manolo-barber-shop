import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem/index';
import Auth from '../../utils/Auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './Cart.css';
import { Link } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51LvW3REWiFhsoBBB1YliSxUPPKPP204aEUtrNKG1TsDOuPaaKTIp02xgVOCHmgtYQirgLnSuzbQcnXIB8VxZagpc00njRGUm23');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);


  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);
  
  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      
      variables: { products: productIds },
    } );
    
  }
  
  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
      </div>
      <h2>My Cart</h2>
      {state.cart.length ? (
        <div className='Item'>
          <div className='cartitem'>
            {state.cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
          <div className="Total">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <div className='login'>
                <Link to='/login'>
                  <a className='logText'>Log in to check out!</a></Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h3>
          Your cart is empty!

        </h3>
      )}
    </div>
  );
};

export default Cart;
