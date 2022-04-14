import React from "react";
import styles from "./Manufacturers.module.scss";
import { motion } from "framer-motion";

function Manufacturers() {
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
    <div className={styles.manufacturers}>
      <motion.div
        className={`${styles.manufacturersWrapper} globalContainer`}
        variants={childVariant}
        initial="rest"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.content}>
          <div className="globalSubheading globalPurple">Our Product</div>
          <div className="globalHeading globalTextLight">
            For Manufacturers & <br />
            Retailer <span className="globalDot">.</span>
          </div>
          <div className="globalContent globalTextLight width70 mlAuto">
            Edekee is a video commerce platform that enables brands,
            advertisers, and publishers to showcase their products.
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

export default Manufacturers;
