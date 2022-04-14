import React from "react";
import styles from "./Introducing.module.scss";
import { motion } from "framer-motion";

function Introducing() {
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
    <div className={styles.introducing}>
      <img className={styles.ellipse1} src="./images/Ellipse1.svg" alt="" />
      <img className={styles.ellipse2} src="./images/Ellipse1.svg" alt="" />
      <img className={styles.ellipse3} src="./images/Ellipse1.svg" alt="" />

      <motion.div
        className={`${styles.introducingWrapper} globalContainer`}
        variants={childVariant}
        initial="rest"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="globalSubheading globalPurple">The company</div>
        <div className={styles.mainContent}>
          <div className="globalHeading globalTextLight">
            {/* <div className={styles.mainContentHeading}> */}
            What we do <span className="globalDot">.</span>
          </div>
          <div className="globalContent globalTextDark300">
            {/* <div className={styles.mainContentInfo}> */}
            Edekee creates a marketplace for brands retailers and marketers to
            showcase their products and services using video content as well as
            our <span className="globalPurple">Video Tagging APIs</span>
            and our a la carte type{" "}
            <span className="globalPurple"> Retail APIs</span>.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Introducing;
