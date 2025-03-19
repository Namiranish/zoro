import React, { useContext } from 'react'
import styles from './FoodItem.module.css'
import img from './rating_stars.png'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {

     const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className={styles.foodItem}>
        <div className={styles.foodItemImgcontainer}>
            <img className={styles.foodItemImg} src={image} alt="" />
            {!cartItems[id]
            ? <img className={styles.add} onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className={styles.foodItemCounter}> 
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className={styles.foodItemInfo}>
            <div className={styles.rating}>
                <p>{name}</p>
                <img src={img} alt="" />
            </div>
            <p className={styles.foodItemDes}>{description}</p>
            <p className={styles.foodItemPrice}>₹{price}</p>
        </div>
    </div>
  )
}

export default FoodItem