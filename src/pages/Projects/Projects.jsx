import React from "react";

import project1 from "/img/projects/01.jpg";
import project2 from "/img/projects/02.jpg";
import project3 from "/img/projects/03.jpg";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className={styles.projects}>
          <li>
            <a href="./project-page.html">
              <img src={project1} alt="Project img" />
              <h3>Gaming streaming portal</h3>
            </a>
          </li>
          <li>
            <a href="./project-page.html">
              <img src={project2} alt="Project img" />
              <h3>Video service</h3>
            </a>
          </li>
          <li>
            <a href="./project-page.html">
              <img src={project3} alt="Project img" />
              <h3>Video portal</h3>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Projects;
