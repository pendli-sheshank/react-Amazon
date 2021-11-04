import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
          alt="login-logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <button type="submit" onClick={signIn} className="signin-btn">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazons's Conditions of Use & sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button type onClick={register} className="register-btn">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
