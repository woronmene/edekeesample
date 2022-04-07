import React from "react";
import styles from "./Creators.module.scss";

function Creators() {
  return (
    <div className={styles.creators}>
      <div className={`${styles.creatorsWrapper} globalContainer`}>
        <div className={styles.content}>
          <div className="globalSubheading globalPurple">Our Product</div>
          <div className="globalHeading globalTextLight">
            For Creators <span className="globalDot">.</span>
          </div>
          <div className="globalContent globalTextLight width70">
            Edekee is a video commerce platform that enables brands,
            advertisers, and publishers to showcase their products
          </div>
        </div>

        <div className={styles.phoneImage}>
          <img src="./images/phoneImage.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Creators;
