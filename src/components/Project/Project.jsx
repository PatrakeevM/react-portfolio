import React from "react";

import styles from "./Project.module.scss";

const Project = ({ img, title }) => {
  return (
    <li className={styles.project}>
      <a href="./project-page.html">
        <img src={img} alt="Project img" />
        <h3>{title}</h3>
      </a>
    </li>
  );
};

export default Project;
