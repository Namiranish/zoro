import React from 'react'
import styles from './Nav.module.css'
import { FaShoppingCart } from 'react-icons/fa'; 
import { FaUser } from 'react-icons/fa';

const Nav = () => {
  return (
    <>
    <header>
        <h1>Logo</h1>
        
        <div className={styles.navList}>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact Us</li>
        </div>

        <div className={styles.navIcons}>
            <button>Dark mode</button>
            <FaUser size={30} color="black" />
            <FaShoppingCart size={30} color="black" />
            <button>Sign in</button>
        </div>
    </header>
    </>
  )
}

export default Nav