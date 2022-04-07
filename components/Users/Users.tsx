import React from "react";
import styles from "./Users.module.scss";

function Users() {
  return (
    <div className={styles.users}>
      <div className={`${styles.usersWrapper} globalContainer`}>
        <div className={styles.content}>
          <div className="globalSubheading globalPurple">Our Product</div>
          <div className="globalHeading globalTextDark500">
            For Users <span className="globalDot">.</span>
          </div>
          <div className="globalContent globalTextDark500 width70">
            Edekee was founded to connect people to products, by giving meaning
            to every pixel, whether you find a product or service of interest
            while watching a video, movie or as you perceive the world around
            you.
          </div>
        </div>

        <div className={styles.phoneImage}>
          <img src="./images/phoneImage.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Users;
