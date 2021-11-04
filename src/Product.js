import React from 'react';
import './Product.css';
import FlipMove from 'react-flip-move';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <FlipMove
        staggerDelayBy={10}
        appearAnimation="fade"
        enterAnimation="accordionHorizontal"
        leaveAnimation="fade">
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span className="rating-heart">🧡 </span>
              ))}
          </div>
        </div>
        <img className="product-image" alt="product-img" src={image} />

        <button onClick={addToCart}>Add to Cart</button>
      </FlipMove>
    </div>
  );
}

export default Product;
