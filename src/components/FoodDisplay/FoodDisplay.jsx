import React, { useContext } from 'react'
import styles from './FoodDisplay.module.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className={styles.foodDisplay} id={styles.foodDisplay}>
        <h2>Top Dishes Near You</h2>
        <div className={styles.foodDisplayList}>
            {food_list.map((ele,idx)=>{
              if(category==="All" || category===ele.category){
                return <FoodItem key={idx} id={ele._id} name={ele.name} description={ele.description} price={ele.price} image={ele.image}/>
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay