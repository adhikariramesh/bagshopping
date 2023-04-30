import styles from "../styles/contact.module.css";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.left}>
        <h1 className={styles.head}>Contact Us</h1>
        <p className={styles.para}>If you have any questions or suggestions, don't hesitate to get in touch with us. Our team speaks English and Spanish and are always happy to help!</p>
        <Image src="/images/about-2.png" alt="contact" width={300} height={200} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.head}>Address:</h1>
        <div className={styles.contant}>
          <p className={styles.para}>Suite No, Apartment Name</p>
          <p className={styles.para}>Phone : 123-4567-890</p>
        </div>
        <div className={styles.contant}>
          <p className={styles.para}>Street Name</p>
          <p className={styles.para}>Email : Info@yourcompanyname.com </p>
        </div>
        <div className={styles.contant}>
          <p className={styles.para}>City</p>
          <p className={styles.para}>Country</p>
        </div>
        <div className={styles.mapContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.277768386586!2d85.28493286815888!3d27.709030242031428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1682837726200!5m2!1sen!2snp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
