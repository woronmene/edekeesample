import React from "react";
import styles from "./Values.module.scss";

function Values() {
  return (
    <div className={styles.values}>
      <div className={`${styles.valuesWrapper} globalContainer`}>
        <div className="globalSubheading globalPurple">The company</div>
        <div className={styles.mainContent}>
          <div className="globalHeading globalTextDark500">
            {/* <div className={styles.mainContentHeading}> */}
            Who We <br /> Are <span className="globalDot">.</span>
          </div>
          <div className="globalContent globalTextDark500">
            {/* <div className={styles.mainContentInfo}> */}
            Edekee was founded to connect people to products, by giving meaning
            to every pixel, whether you find a product or service of interest
            while watching a video, movie or as you perceive the world around
            you.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
