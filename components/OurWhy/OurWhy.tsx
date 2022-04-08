import React from "react";
import styles from "./OurWhy.module.scss";

function OurWhy() {
  return (
    <div className={styles.ourWhy}>
      <div className={`${styles.ourWhyWrapper} globalContainer`}>
        <img src="./icons/edekeeLogoPurple.svg" alt="" />

        <p className={styles.text}>
          We exist to find meaning, and create connections.
        </p>
      </div>
    </div>
  );
}

export default OurWhy;
