import React, { useContext, useState, useEffect } from 'react';
import styles from './Nav.module.css';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { FaUtensils } from "react-icons/fa";
import { StoreContext } from '../../context/StoreContext';

const Nav = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount } = useContext(StoreContext);

  // Retrieve user data from local storage
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <>
      <header id='nav'>
        <Link to="/">
          <h1 className={styles.logo}>ZORO</h1>
        </Link>
        
        <div className={styles.navList}>
          <Link to="/">
            <li onClick={() => setMenu('home')} className={menu === 'home' ? styles.active : ''}>Home</li>
          </Link>
          <li onClick={() => setMenu('menu')} className={menu === 'menu' ? styles.active : ''}>
            <a href='#exploreMenu'>Menu</a>
          </li>
          <Link to="/review">
            <li onClick={() => setMenu('review')} className={menu === 'review' ? styles.active : ''}>Review</li>
          </Link>
          <li onClick={() => setMenu('contactUs')} className={menu === 'contactUs' ? styles.active : ''}>
            <a href='https://www.linkedin.com/in/namira-anis/' target='blank'>Contact Us</a>
          </li>
        </div>

        <div className={styles.navIcons}>
          <div className={styles.fork}>
              <Link to='./recipe'><FaUtensils  size={25} color="black" /></Link>
          </div>
          <div className={styles.cartIcon}>
          
            <Link to="/cart">
              <FaShoppingCart size={25} color="black" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : styles.dot}></div>
          </div>

          {/* Conditional Rendering: Show user name if logged in, otherwise show Sign In button */}
          {user ? (
            <div className={styles.user}>
              <span className={styles.userName}>Hello, {user.displayName}😊</span>
              <button onClick={handleLogout} className={styles.logout}>Logout</button>
            </div>
          ) : (
            <button onClick={() => setShowLogin(true)} className={styles.signin}>Sign in</button>
          )}
        </div>
      </header>
    </>
  );
};

export default Nav;
