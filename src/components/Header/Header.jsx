import React from "react";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Matvey</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          className="btn"
          href="/CV.pdf"
          download={"Матвей_Патракеев_Фронтенд-разработчик"}
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
