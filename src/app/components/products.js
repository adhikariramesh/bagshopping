'use client';
import { useState } from "react";
import styles from "../styles/product.module.css";
import Image from "next/image";
import productList from "../api/ProductApi";

const products = () => {
    const [products, setProducts] = useState(productList);
    return (
        <>
            <h1 className={styles.head}>all products</h1>
            <section className={styles.praductSection}>
                {
                    products.map((curElmnt) => {
                        return (
                            <>
                                <div className={styles.product} key={curElmnt.id}>
                                    <div className={styles.imgBody} key={curElmnt.id}>
                                        <Image src={curElmnt.imgUrl} alt="product" width={300} height={250} />
                                    </div>
                                    <div className={styles.content} key={curElmnt.id}>
                                        <h1>{curElmnt.name} </h1>
                                        <h2>{curElmnt.price} </h2>
                                    </div>
                                    <button id="btn">add to cart</button>
                                </div>
                            </>
                        )
                    })
                }

            </section>
        </>
    )
}

export default products
