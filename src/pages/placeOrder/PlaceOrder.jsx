import React, { useContext } from 'react'
import styles from './PlaceOrder.module.css'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'
const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
  <form className={styles.placeOrder}>
    {/* //left section  */}
    <div className={styles.leftOrder}>
        <p className={styles.title} >Delivery Information</p>
        <div className={styles.multiFields}>  
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className={styles.multiFields}>  
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
        </div>
        <div className={styles.multiFields}>  
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
        </div>
        <input type="text"  placeholder='Phone number'/>
    </div>

    {/* //right Section  */}
    <div className={styles.RightOrder}>
    <div className={styles.cartTotal}>
          <h2>Cart Totals</h2>
          <div>
            <div className={styles.cartTotalDetails}>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
                <p>Delivery Fee</p>
                <p>₹{29}</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
                <b>Total</b>
                <b>₹{getTotalCartAmount()+29}</b>
            </div>
          </div>
            <Link to='/end'><button>PROCEED TO PAYMENT</button></Link>
      </div>
    </div>
  </form>
  )
}

export default PlaceOrder