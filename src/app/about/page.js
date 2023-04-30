import styles from "../styles/about.module.css";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className={styles.aboutSection}>
        <div className={styles.topSection}>
            <div className={styles.left}>
                  <h3  className={styles.tophead}>About Urban Fawn</h3>
                  <h1 className={styles.bottomhead}>Better Materials Make Better Bags.</h1>
                  <p className={styles.para}>Our bags and accessories are made from sustainable materials like Piñatex, waxed canvas, and eco leather. Our Piñatex bags are vegan alternatives to leather, which is a result of our pledge towards creating a greener earth. We stand for good quality, a clean environment, and fairness for both our consumers and producers.</p>
                  <button className={styles.btn}>shop now</button>
            </div>
            <div className={styles.right}>
                <Image src="/images/about-1.png" alt="about" width={300} height={200} />
            </div>
        </div>
        <div className={styles.bottomSection}>
            <div className={styles.left}>
            <Image src="/images/about-2.png"alt="about" width={300} height={200} />
            </div>
            <div className={styles.right}>
               <h1 className={styles.bottomhead}>CRAFTSMANSHIP</h1>
               <p className={styles.para}>Our process is not about the numbers - our craftsmen measure, cut, and sew every piece by hand that goes out of our factory.</p>
                <Link href="#" className={styles.moreLink}>learn meor</Link>
            </div>
        </div>
    </section>
  )
}

export default About
