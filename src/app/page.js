import HeroSection from "./components/heroSection";
import styles from "./styles/common.module.css";
import Category from "./components/category";
import Products from "./components/products";
import Banner from "./components/banner";
const page = () => {
  return (
    <>
    <section className={styles.homepage}>
       <HeroSection/>
    </section>
    <Category/>
    <Products/>
    <Banner/>
    </>
  )
}

export default page
