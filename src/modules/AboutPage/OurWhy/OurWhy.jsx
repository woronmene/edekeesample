import React from "react";
import styles from "./OurWhy.module.scss";
import { motion } from "framer-motion";

function OurWhy() {
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
    <div className={styles.ourWhy}>
      <motion.div
        className={`${styles.ourWhyWrapper} globalContainer`}
        variants={childVariant}
        initial="rest"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src="./icons/edekeeLogoPurple.svg" alt="" />

        <p className={styles.text}>
          We exist to find meaning, and create connections.
        </p>
      </motion.div>
    </div>
  );
}

export default OurWhy;
