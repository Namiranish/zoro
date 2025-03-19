import React from 'react'
import styles from './Footer.module.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return(
    <div className={styles.footer} id="footer">
        <div className={styles.footerContent}>

        {/* //left part of the footer */}
        <div className={styles.footerLeft}>
            <h1 className={styles.logo}>ZORO</h1>
            <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia tempora, magni deserunt officiis id optio, ut error quod eveniet, eum esse. Soluta aliquam impedit ab nisi distinctio asperiores. Dignissimos, numquam.</p>

            <div className={styles.socialIcons}>
                <a href='https://www.linkedin.com/in/namira-anis/' target='blank'><img src={assets.facebook_icon} alt="Facebook-Icon" /></a>
                <a href='https://www.linkedin.com/in/namira-anis/' target='blank'><img src={assets.twitter_icon} alt="Twitter-Icon" /></a>
                <a href='https://www.linkedin.com/in/namira-anis/' target='blank'><img src={assets.linkedin_icon} alt="linkedIN-Icon" /></a>
            </div>

        </div>

        {/* //center of the footer */}
        <div className={styles.footerCenter}>
        <h2>COMPANY</h2>
        <ul>
            <a href='#hero'><li>Home</li></a>
            <a href='https://www.linkedin.com/in/namira-anis/' target='blank'><li>About Us</li></a>
            <a href='https://www.linkedin.com/in/namira-anis/' target='blank'><li>Delivery</li></a>
            <a href='https://www.linkedin.com/in/namira-anis/' target='blank'><li>Privacy Policy</li></a>
        </ul>
        </div>

        {/* //right part of the footer */}
        <div className={styles.footerRight}>
            <h2 >GET IN TOUCH</h2>
            <ul>
            <a href='https://www.linkedin.com/in/namira-anis/' target='blank'><li>+91 9876543210</li></a>
            <a href='https://www.linkedin.com/in/namira-anis/' target='blank'><li>contact@zoro</li></a>
            </ul>
        </div>
        </div>
        <hr />
        <p className={styles.copyright}>Copyright 2025 © ZORO.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer