import React from "react";

import projects from "../../assets/projectList";
import styles from "./Projects.module.scss";
import Project from "../../components/Project/Project";
import Skeleton from "../../components/Skeleton";

const Projects = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const skeleton = [...new Array(3)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const items = projects.map((project, index) => (
    <Project key={project.title} id={index} {...project} />
  ));

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Мои проекты</h2>
        <ul className={styles.projects}>{isLoading ? skeleton : items}</ul>
      </div>
    </main>
  );
};

export default Projects;
