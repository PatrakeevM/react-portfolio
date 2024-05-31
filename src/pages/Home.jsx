import React from "react";

import Header from "../components/Header/Header";
import html from "/img/icons/html.svg";
import css from "/img/icons/css.svg";
import scss from "/img/icons/scss.svg";
import js from "/img/icons/js.svg";
import react from "/img/icons/react.svg";
import redux from "/img/icons/redux.svg";
import git from "/img/icons/git.svg";
import mui from "/img/icons/mui.svg";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Фронтенд</h2>
              <div>
                <ul>
                  <li className="content-list__inner">
                    <p>HTML,</p>
                    <img src={html} alt="HTML" />
                  </li>
                  <li className="content-list__inner">
                    <p>CSS,</p>
                    <img src={css} alt="CSS" />
                  </li>
                  <li className="content-list__inner">
                    <p>SCSS,</p>
                    <img src={scss} alt="SCSS" />
                  </li>
                  <li className="content-list__inner">
                    <p>Material UI,</p>
                    <img src={mui} alt="MUI" />
                  </li>
                  <li className="content-list__inner">
                    <p>JavaScript,</p>
                    <img src={js} alt="JS" />
                  </li>
                  <li className="content-list__inner">
                    <p>React.js,</p>
                    <img src={react} alt="React" />
                  </li>
                  <li className="content-list__inner">
                    <p>Redux Toolkit,</p>
                    <img src={redux} alt="Redux" />
                  </li>
                  <li className="content-list__inner">
                    <p>Git</p>
                    <img src={git} alt="Git" />
                  </li>
                </ul>
              </div>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Бэкенд</h2>
              <p>В процессе изучения :)</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
