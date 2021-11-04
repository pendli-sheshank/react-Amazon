import React from 'react';
import './Home.css';
import Product from './Product';
import FlipMove from 'react-flip-move';

const Home = () => {
  return (
    <FlipMove
      staggerDelayBy={50}
      appearAnimation="fade"
      enterAnimation="fade"
      leaveAnimation="fade">
      <div className="home">
        <div className="home-container">
          <img
            src="https://m.media-amazon.com/images/I/81WWZ9i23wL._SX3000_.jpg"
            alt="banner"
            className="banner-image"
          />
          <div className="home-row">
            <Product
              id="321445431"
              title="The Power of Your Subconscious Mind"
              price={29.99}
              image="https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg"
              rating={5}
            />
            <Product
              id="321445531"
              rating={4}
              image="https://m.media-amazon.com/images/I/71Q3iSQAwAS._AC_UY218_.jpg"
              price={129}
              title="Samsung Galaxy M32 (Black, 4GB RAM, 64GB Storage) "
            />
          </div>

          <div className="home-row">
            <Product
              id="3214446631"
              rating={4}
              price={499}
              image="https://m.media-amazon.com/images/I/71evs2WKJjS._AC_UY218_.jpg"
              title="Acer Nitro 5 11th Gen Intel Core i5-11400H 15.6-inch FHD 144Hz Gaming Laptop "
            />
            <Product
              id="32144543455431"
              title="AVITA Cosmos 2 in 1 Celeron Dual Core - (4 GB/64 GB EMMC Storage/Windows 10 Home)"
              rating={3}
              price={299}
              image="https://m.media-amazon.com/images/I/51z0Sd72wTL._AC_UY218_.jpg"
            />
            <Product
              id="32144879546545431"
              title="LG Gram 17 Ultra-Light Intel Evo 11th Gen Core i7,16 GB RAM, 512 GB SSD, Win-10,"
              rating={4}
              price={899}
              image="https://m.media-amazon.com/images/I/61WOfbIkf7L._AC_UY218_.jpg"
            />
          </div>

          <div className="home-row">
            <Product
              id="3214421335465431"
              title="Samsung 138 cm (55 inches) The Frame Series 4K Ultra HD Smart QLED TV"
              rating={5}
              price={1000}
              image="https://m.media-amazon.com/images/I/71YDVrHosvS._AC_UY218_.jpg"
            />
          </div>
        </div>
      </div>
    </FlipMove>
  );
};

export default Home;
