import React from "react";
import styles from "./CallToAction.module.scss";
import { motion } from "framer-motion";

function CallToAction() {
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
    <div className={styles.callToAction}>
      <img className={styles.ellipse1} src="./images/Ellipse2.svg" alt="" />

      <motion.div
        className={`${styles.callToActionWrapper} globalContainer`}
        variants={childVariant}
        initial="rest"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.image}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/peggs-web.appspot.com/o/callToActionImage.png?alt=media&token=0bfe46b5-2d52-4044-9988-be278d64f936"
            alt=""
          />
        </div>

        <div className={styles.content}>
          <p className={`${styles.heading} globalTextDark500`}>
            View. Create. Buy.
          </p>
          <p className={`${styles.info} globalTextDark400`}>
            Download the edekee app to start viewing, creating videos and
            buying.
          </p>
          <div className={styles.downloadButtons}>
            <span className={styles.googlePlayBtn}>
              <img src="./icons/googlePlayBtn.svg" alt="" />
            </span>
            <span>
              <img src="./icons/appStoreBtn.svg" alt="" />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CallToAction;
