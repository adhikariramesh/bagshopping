import React from 'react';
import Link from 'next/link';
import navStyles from "../styles/nav.module.css";
import styles from "../styles/common.module.css";

const Nav = () => {
  return (
    <nav className='containerCenter'>
     <ul className={`${styles.container} ${navStyles.navbar}`}>
        <li className={navStyles.nav_item}><Link href="/" className={` ${navStyles.nav_links}`}>home</Link></li>
        <li className={navStyles.nav_item}><Link href="/about" className={` ${navStyles.nav_links}`}>about</Link></li>
        <li className={navStyles.nav_item}><Link href="/terms" className={` ${navStyles.nav_links}`}>term and conditions</Link></li>
        <li className={navStyles.nav_item}><Link href="/contact" className={` ${navStyles.nav_links}`}>contacts</Link></li>
     </ul>
    </nav>
  )
}

export default Nav
