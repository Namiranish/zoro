import React, { useState } from 'react';
import styles from './Login.module.css';
import { assets } from '../../assets/assets';
import { auth, googleAuthProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign up');

  async function googleSignIn() {
    try {
      let response = await signInWithPopup(auth, googleAuthProvider);
      let user = response.user;

      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      }));

      console.log("User logged in:", user.displayName);

      // Reload the page to reflect changes
      window.location.reload();

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.login}>
      <form className={styles.loginContainer}>
        <div className={styles.loginTitle}>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className={styles.loginInput}>
          {currState === 'Login' ? null : <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === 'Sign up' ? 'Create Account' : 'Login'}</button>
        <div className={styles.loginCondition}>
          <input type="checkbox" required />
          <p>By Continuing, I Agree to the Terms of Use & Privacy Policy</p>
        </div>
        {currState === 'Login' ? (
          <div className={styles.google}>
            <button type="button" onClick={googleSignIn}>
              Sign in with <img src="./g.png" alt="" />
            </button>
            <p>Create a new account? <span onClick={() => setCurrState('Sign up')}>Click Here</span></p>
          </div>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login Here</span></p>
        )}
      </form>
    </div>
  );
};

export default Login;
