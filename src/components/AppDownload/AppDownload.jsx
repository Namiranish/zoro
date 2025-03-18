import React from 'react'
import styles from './AppDownload.module.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className={styles.appDownload} id={styles.appDownload}>
        <p>For Better Experience Download <br/>ZORO App</p>
        <div className={styles.AppPlatform}>
            <a href="https://play.google.com/store/games?hl=en" target='blank'><img className={styles.googlePlay} src={assets.play_store} alt="play-store" /></a>
            <a href="https://www.apple.com/in/app-store/" target='blank'><img className={styles.appStore} src={assets.app_store} alt="app-store"  /></a>
        </div>
    </div>
  )
}

export default AppDownload