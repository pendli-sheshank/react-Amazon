import React from 'react';
import './Order.css';
import CheckoutProduct from './CheckoutProduct';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className="order">
      <h1>orders</h1>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY,h:mma')}</p>

      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order-total">
              Order Total:
              {value}
            </h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
    </div>
  );
}

export default Order;
