import React from "react";
import styles from "./Users.module.scss";
import { motion } from "framer-motion";

function Users() {
  const childVariant = {
    rest: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };
  return (
    <div className={styles.users}>
      <img className={styles.ellipse1} src="./images/Ellipse2.svg" alt="" />
      <img className={styles.ellipse2} src="./images/Ellipse1.svg" alt="" />

      <motion.div
        className={`${styles.usersWrapper} globalContainer`}
        variants={childVariant}
        initial="rest"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.content}>
          <div className="globalSubheading globalPurple">Our Platform</div>
          <div className="globalHeading globalTextDark500">
            Our Users <span className="globalDot">.</span>
          </div>
          <div className="globalContent globalTextDark500 width70">
            Edekee connects people to products and services that are found in
            videos and other places. Our technology helps our users to make
            sense of every pixel in a video and even the products and services
            in the users physical space. If you can touch it on your smartphone,
            you can buy it with a click.
          </div>
        </div>

        <div className={styles.phoneImage}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/peggs-web.appspot.com/o/phoneImage.png?alt=media&token=5ab05db0-9ad8-470e-b827-1f6d4d8b24ed"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Users;
