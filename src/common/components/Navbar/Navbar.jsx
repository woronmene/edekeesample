import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button";
import styles from "./Navbar.module.scss";
// import Link from "next/link";

export default function Navbar() {
  //   const [sidemenu, setSidemenu] = useState(false);

  const showSideMenu = () => setSidemenu(!sidemenu);

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });

  return (
    <div className={styles.navbar}>
      <div
        className={`${styles.navbarContainer} ${
          show && styles.nav__transluscent
        }`}
      >
        <div className={styles.navbarLeft}>
          <span className={styles.menuIcon} onClick={showSideMenu}>
            <img src="./icons/mainLogo.svg" className="" alt="" />
          </span>
        </div>

        {/* <div className={styles.navbarCenter}>
            // <Link href="/">
              <img
                src="./logos/peggs-logo.svg"
                className={styles.peggsLogo}
                alt=""
              />
            // </Link>
          </div> */}
        <div className={styles.navbarRight}>
          <div className={styles.navbarIcons}>
            <div className={styles.navbarIconItem}>
              <img src="./icons/home.svg" alt="" />
              <p>Home</p>
            </div>
            {/* <Link href="/"> */}
            <div className={styles.navbarIconItem}>
              <img src="./icons/profile.svg" alt="" />
              <p>Profile</p>
            </div>
            {/* </Link> */}

            {/* <Link href="/video-page"> */}
            <div className={styles.navbarIconItem}>
              <img src="./icons/cart.svg" alt="" />
              <p>Cart</p>
            </div>
            {/* </Link> */}
            {/* <Link href="/"> */}
            <Button />
            {/* // </Link> */}
          </div>
        </div>

        {/* <div className="sideBar">
            <img src="./icons/close-icon.svg" alt="" className="closeIcon" />
            </div> */}
        {/* <div className={`${styles.sideBar} ${sidemenu ? styles.active : ""}`}> */}
        {/* <div className={styles.sideBar}>
          <img
            src="./icons/close-icon.svg"
            alt=""
            className="closeIcon"
            onClick={showSideMenu}
          />
        </div> */}
      </div>
    </div>
  );
}
