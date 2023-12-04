import React from "react";

import light from "/img/icons/light.svg";
import dark from "/img/icons/dark.svg";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navRow}>
          <a href="./index.html" className={styles.logo}>
            <strong>Frontend</strong> portfolio
          </a>

          <button className={styles.dark}>
            <img className={styles.darkIcon} src={light} alt="Light mode" />
            <img className={styles.darkIcon} src={dark} alt="Dark mode" />
          </button>

          <ul className={styles.navList}>
            <li>
              <a className={styles.link} href="./index.html">
                Home
              </a>
            </li>
            <li>
              <a className={styles.link} href="./projects.html">
                Projects
              </a>
            </li>
            <li>
              <a className={styles.link} href="./contacts.html">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
