import React, { useState } from 'react'
import styles from './Nav.module.css'
import { FaShoppingCart } from 'react-icons/fa'; 
import { FaUser } from 'react-icons/fa';

const Nav = () => {

  const [menu,setMenu] = useState("home");

  return (
    <>
    <header>
        <h1 className = {styles.logo}>ZORO</h1>
        
        <div className={styles.navList}>
            <li onClick={()=> setMenu("home")} className={menu=="home"? styles.active : ""}>Home</li>
            <li onClick={()=> setMenu("menu")} className={menu==="menu"? styles.active : ""}>Menu</li>
            <li onClick={()=> setMenu("contactUs")} className={menu==="contactUs"? styles.active : ""}>Contact Us</li>
        </div>

        <div className={styles.navIcons}>
            {/* <button class="theme-toggle-btn" aria-label="Toggle theme"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path></svg></button> */}
            <FaUser size={25} color="black" />

            <div className={styles.cartIcon}>
            <FaShoppingCart size={25} color="black" />
            <div className={styles.dot}></div>
            </div>
            
            <button className={styles.signin}>Sign in</button>
        </div>
    </header>
    </>
  )
}

export default Nav