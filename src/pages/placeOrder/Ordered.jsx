import React from 'react'
import styles from './Ordered.module.css'
const Ordered = () => {
  return (
    <div className={styles.endContainer}>
    <div className={styles.ending}>
      <h3>Thank You,</h3>
      <p>For Ordering Food From <span>ZORO</span></p>
      </div>
      <img className={styles.endImg} src='./end.png' alt="" />
    </div>
  )
}

export default Ordered