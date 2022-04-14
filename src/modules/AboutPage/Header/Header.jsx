import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";

function Header({ videoPlaying, showVideo }) {
  const vidRef = useRef(null);
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
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    setAllowVideo(true);
  }, []);

  const playVideo = () => {
    vidRef.current.play();
  };
  const stopVideo = () => {
    vidRef.current.pause();
    vidRef.current.currentTime = 0;
  };

  return (
    <div className={styles.header}>
      {allowVideo && (
        <video
          ref={vidRef}
          className={`${styles.video} ${videoPlaying && styles.indexChange}`}
          controls
          src="https://firebasestorage.googleapis.com/v0/b/peggs-web.appspot.com/o/edekee.mp4?alt=media&token=32a8328d-9a25-455a-b551-56cf6ff4bf5d"
        ></video>
      )}
      <div
        className={`${styles.overlay} ${
          videoPlaying && styles.overlayIndexChange
        }`}
      ></div>
      <img
        id="stop-button"
        src="./icons/cancel_vid.svg"
        alt="stop video"
        className={`${styles.cancel} ${
          videoPlaying && styles.cancelIndexChange
        }`}
        onClick={() => {
          stopVideo();
          showVideo();
        }}
      />

      <motion.div
        className={styles.thumbnail}
        variants={headerVariant}
        initial="rest"
        whileTap="visible"
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
          variants={childVariant}
          initial="rest"
          animate="visible"
        >
          Find Meaning, Creating Connections with Edekee.
        </motion.p>
        <motion.div
          className={styles.videoPlayIcon}
          variants={childVariant}
          initial="rest"
          animate="visible"
          onClick={() => {
            showVideo();
            playVideo();
          }}
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
