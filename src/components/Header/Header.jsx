import React from "react";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className="header__title">
          <strong>
            Привет, меня зовут <em>Матвей</em>
          </strong>
          <br />я фронтенд-разработчик
        </h1>
        <div className="header__text">
          <p>горящий своим делом</p>
        </div>
        <a
          className="btn"
          href="/CV.pdf"
          download={"Матвей_Патракеев_Фронтенд-разработчик"}
        >
          Моё резюме
        </a>
      </div>
    </header>
  );
};

export default Header;
