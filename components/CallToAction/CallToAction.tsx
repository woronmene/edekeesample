import React from "react";
import styles from "./CallToAction.module.scss";
function CallToAction() {
  return (
    <div className={styles.callToAction}>
      <div className={`${styles.callToActionWrapper} globalContainer`}>
        <div className={styles.image}>
          <img src="./images/callToActionImage.png" alt="" />
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
      </div>
    </div>
  );
}

export default CallToAction;
