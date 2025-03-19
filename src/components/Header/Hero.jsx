// import img from "./3.png"
import styles from './Hero.module.css'
const Hero = () => {
    return(
        <>
        <div className={styles.heroHeader}>
            <div className={styles.heroContent}>
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
                <a href='#exploreMenu'><button className={styles.viewMenu} >View Menu</button></a>
            </div>
        </div>
        </>
    )
}

export default Hero