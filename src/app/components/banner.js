import styles from "../styles/banner.module.css";
import bannerStyles from "../styles/product.module.css";
import Image from "next/image";

const banner = () => {
    return (
        <>
            <div className='containerCenter'>
                <div className={styles.imgBody1}>
                    <Image src="/images/hero.jpg" alt="hero" width={400}
                        height={300} className={styles.img} />
                </div>
            </div>
            <div className={styles.main_container}>
                <h1 className={styles.head}>Piñatex Bags</h1>
                <section className={bannerStyles.praductSection}>
                    <div className={bannerStyles.product} >
                        <div className={bannerStyles.imgBody} >
                            <Image src="/images/banner-1.jpg" alt="product" width={300} height={250} />
                        </div>
                        <div className={bannerStyles.content}>
                            <h1>Satchel Mini - Cardii</h1>
                            <h2>Rs. 250.00</h2>
                        </div>
                        <button id="btn">add to cart</button>
                    </div>
                    <div className={bannerStyles.product} >
                        <div className={bannerStyles.imgBody} >
                            <Image src="/images/product-2.jpg" alt="product" width={300} height={250} />
                        </div>
                        <div className={bannerStyles.content}>
                            <h1>Canvas Weekender - Camo</h1>
                            <h2>Rs. 250.00</h2>
                        </div>
                        <button id="btn">add to cart</button>
                    </div>
                    <div className={styles.lastCover}>
                        <div className={styles.content}>
                            <p className={styles.para}>GO RETRO WITH</p>
                            <h3 className={styles.head1}>PIÑATEX &</h3>
                            <h2 className={styles.head2}>CANVAS</h2>
                        </div>
                        <Image src="/images/banner-2.png" alt="banner" width={100} height={150}/>
                    </div>
                </section>
            </div>

        </>
    )
}

export default banner
