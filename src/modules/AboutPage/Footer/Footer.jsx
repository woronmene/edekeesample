import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopWrapper}>
            <div className={styles.footerLinks}>
              <p className={`${styles.firstLink} globalTextDark200`}>Company</p>
              <p className={styles.footerLink}>About</p>
              <p className={styles.footerLink}>Product</p>
            </div>
            <div className={styles.footerLinks}>
              <p className={`${styles.firstLink} globalTextDark200`}>Product</p>
              <p className={styles.footerLink}>Video Commerce Platform</p>
              <p className={styles.footerLink}>Video tagging API</p>
              <p className={styles.footerLink}>Retail API</p>
            </div>
            <div className={styles.footerLinks}>
              <p className={`${styles.firstLink} globalTextDark200`}>Contact</p>
              <p className={styles.footerLink}>
                Mulliner Towers, 39 Alfred Rewane Road,
              </p>
              <p className={styles.footerLink}>Ikoyi, Lagos.</p>
              <p className={styles.footerLink}>info@edekee.com</p>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.bottomLeft}>
            <img src="./icons/edekeeFullLogo.svg" alt="" />
            <p>Find Meaning. Create connections</p>
          </div>

          <div className={styles.bottomCenter}>
            <p className={styles.terms}>Terms and Conditions</p>
            <p className={styles.privacy}>Privacy Policy</p>
          </div>

          <div className={styles.bottomRight}>
            <a href="" target="_blank" rel="noreferrer">
              <img src="./icons/gmailIcon.svg" alt="" />
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=100079957671947"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./icons/Facebook.svg" alt="" />
            </a>

            <a
              href="https://www.instagram.com/edekee.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./icons/instagram.svg" alt="" />
            </a>

            <a
              href="https://twitter.com/EdekeeApp?t=YmfDhGtd4HMqSDlvRWRK3Q&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./icons/Twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
