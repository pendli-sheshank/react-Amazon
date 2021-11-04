import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="left-checkout">
        <img
          className="checkout-ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/Jupiter/Phase2/Phase3/Phase4/1500x300_desk_header_1.jpg"
          alt="ad-checkout"
        />
        <div>
          <h3 className="checkout-user">{user?.email.slice(0, -10)}</h3>
          <h2 className="checkout-title">Your Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="right-checkout">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
