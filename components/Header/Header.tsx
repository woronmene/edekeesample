import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
// import Image from "next/image";

function Header() {
  const headerVariant = {
    rest: {
      opacity: 1,
      // y: 50,
    },
    visible: {
      opacity: 0,
      // y: 0,
      transition: {
        // ease: [0.010, 0.785, 0.145, 1.035],
        duration: 3,
        delay: 2.2,
        staggerChildren: 30,
        when: "beforeChildren",
      },
    },
  };

  const childVariant = {
    rest: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.01, 0.785, 0.125, 1.0],
        duration: 0.9,
        delay: 1,
      },
    },
  };
  const childVariant2 = {
    rest: {
      opacity: 0,
      y: 250,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.01, 0.785, 0.125, 1.0],
        duration: 0.9,
        delay: 1,
      },
    },
  };
  const childVariant3 = {
    rest: {
      opacity: 0,
      y: 450,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.01, 0.785, 0.125, 1.0],
        duration: 0.9,
        delay: 1,
      },
    },
  };

  return (
    <div className={styles.header}>
      <video
        src="https://firebasestorage.googleapis.com/v0/b/peggs-web.appspot.com/o/edekee.mp4?alt=media&token=32a8328d-9a25-455a-b551-56cf6ff4bf5d"
        autoPlay
        muted
        controls
      ></video>

      <motion.div
        className={styles.thumbnail}
        variants={headerVariant}
        initial="rest"
        animate="visible"
      >
        {/* <div className={styles.imageWrapper}>

        <Image
          src="https://firebasestorage.googleapis.com/v0/b/peggs-web.appspot.com/o/heroImg.jpg?alt=media&token=d1554a5d-13fb-4e81-a65c-b8d8ec823177"
          alt=""
          layout="fill"
        />
        </div> */}
        <motion.p
          className={styles.headerPrimaryText}
          variants={childVariant}
          initial="rest"
          animate="visible"
        >
          Connecting People to Products
        </motion.p>
        <motion.p
          className={styles.headerSecondaryText}
          variants={childVariant2}
          initial="rest"
          animate="visible"
        >
          Find Meaning, Creating Connections with Edekee.
        </motion.p>
        <motion.div
          className={styles.videoPlayIcon}
          variants={childVariant3}
          initial="rest"
          animate="visible"
        >
          <img src="./icons/videoPlayButton.svg" alt="play video" />
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.headerWrapper}
        variants={headerVariant}
        initial="rest"
        animate="visible"
      >
        {/* <motion.p className={styles.headerPrimaryText} variants={childVariant}>
          Connecting People to Products
        </motion.p>
        <motion.p
          className={styles.headerSecondaryText}
          variants={childVariant2}
        >
          Find Meaning, Creating Connections with Edekee.
        </motion.p>
        <motion.div className={styles.videoPlayIcon} variants={childVariant3}>
          <img src="./icons/videoPlayButton.svg" alt="play video" />
        </motion.div> */}
      </motion.div>
    </div>
  );
}

export default Header;
