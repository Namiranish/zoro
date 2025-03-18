import React from 'react'
import styles from './Home.module.css'
import Hero from '../../components/Header/Hero'
import { useState } from 'react'
import ExploreMenu from '../../components/Explore Menu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {

  const [category, setCategory] = useState("All")

  return (
   <>
   <Hero/>
   <ExploreMenu category={category} setCategory={setCategory} />
   <FoodDisplay category={category}/>
   <AppDownload/>
   </>
  )
}

export default Home