import React from "react";
import { useParams } from "react-router-dom";

import projects from "../../assets/projectList";
import styles from "./ProjectInfo.module.scss";

const ProjectInfo = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className={styles.info}>
          <h1 className="title-1">{project.title}</h1>

          <img
            className={styles.bigImg}
            src={project.imgBig}
            alt={project.title}
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          <a href="#!" className="btn-outline">
            <img src="./img/icons/gitHub-black.svg" alt="" />
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProjectInfo;
