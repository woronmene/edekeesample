import React from "react";
import styles from "./Values.module.scss";
import { motion } from "framer-motion";

function Values() {
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
    <div className={styles.values}>
      <img className={styles.ellipse1} src="./images/Ellipse1.svg" alt="" />
      <img className={styles.ellipse2} src="./images/Ellipse1.svg" alt="" />
      <motion.div
        className={`${styles.valuesWrapper} globalContainer`}
        variants={childVariant}
        initial="rest"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="globalSubheading globalPurple">The company</div>
        <div className={styles.mainContent}>
          <div className="globalHeading globalTextDark500">
            {/* <div className={styles.mainContentHeading}> */}
            Who We <br /> Are <span className="globalDot">.</span>
          </div>
          <div className="globalContent globalTextDark500">
            {/* <div className={styles.mainContentInfo}> */}
            Edekee is the Video Commerce Company with product recognition
            solutions and e-commerce access for consumers on both digital and
            physical spaces. We also provide B2B companies with APIs a la carte
            or as is , to help their customers to experience awesome product
            recognition and shopping features in streamed videos. Using our
            premium pending patent, our Company utilises artificial intelligence
            (AI) and/UHF RFID in animating the tags for the products and
            services that surround us into a phygitally boundaryless world!
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Values;
