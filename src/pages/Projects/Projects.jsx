import React from "react";

import projects from "../../assets/projectList";
import styles from "./Projects.module.scss";
import Project from "../../components/Project/Project";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className={styles.projects}>
          {projects.map((project, i) => (
            <Project key={project.title} id={i} {...project} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
