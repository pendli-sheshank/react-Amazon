import './CheckoutProduct.css';

import React from 'react';
import FlipMove from 'react-flip-move';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <FlipMove
      staggerDelayBy={10}
      appearAnimation="fade"
      enterAnimation="fade"
      leaveAnimation="fade">
      <div className="checkout-product">
        <img
          className="checkout-product-image"
          src={image}
          alt="checkout-product"
        />
        <div className="checkout-product-info">
          <p className="checkout-product-title">{title}</p>
          <p className="checkout-product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkout-product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span>🧡 </span>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromCart} className="button">
              Remove from Cart
            </button>
          )}
        </div>
      </div>
      <hr />
    </FlipMove>
  );
}

export default CheckoutProduct;
