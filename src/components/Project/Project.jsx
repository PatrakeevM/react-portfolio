import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Project.module.scss";

const Project = ({ img, title, id }) => {
  return (
    <NavLink to={`/project/${id}`}>
      <li className={styles.project}>
        <img src={img} alt="Project img" />
        <h3>{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
