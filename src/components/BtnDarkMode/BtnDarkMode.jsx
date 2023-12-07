import React from "react";

import light from "/img/icons/light.svg";
import dark from "/img/icons/dark.svg";
import styles from "./BtnDarkMode.module.scss";

const BtnDarkMode = () => {
  const [isDark, setIsDark] = React.useState(false);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  React.useEffect(() => {
    if (isDark === true) {
      document.body.classList.add("dark");
    }
    document.body.classList.remove("dark");
  }, [isDark]);

  return (
    <button className={styles.dark} onClick={() => toggleDarkMode()}>
      <img className={styles.darkIcon} src={light} alt="Light mode" />
      <img className={styles.darkIcon} src={dark} alt="Dark mode" />
    </button>
  );
};

export default BtnDarkMode;
