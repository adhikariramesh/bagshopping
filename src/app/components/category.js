import React from 'react';
import styles from "../styles/category.module.css";
import Image  from 'next/image';

const category = () => {
  return (
    <section className={styles.categorySection}>
   <div className={styles.category}>
    <Image src="/images/catagory-img-1.png" alt="catagory-1" width={350} height={300} className={styles.img} />
   </div>
   <div className={styles.category}>
    <Image src="/images/catagory-img-2.png" alt="catagory-1" width={350} height={300} className={styles.img} />
   </div>
   <div className={styles.category}>
    <Image src="/images/catagory-img-3.png" alt="catagory-1" width={350} height={300} className={styles.img} />
   </div>
    </section >
  )
}

export default category
