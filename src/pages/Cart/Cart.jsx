import React, { useContext } from 'react'
import styles from './Cart.module.css'
import {StoreContext} from '../../context/StoreContext'
import { Link } from 'react-router-dom';
const Cart = () => {

  const{cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);


  return (
  <>
  <div className={styles.cart}>
    <div className={styles.cartItem}>
      <div className={styles.cartTitle}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quality</p>
          <p>Total</p>
          <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((ele,idx)=>{
        if(cartItems[ele._id]>0){
          return(
            <div>
            <div className={`${styles.cartTitle} ${styles.cartItemsItem} ` }>
              <img src={ele.image} alt="" />
              <p>{ele.name}</p>
              <p>₹{ele.price}</p>
              <p>{cartItems[ele._id]}</p>  
              <p>₹{ele.price* (cartItems[ele._id])}</p>
              <p onClick={()=>removeFromCart(ele._id)} className={styles.cross} >x</p>
            </div>
            <hr />
            </div>
          )
        }
      })}
    </div>
         
         {/* //total amout  */}
    <div className={styles.cartBottom}>
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
            <Link to = '/order'><button>CHECKOUT</button></Link>
      </div>
   

    {/* //cart promo code section  */}

      <div className={styles.promocode}>
        <div>
              <p>If you have a promo code, Enter it here</p>
              <div className={styles.promoInput}> 
                  <input type="text" placeholder='promo code'/>
                  <button>Submit</button>
              </div>
        </div>
      </div>
      </div>
  </div>
  </>
  )
  
}

export default Cart