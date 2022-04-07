import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <p className={styles.headerPrimaryText}>
          Connecting People to Products
        </p>
        <p className={styles.headerSecondaryText}>
          Find Meaning, Creating Connections with Edekee.
        </p>
        <span className={styles.videoPlayIcon}>
          <img src="./icons/videoPlayButton.svg" alt="play video" />
        </span>
      </div>
    </div>
  );
}

export default Header;
