import React from "react";
import styles from "./Manufacturers.module.scss";

function Manufacturers() {
  return (
    <div className={styles.manufacturers}>
      <div className={`${styles.manufacturersWrapper} globalContainer`}>
        <div className={styles.content}>
          <div className="globalSubheading globalPurple">Our Product</div>
          <div className="globalHeading globalTextLight">
            For Manufacturers & <br />
            Retailer <span className="globalDot">.</span>
          </div>
          <div className="globalContent globalTextLight width70 mlAuto">
            Edekee is a video commerce platform that enables brands,
            advertisers, and publishers to showcase their products .
          </div>
        </div>

        <div className={styles.phoneImage}>
          <img src="./images/phoneImage.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Manufacturers;
