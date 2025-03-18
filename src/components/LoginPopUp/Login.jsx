import React, { useState } from 'react'
import styles from './Login.module.css'
import { assets } from '../../assets/assets'


const Login = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Sign up")


  return (
    <div className={styles.login}>
        <form className={styles.loginContainer}>
          <div className={styles.loginTitle}>
              <h2>{currState}</h2>
              <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className={styles.loginInput}>
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}

              <input type="email" placeholder='Your Email' required/>
              <input type="password" placeholder='Password' required/>
          </div>
          <button>{currState==="Sign up"? "Create Account": "Login"} </button>
          <div className={styles.loginCondition}>
            <input type="checkbox" required/>
            <p>By Continuing, I Agree to the Terms of Use & Privacy Policy</p>
          </div>
          {currState==="Login"
          ?<p>Create a new account? <span onClick={()=>setCurrState("Sign up")} >Click Here</span></p>
          :<p>Already have an account? <span onClick={()=>setCurrState("Login")} >Login Here</span></p>
          }
          
          
        </form>
    </div>
  )
}

export default Login