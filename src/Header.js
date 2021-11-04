import React from 'react';
import '../src/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
          alt="website-logo"
        />
      </Link>
      <div className="search">
        <input className="input-style" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-nav">
        <Link className="nav-link" to="/login">
          <div onClick={handleAuth} className="header-option">
            <span className="optionLine_one">
              Hello{' '}
              <span className="user">
                {!user ? 'Guest' : user.email.slice(0, -10)}
              </span>
            </span>
            <span className="optionLine_two">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link className="nav-link" to="/orders">
          <div className="header-option">
            <span className="optionLine_one">Returns</span>
            <span className="optionLine_two">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="optionLine_one">Your</span>
          <span className="optionLine_two">Prime</span>
        </div>
        <Link className="nav-link" to="/checkout">
          <div className="header-optionBasket">
            <ShoppingCartIcon className="cart-logo" />
            <span className="optionLine_two cart-count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
