import React from "react";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  const [sidemenu, setSidemenu] = useState(false);

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
    <div className={styles.header}>
      <div
        className={`${styles.headerContainer} ${
          show && styles.nav__transluscent
        }`}
      >
        {/* <div className={`headerContainer ${show && "nav__transluscent"}`}> */}
        <div className={styles.headerLeft}>
          <span className={styles.menuIcon} onClick={showSideMenu}>
            <img src="/assets/icons/menu-icon.svg" className="" alt="" />
          </span>
        </div>

        <div className={styles.headerCenter}>
          <Link href="/">
            <img
              src="/assets/logos/peggs-logo.svg"
              className={styles.peggsLogo}
              alt=""
            />
          </Link>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerIcons}>
            <div className={styles.headerIconItem}>
              <img src="/assets/icons/search-icon.svg" alt="" />
            </div>
            <Link href="/">
              <div className={styles.headerIconItem}>
                <img src="/assets/icons/home-icon.svg" alt="" />
              </div>
            </Link>

            <Link href="/video-page">
              <div className={styles.headerIconItem}>
                <img src="/assets/icons/notification-icon.svg" alt="" />
              </div>
            </Link>
            <Link href="/">
              <div className={styles.headerIconItem}>
                <img src="/assets/icons/profile-icon.svg" alt="" />
              </div>
            </Link>
            {/* <Link href="/videosPage">
              <div className={styles.headerIconItem}>
                <img src="/assets/icons/profile-icon.svg" alt="" />
              </div>
            </Link> */}
          </div>
        </div>
      </div>

      {/* <div className="sideBar">
            <img src="/assets/icons/close-icon.svg" alt="" className="closeIcon" />
            </div> */}
      {/* <div className={`${styles.sideBar} ${sidemenu ? styles.active : ""}`}> */}
      <div className={styles.sideBar}>
        <img
          src="/assets/icons/close-icon.svg"
          alt=""
          className="closeIcon"
          onClick={showSideMenu}
        />
      </div>
    </div>
  );
}
