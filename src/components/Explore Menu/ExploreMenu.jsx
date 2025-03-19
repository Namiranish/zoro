import React from 'react'
import styles from './ExploreMenu.module.css'
import { menu_list } from '../../assets/assets'


const ExploreMenu = ({category, setCategory}) => {
  return (
 <div className={styles.exploreMenu} id="exploreMenu">
    <h1>Explore our menu</h1>
    <p className={styles.menuText} >Choose from a diverse menu feturing a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
    
    <div className={styles.menuLists}>
      {menu_list.map((ele,idx)=>{
        return(
          <div onClick={() => setCategory(prev => prev === ele.menu_name ? "All" : ele.menu_name)} key={idx} className={styles.menuListItems}>
              <img className={category===ele.menu_name? styles.active : ""} src={ele.menu_image} alt="" />
              <p>{ele.menu_name}</p>
          </div>
        )
      })}
    </div>
    <hr />
 </div>
  )
}

export default ExploreMenu