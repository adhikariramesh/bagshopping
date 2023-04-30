import styles from "../styles/common.module.css";
import heroStyles from "../styles/heroSection.module.css";
import Image from "next/image";

const heroSection = () => {
  return (
    <section className={`${styles.container} ${heroStyles.heroSection}`}>
      <div className={heroStyles.left}>
              <h1>Urban Fawn</h1>
              <h2>BOX BAGS</h2>
              <p>Going green is more than just being environmentally friendly; it is an unshakable commitment to a sustainable lifestyle.</p>
              <button className={`${heroStyles.btn}`} id="btn">shop now</button>
      </div>
      <div className={heroStyles.right}>
          <div className={heroStyles.imgBody}>
            <Image src="/images/banner.png" alt="hero image" width={300} height={350}/>
          </div>
      </div>
    </section >
  )
}

export default heroSection
