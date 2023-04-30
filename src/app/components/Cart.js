import React, { useState } from 'react';
import Image from 'next/image';
import styles from "../styles/cart.module.css";
import {HiXMark} from "react-icons/hi2"

const Cart = ({cartSatus}) => {
    const [count, setCount] = useState(0);

const handleCloseCart = () =>{
    cartSatus(false);
}

  return (
    <section className={styles.cart_section}>
        <div className={styles.head}>
         <h1 className={styles.h1} >Product Cart</h1>
         <HiXMark className='icons' onClick={handleCloseCart} />
        </div>
     <div className={styles.container}>
            <Image src="/images/product-1.jpg" alt="product image" width={50} height={50} className={styles.images}/>
            <div className={styles.qDiv} >
                <span className={styles.spans}onClick={()=>{count > 0 && setCount(count - 1)}}>-</span>
                <span className={styles.spans}>{count}</span>
                <span className={styles.spans} onClick={()=>setCount(count + 1)}>+</span>
            </div>
            <button className={styles.btn}>
                add to cart
            </button>
     </div>
     <div className={styles.totalDeatils}>
        <h1 className={styles.h1}>Totals</h1>
        <p>Rs.2000</p>
     </div>
    </section>
  )
}

export default Cart
