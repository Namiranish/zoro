import React from 'react'
import styles from './Footer.module.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return(
    <div className={styles.footer} id={styles.footer}>
        <div className={styles.footerContent}>

        {/* //left part of the footer */}
        <div className={styles.footerLeft}>
            <h1 className={styles.logo}>ZORO</h1>
            <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia tempora, magni deserunt officiis id optio, ut error quod eveniet, eum esse. Soluta aliquam impedit ab nisi distinctio asperiores. Dignissimos, numquam.</p>

            <div className={styles.socialIcons}>
                <img src={assets.facebook_icon} alt="Facebook-Icon" />
                <img src={assets.twitter_icon} alt="Twitter-Icon" />
                <img src={assets.linkedin_icon} alt="linkedIN-Icon" />
            </div>

        </div>

        {/* //center of the footer */}
        <div className={styles.footerCenter}>
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>

        {/* //right part of the footer */}
        <div className={styles.footerRight}>
            <h2 >GET IN TOUCH</h2>
            <ul>
                <li>+91 9876543210</li>
                <li>contact@zoro</li>
            </ul>
        </div>
        </div>
        <hr />
        <p className={styles.copyright}>Copyright 2025 © ZORO.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer