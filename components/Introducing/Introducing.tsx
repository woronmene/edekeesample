import React from "react";
import styles from "./Introducing.module.scss";

function Introducing() {
  return (
    <div className={styles.introducing}>
      <div className={`${styles.introducingWrapper} globalContainer`}>
        <div className="globalSubheading globalPurple">The company</div>
        <div className={styles.mainContent}>
          <div className="globalHeading globalTextLight">
            {/* <div className={styles.mainContentHeading}> */}
            Introducing <br /> Edekee <span className="globalDot">.</span>
          </div>
          <div className="globalContent globalTextDark300">
            {/* <div className={styles.mainContentInfo}> */}
            Edekee is a video commerce platform that enables brands,
            advertisers, and publishers to showcase their products through video
            content on their websites or social media accounts using our{" "}
            <span className="globalPurple">Video Tagging API</span> and
            <span className="globalPurple"> Retail API </span>thereby meeting
            the end-users needs. you.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introducing;
