import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import styles from './PlaceOrder.module.css';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    setIsLoading(true);
  };

  const handleVideoEnd = () => {
    navigate('/end'); 
  };

  return (
    <form className={styles.placeOrder}>
      {/* Loader Section (Video) */}
      {isLoading && (
        <div className={styles.loaderContainer}>
          <video
            src="/Delivery.mp4" 
            autoPlay
            onEnded={handleVideoEnd}
            className={styles.loaderVideo}
          />
          <p className={styles.loaderText}>Preparing your order...</p>
        </div>
      )}

      {!isLoading && (
        <>
          {/* Left Section */}
          <div className={styles.leftOrder}>
            <p className={styles.title}>Delivery Information</p>
            <div className={styles.multiFields}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Street" />
            <div className={styles.multiFields}>
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
            </div>
            <div className={styles.multiFields}>
              <input type="text" placeholder="Zip code" />
              <input type="text" placeholder="Country" />
            </div>
            <input type="text" placeholder="Phone number" />
          </div>

          {/* Right Section */}
          <div className={styles.RightOrder}>
            <div className={styles.cartTotal}>
              <h2 className={styles.carttxt} >Cart Totals</h2>
              <div>
                <div className={styles.cartTotalDetails}>
                  <p className={styles.carttxt} >Subtotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className={styles.cartTotalDetails}>
                  <p className={styles.carttxt} >Delivery Fee</p>
                  <p>₹{getTotalCartAmount()===0?0:29}</p>
                </div>
                <hr />
                <div className={styles.cartTotalDetails}>
                  <b className={styles.carttxt} >Total</b>
                  <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount() + 29}</b>
                </div>
              </div>
              <button type="button" onClick={handleProceedToPayment}>
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default PlaceOrder;
