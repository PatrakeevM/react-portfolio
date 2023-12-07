import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";

const Nav = () => {
  const activeLink = `${styles.link} ${styles.linkActive}`;
  const commonLink = `${styles.link}`;

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navRow}>
          <NavLink to={"/"} className={styles.logo}>
            <strong>Frontend</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className={styles.navList}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : commonLink
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : commonLink
                }
                to={"/projects"}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : commonLink
                }
                to={"/contacts"}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
