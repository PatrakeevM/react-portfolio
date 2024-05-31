import React from "react";
import { NavLink } from "react-router-dom";

import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";
import styles from "./Nav.module.scss";

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
                Обо мне
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : commonLink
                }
                to={"/projects"}
              >
                Проекты
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : commonLink
                }
                to={"/contacts"}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
