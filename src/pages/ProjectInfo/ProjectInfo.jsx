import React from "react";

import styles from "./ProjectInfo.module.scss";

const ProjectInfo = () => {
  return (
    <main className="section">
      <div className="container">
        <div className={styles.info}>
          <h1 className="title-1">Video service</h1>

          <img
            className={styles.bigImg}
            src="./img/projects/02-big.jpg"
            alt=""
          />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
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
