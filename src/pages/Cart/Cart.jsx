import React, { useContext } from 'react'
import styles from './Cart.module.css'
import {StoreContext} from '../../context/StoreContext'
const Cart = () => {

  const{cartItems,food_list,removeFromCart} = useContext(StoreContext);

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
            <div className={styles.cartItemTitle}>
              <p>{ele.name}</p>
            </div>
          )
        }
      })}
    </div>
  </div>
  </>
  )
}

export default Cart