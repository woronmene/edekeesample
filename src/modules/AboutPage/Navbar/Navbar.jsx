import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbarLeft}>
          <span className={styles.edekeeLogo}>
            <img src="./icons/edekeeLogo.svg" alt="logo" />
          </span>
        </div>

        <div className={styles.navbarRight}>
          <div className={styles.navbarRightItem}>About</div>
          <div className={styles.navbarRightItem}>Products</div>
          <div className={styles.navbarRightItem}>Contact</div>
          <div className={`${styles.navbarRightItem} ${styles.actionButton}`}>
            Get Started
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
