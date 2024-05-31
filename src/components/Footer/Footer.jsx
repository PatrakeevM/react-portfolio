import React from "react";

import vk from "/img/icons/vk.svg";
import inst from "/img/icons/telegram.svg";
import git from "/img/icons/gitHub.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <ul>
            <li>
              <a target="_blank" href="https://vk.com/m.patrakeev">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li>
              <a href="https://t.me/Mpatrakeev">
                <img src={inst} alt="Link" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/PatrakeevM">
                <img src={git} alt="Link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
